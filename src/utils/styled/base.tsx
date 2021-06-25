import {
  getDefaultShouldForwardProp,
  composeShouldForwardProps,
  StyledOptions,
  PrivateStyledComponent,
  StyledElementType,
} from './utils'
import { getRegisteredStyles, insertStyles } from '@emotion/utils'
import { serializeStyles } from '@emotion/serialize'
import { withEmotionCache } from './context'
import { Dynamic } from 'solid-js/web'
import { Component } from 'solid-js'

const ILLEGAL_ESCAPE_SEQUENCE_ERROR = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`

const isBrowser = typeof document !== 'undefined'

const createStyled = (tag: any, options?: StyledOptions) => {
  if (process.env.NODE_ENV !== 'production') {
    if (tag === undefined) {
      throw new Error(
        'You are trying to create a styled element with an undefined component.\nYou may have forgotten to import it.'
      )
    }
  }
  const isReal = tag.__emotion_real === tag
  const baseTag = (isReal && tag.__emotion_base) || tag

  let identifierName: string | undefined
  let targetClassName: string | undefined
  if (options !== undefined) {
    identifierName = options.label
    targetClassName = options.target
  }

  const shouldForwardProp = composeShouldForwardProps(tag, options, isReal)
  const defaultShouldForwardProp =
    shouldForwardProp || getDefaultShouldForwardProp(baseTag)
  const shouldUseAs = !defaultShouldForwardProp('as')

  return function <Props>(
    ...args: (object | ((props: Props) => object))[]
  ): PrivateStyledComponent<Props> {
    let styles =
      isReal && tag.__emotion_styles !== undefined
        ? tag.__emotion_styles.slice(0)
        : []

    if (identifierName !== undefined) {
      styles.push(`label:${identifierName};`)
    }
    if (args[0] == null || (args as any)[0].raw === undefined) {
      styles.push.apply(styles, args)
    } else {
      if (
        process.env.NODE_ENV !== 'production' &&
        (args as any)[0][0] === undefined
      ) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR)
      }
      styles.push((args as any)[0][0])
      let len = args.length
      let i = 1
      for (; i < len; i++) {
        if (
          process.env.NODE_ENV !== 'production' &&
          (args as any)[0][i] === undefined
        ) {
          console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR)
        }
        styles.push(args[i], (args as any)[0][i])
      }
    }

    const Styled: PrivateStyledComponent<Props> = withEmotionCache(
      (props: Props, cache: any, ref: any) => {
        const finalTag = (shouldUseAs && (props as any).as) || baseTag

        let className = ''
        let classInterpolations: string[] = []
        let mergedProps: Record<string, any> = props
        if ((props as any).theme == null) {
          mergedProps = {}
          for (let key in props) {
            mergedProps[key] = (props as any)[key]
          }
          // mergedProps.theme = useContext(ThemeContext)
        }

        if (typeof (props as any).className === 'string') {
          className = getRegisteredStyles(
            cache.registered,
            classInterpolations,
            (props as any).className
          )
        } else if ((props as any).className != null) {
          className = `${(props as any).className} `
        }

        const serialized = serializeStyles(
          styles.concat(classInterpolations),
          cache.registered,
          mergedProps
        )
        const rules = insertStyles(
          cache,
          serialized,
          typeof finalTag === 'string'
        )
        className += `${cache.key}-${serialized.name}`
        if (targetClassName !== undefined) {
          className += ` ${targetClassName}`
        }

        const finalShouldForwardProp =
          shouldUseAs && shouldForwardProp === undefined
            ? getDefaultShouldForwardProp(finalTag)
            : defaultShouldForwardProp

        let newProps: Record<string, any> = {}

        for (let key in props) {
          if (shouldUseAs && key === 'as') continue

          if (finalShouldForwardProp(key)) {
            newProps[key] = (props as any)[key]
          }
        }

        newProps.className = className
        newProps.ref = ref

        const ele = <Dynamic component={finalTag} {...newProps} />
        if (!isBrowser && rules !== undefined) {
          let serializedNames = serialized.name
          let next = serialized.next
          while (next !== undefined) {
            serializedNames += ' ' + next.name
            next = next.next
          }
          return (
            <>
              <style
                {...{
                  [`data-emotion`]: `${cache.key} ${serializedNames}`,
                  dangerouslySetInnerHTML: { __html: rules },
                  nonce: cache.sheet.nonce,
                }}
              />
              {ele}
            </>
          )
        }
        return ele
      }
    )

    // Styled.displayName =
    //   identifierName !== undefined
    //     ? identifierName
    //     : `Styled(${
    //         typeof baseTag === 'string'
    //           ? baseTag
    //           : baseTag.displayName || baseTag.name || 'Component'
    //       })`
    // console.log(tag)
    // ;(Styled as any).defaultProps = tag.defaultProps(
    //   Styled as any
    // ).__emotion_real = Styled
    ;(Styled as any).__emotion_base = baseTag
    ;(Styled as any).__emotion_styles = styles
    ;(Styled as any).__emotion_forwardProp = shouldForwardProp

    Object.defineProperty(Styled, 'toString', {
      value() {
        if (
          targetClassName === undefined &&
          process.env.NODE_ENV !== 'production'
        ) {
          return 'NO_COMPONENT_SELECTOR'
        }
        return `.${targetClassName}`
      },
    })
    ;(Styled as any).withComponent = (
      nextTag: StyledElementType<Props>,
      nextOptions?: StyledOptions
    ) => {
      return createStyled(nextTag, {
        ...options,
        ...nextOptions,
        shouldForwardProp: composeShouldForwardProps(
          Styled as any,
          nextOptions,
          true
        ),
      })(
        // @ts-ignore
        ...styles
      )
    }

    return Styled
  }
}

export default createStyled
