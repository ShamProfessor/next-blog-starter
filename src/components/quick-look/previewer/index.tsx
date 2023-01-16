import React, { useCallback, useEffect, useMemo, useState } from 'react'

import QuickLookShowStage from './show-stage'
import QuickLookPrompter from './prompter'
import QuickLookThumbnails from './thumbnails'
import QuickLookNavigator from './navigator'
import QuickLookToolbar from './toolbar'
import { mask, previewer } from './index.css'
import { useQuickLookKeyboardEvent } from '../hooks/useQuickLookKeyboardEvent'

import type { QuickLookItemStore } from '../hooks/useQuickLookItemStore'

interface QuickLookPreviewerProps {
  store: QuickLookItemStore
  currentItemId: string
  setCurrentItemId: (currentItemId?: string) => void
  onOpen?: (index: number) => void
  onClose?: (index: number) => void
  onNavigate?: (index: number) => void
  container: React.MutableRefObject<HTMLDivElement>
}

const QuickLookPreviewer: React.FC<QuickLookPreviewerProps> = ({
  store,
  currentItemId,
  setCurrentItemId,
  onOpen,
  onClose,
  onNavigate,
  container,
}) => {
  const [currentIdx, setCurrentIdx] = useState(() => store.listById.findIndex(iId => iId === currentItemId))
  const currentItem = useMemo(() => store.data[store.listById[currentIdx]], [store, currentIdx])
  const quickLookItemsCount = useMemo(() => store.listById.length, [store])
  const [rotateTimes, setRotateTimes] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)

  const handleNavigatePrev = useCallback(() => {
    const currentIndex = Math.max(currentIdx - 1, 0)
    setCurrentIdx(currentIndex)
    setRotateTimes(0)
    onNavigate?.(currentIndex)
  }, [currentIdx, onNavigate])

  const handleNavigateNext = useCallback(() => {
    const currentIndex = Math.min(currentIdx + 1, store.listById.length - 1)
    setCurrentIdx(currentIndex)
    setRotateTimes(0)
    onNavigate?.(currentIndex)
  }, [currentIdx, onNavigate, store.listById.length])

  const handleTransitionEnd = useCallback(() => {
    setCurrentItemId()
    onClose?.(currentIdx)
    container.current.removeEventListener('transitionend', handleTransitionEnd)
  }, [currentIdx, onClose, setCurrentItemId])

  const handleClose = useCallback(() => {
    container.current.addEventListener('transitionend', handleTransitionEnd, { once: true })
    container.current.style.opacity = '0'
    container.current.style.pointerEvents = 'none'
  }, [handleTransitionEnd])

  useQuickLookKeyboardEvent(container, currentIdx, handleNavigatePrev, handleNavigateNext, handleClose)

  useEffect(() => {
    container.current.style.opacity = '1'
    onOpen?.(currentIdx)
  }, [])

  return (
    <>
      <div className={mask} onClick={handleClose} />
      <div className={previewer} tabIndex={-1} onClick={handleClose}>
        <QuickLookShowStage
          key={currentIdx}
          currentItem={currentItem}
          rotateTimes={rotateTimes}
          isZoomed={isZoomed}
          setIsZoomed={setIsZoomed}
        />
        <QuickLookPrompter
          currentIdx={currentIdx}
          currentItem={currentItem}
          quickLookItemsCount={quickLookItemsCount}
        />
        <QuickLookThumbnails store={store} currentIdx={currentIdx} setCurrentIdx={setCurrentIdx} isZoomed={isZoomed} />
        <QuickLookToolbar
          currentItem={currentItem}
          onClose={handleClose}
          rotateTimes={rotateTimes}
          setRotateTimes={setRotateTimes}
        />
        <QuickLookNavigator
          store={store}
          currentIdx={currentIdx}
          onNavigatePrev={handleNavigatePrev}
          onNavigateNext={handleNavigateNext}
        />
      </div>
    </>
  )
}

export default QuickLookPreviewer
