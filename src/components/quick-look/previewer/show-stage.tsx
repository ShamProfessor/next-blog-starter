import React, { useEffect, useRef, useState } from 'react'
import isString from 'lodash/isString'

import { loading, previewImageType, stage } from './index.css'
import { MEDIA_TYPE } from '../hooks/useQuickLookItemStore'

import type { QuickLookItemData } from '../hooks/useQuickLookItemStore'

interface QuickLookShowStageProps {
  currentItem: QuickLookItemData
  rotateTimes: number
  isZoomed: boolean
  setIsZoomed: (isZoomed: boolean) => void
}

type ImageStatus = 'normal' | 'error' | 'loading'
const QuickLookShowStage: React.FC<QuickLookShowStageProps> = ({ currentItem, rotateTimes, isZoomed, setIsZoomed }) => {
  const { preview, mediaType, name, download } = currentItem
  const [status, setStatus] = useState<ImageStatus>('loading')
  const isLoading = status === 'loading'
  const isError = status === 'error'

  const isImageType = mediaType === MEDIA_TYPE.Image
  const isVideoType = mediaType === MEDIA_TYPE.Video

  const imgLoaderRef = useRef(
    (() => {
      if (isImageType) {
        const imageEL = new Image()
        imageEL.src = preview as string
        return imageEL
      }
    })()
  )

  useEffect(() => {
    if (imgLoaderRef.current) {
      imgLoaderRef.current.onload = e => {
        setStatus('normal')
      }
      imgLoaderRef.current.onerror = e => {
        console.log('error', e)
        setStatus('error')
      }
    }
  }, [])

  const rotateStyle = {
    transform: `rotate(${rotateTimes * 90}deg) scale(${isZoomed ? 1.5 : 1})`,
    cursor: isZoomed ? 'zoom-out' : 'zoom-in',
  }

  const getPreviewContent = () => {
    if (isImageType) {
      return (
        <img
          className={previewImageType}
          src={preview as string}
          alt={isString(name) ? name : (preview as string)}
          style={rotateStyle}
          onClick={() => setIsZoomed(!isZoomed)}
        />
      )
    }
    if (isVideoType) {
      return (
        <video
          src={preview as string}
          controls
          width="100%"
          height="100%"
          hidden
          onCanPlay={e => {
            const videoElement = e.target as HTMLVideoElement
            videoElement.style.width = 'auto'
            videoElement.style.height = 'auto'
            videoElement.style.maxHeight = '100%'
            videoElement.removeAttribute('hidden')
            setStatus('normal')
          }}
          onError={() => setStatus('error')}
        />
      )
    }
    return <>{preview}</>
  }

  return (
    <div
      className={stage}
      onClick={e => {
        if (e.target !== e.currentTarget) {
          e.stopPropagation()
        }
      }}
    >
      {isLoading && (isImageType || isVideoType) && <div className={loading}></div>}
      {isError ? (
        <a href={download} download={name}>
          {name}
        </a>
      ) : (
        getPreviewContent()
      )}
    </div>
  )
}

export default QuickLookShowStage
