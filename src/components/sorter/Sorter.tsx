import { Component, createEffect, createSignal } from 'solid-js'

import ArrowIcon from '../../icons/ArrowIcon'
import StyledArrow from './StyledArrow'
import StyledContainer from './StyledContainer'

export type SorterProps = {
  class?: string
  dir?: 'asc' | 'desc'
  onChange?: (dir: SorterProps['dir']) => void
}

const Sorter: Component<SorterProps> = (props) => {
  const [dir, setDir] = createSignal(props.dir)

  createEffect(() => {
    setDir(props.dir)
  })

  createEffect(() => {
    if (props.onChange) {
      props.onChange(dir())
    }
  })

  const handleClick = () => {
    const currentDir = dir()
    if (!currentDir) {
      setDir('asc')
    } else if (currentDir === 'asc') {
      setDir('desc')
    } else {
      setDir(undefined)
    }
  }

  return (
    <StyledContainer class={props.class} onClick={handleClick}>
      <StyledArrow active={dir() === 'asc'} direction="up">
        <ArrowIcon />
      </StyledArrow>
      <StyledArrow active={dir() === 'desc'} direction="down">
        <ArrowIcon />
      </StyledArrow>
    </StyledContainer>
  )
}

export default Sorter
