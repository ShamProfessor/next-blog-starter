import React from 'react'
import { FunctionCloseIcon, AttachmentDownloadIcon, TurnToTheRightIcon, TurnToTheLeftIcon } from '@gd-uikit/icons'
import isNil from 'lodash/isNil'
import map from 'lodash/map'
import isString from 'lodash/isString'

import { operationBar, operationItem } from './index.css'
import { MEDIA_TYPE } from '../hooks/useQuickLookItemStore'

import type { QuickLookItemData } from '../hooks/useQuickLookItemStore'
import type { FC } from 'react'

interface QuickLookToolbarProps {
  currentItem: QuickLookItemData
  onClose: () => void
  rotateTimes: number
  setRotateTimes: (rotateTimes: number) => void
}

const QuickLookToolbar: FC<QuickLookToolbarProps> = ({ currentItem, onClose, rotateTimes, setRotateTimes }) => {
  const { download, name, mediaType } = currentItem

  const handleDownload = () => {
    const a = document.createElement('a')
    a.setAttribute('href', download as string)
    a.setAttribute('target', '_blank')
    a.setAttribute('rel', 'noreferrer')
    a.setAttribute('download', isString(name) ? name : 'true')
    a.click()
  }

  const tools = [
    {
      IconComponent: TurnToTheLeftIcon,
      onClick: () => {
        setRotateTimes(rotateTimes - 1)
      },
      name: 'rotateLeft',
      show: mediaType === MEDIA_TYPE.Image,
      size: 20,
      title: '向左旋转',
    },
    {
      IconComponent: TurnToTheRightIcon,
      onClick: () => {
        setRotateTimes(rotateTimes + 1)
      },
      name: 'rotateRight',
      show: mediaType === MEDIA_TYPE.Image,
      size: 20,
      title: '向右旋转',
    },
    {
      IconComponent: AttachmentDownloadIcon,
      onClick: handleDownload,
      name: 'download',
      show: !isNil(download),
      size: 22,
      title: '下载',
    },
    {
      IconComponent: FunctionCloseIcon,
      onClick: onClose,
      name: 'close',
      show: true,
      size: 24,
      title: '关闭',
    },
  ]

  return (
    <div className={operationBar} onClick={e => e.stopPropagation()}>
      {map(tools, ({ show, name, IconComponent, onClick, size, title }) => (
        <React.Fragment key={name}>
          {show && (
            <a className={operationItem} onClick={onClick} title={title}>
              <IconComponent size={size} />
            </a>
          )}
        </React.Fragment>
      ))}
    </div>
  )
}

export default QuickLookToolbar
