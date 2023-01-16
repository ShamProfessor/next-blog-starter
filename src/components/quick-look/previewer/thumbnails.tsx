import cx from 'classnames'
import React, { useCallback, useEffect, useRef } from 'react'
import isString from 'lodash/isString'

import { thumbnailImageType, thumbnails, thumbnailsItem, thumbnailsItemActive, thumbnailsList } from './index.css'

import type { QuickLookItemData, QuickLookItemStore } from '../hooks/useQuickLookItemStore'

interface QuickLookThumbnailsProps {
  store: QuickLookItemStore
  currentIdx: number
  setCurrentIdx: (currentIdx: number) => void
  isZoomed: boolean
}

const QuickLookThumbnails: React.FC<QuickLookThumbnailsProps> = ({ store, currentIdx, setCurrentIdx, isZoomed }) => {
  const listRef = useRef<HTMLUListElement>(null)

  const buildThumbnailContent = useCallback((item: QuickLookItemData) => {
    if (isString(item.thumbnail)) {
      return <img src={item.thumbnail} className={thumbnailImageType} />
    }

    return item.thumbnail
  }, [])

  useEffect(() => {
    setTimeout(() => {
      listRef.current?.children[currentIdx]?.scrollIntoView({ inline: 'center', behavior: 'smooth' })
    }, 50)
  }, [currentIdx])

  if (store.listById.length < 2) return null

  return (
    <div className={thumbnails} style={{ bottom: isZoomed ? -100 : 6 }} onClick={e => e.stopPropagation()}>
      <ul ref={listRef} className={thumbnailsList} style={{ width: store.listById.length * 106 - 6 }}>
        {store.listById.map((itemId, index) => {
          const item = store.data[itemId]
          return (
            <li
              key={itemId}
              className={cx(thumbnailsItem, currentIdx === index && thumbnailsItemActive)}
              onClick={() => setCurrentIdx(index)}
            >
              {buildThumbnailContent(item)}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default QuickLookThumbnails
