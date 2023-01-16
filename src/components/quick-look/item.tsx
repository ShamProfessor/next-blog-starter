import React, { useContext, useEffect, useMemo } from 'react'
import cx from 'classnames'
import isNil from 'lodash/isNil'
import isString from 'lodash/isString'
import isFunction from 'lodash/isFunction'
import noop from 'lodash/noop'

import { QuickLookContext } from './context'
import { item, itemImage } from './index.css'
import { isImage, isVideo } from './utils'
import { MEDIA_TYPE } from './hooks/useQuickLookItemStore'

export type QuickLookItemProps = {
  className?: string
  styles?: React.CSSProperties
  id?: string
  name?: string | React.JSXElementConstructor<void> | React.ReactElement
  preview?: string | React.JSXElementConstructor<void> | React.ReactElement
  mediaType?: string
  download?: string
} & (
  | {
      children: React.ReactElement | ((open: () => void) => React.ReactElement)
      thumbnail?: string | React.JSXElementConstructor<void> | React.ReactElement
    }
  | {
      children?: React.ReactElement | ((open: () => void) => React.ReactElement)
      thumbnail: string | React.JSXElementConstructor<void> | React.ReactElement
    }
)

const QuickLoopItem: React.FC<QuickLookItemProps> = ({
  id,
  name,
  className,
  styles,
  thumbnail,
  preview,
  download,
  children,
}) => {
  const { register } = useContext(QuickLookContext)

  const { groupId, itemId, open, unregister } = useMemo(() => {
    const _thumbnail = (() => {
      if (!isNil(thumbnail)) return thumbnail
      if (isFunction(children)) return children(noop)
      return children as React.ReactElement
    })()

    const _preview = (() => {
      if (!isNil(preview)) return preview
      if (!isNil(thumbnail)) return thumbnail
      if (isFunction(children)) return children(noop)
      return children as React.ReactElement
    })()

    const _mediaType = (() => {
      if (isString(preview)) {
        if (isImage(preview)) return MEDIA_TYPE.Image
        if (isVideo(preview)) return MEDIA_TYPE.Video
      }

      if (isString(name)) {
        if (isImage(name)) return MEDIA_TYPE.Image
        if (isVideo(name)) return MEDIA_TYPE.Video
      }

      return MEDIA_TYPE.Image
    })()

    return register({ id, name, thumbnail: _thumbnail, preview: _preview, download, mediaType: _mediaType })
  }, [])

  useEffect(() => unregister, [])

  if (!isNil(children)) {
    return React.cloneElement(
      isFunction(children) ? children(open) : children,
      !isNil(groupId)
        ? {
            'quick-look-group': groupId,
            'quick-look-item': itemId,
          }
        : {}
    )
  }

  if (!isNil(thumbnail)) {
    if (React.isValidElement(thumbnail)) {
      return React.cloneElement(
        thumbnail,
        !isNil(groupId)
          ? {
              'quick-look-group': groupId,
              'quick-look-item': itemId,
            }
          : {}
      )
    }

    if (isString(thumbnail)) {
      return (
        <a
          onClick={open}
          className={cx(item, className)}
          style={styles}
          {...(!isNil(groupId)
            ? {
                'quick-look-group': groupId,
                'quick-look-item': itemId,
              }
            : {})}
        >
          <img src={thumbnail} className={itemImage} alt={isString(name) ? name : thumbnail} />
        </a>
      )
    }
  }

  throw new Error('[QuickLook]: can not render item, children and thumbnail both blank.')
}

export default QuickLoopItem
