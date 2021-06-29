import { Component, createEffect, createSignal, Show, For } from 'solid-js'

import ChevronLeft from '../../icons/ChevronLeft'
import ChevronRight from '../../icons/ChevronRight'
import { Button, ButtonProps } from '../button'
import StyledContainer from './StyledContainer'

export type PaginationProps = {
  currentPage?: number
  pages: number
}

const Pagination: Component<PaginationProps> = (props) => {
  const [currentPage, setCurrentPage] = createSignal(props.currentPage || 1)

  createEffect(() => {
    if (props.currentPage != null) {
      setCurrentPage(props.currentPage)
    }
  })

  const previous = () => {
    setCurrentPage(Math.max(1, currentPage() - 1))
  }

  const next = () => {
    setCurrentPage(Math.min(props.pages, currentPage() + 1))
  }

  return (
    <StyledContainer>
      <Button
        variant="default"
        shape="circle"
        size="extra-small"
        type="filled"
        disabled={currentPage() <= 1}
        icon={<ChevronLeft />}
        onClick={previous}
      />
      <For each={[1, 2, 3, 4, 5]}>
        {(_, index) => (
          <Show when={props.pages >= index() + 1}>
            <Button
              variant={currentPage() === index() + 1 ? 'primary' : 'default'}
              shape="circle"
              size="extra-small"
              onClick={() => setCurrentPage(index() + 1)}
            >
              {index() + 1}
            </Button>
          </Show>
        )}
      </For>
      <Button
        variant="default"
        shape="circle"
        size="extra-small"
        type="filled"
        disabled={currentPage() >= props.pages}
        icon={<ChevronRight />}
        onClick={next}
      />
    </StyledContainer>
  )
}

export default Pagination
