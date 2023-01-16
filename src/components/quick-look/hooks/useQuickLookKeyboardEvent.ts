import { useCallback, useEffect } from 'react'

import type React from 'react'

export const useQuickLookKeyboardEvent = (
  container: React.MutableRefObject<HTMLDivElement>,
  currentIdx: number,
  handleNavigatePrev: () => void,
  handleNavigateNext: () => void,
  handleClose: () => void
) => {
  const handleKeyup = useCallback(
    (e: KeyboardEvent) => {
      e.stopPropagation()
      e.preventDefault()

      if ('arrowleft' === e.key.toLowerCase() || e.keyCode === 37) {
        handleNavigatePrev()
      }

      if ('arrowright' === e.key.toLowerCase() || e.keyCode === 39) {
        handleNavigateNext()
      }

      if ('escape' === e.key.toLowerCase() || e.keyCode === 27) {
        handleClose()
      }
    },
    [handleClose, handleNavigateNext, handleNavigatePrev]
  )

  useEffect(() => {
    container.current.addEventListener('keyup', handleKeyup)
    return () => {
      container.current.removeEventListener('keyup', handleKeyup)
    }
  }, [container, currentIdx, handleKeyup])
}
