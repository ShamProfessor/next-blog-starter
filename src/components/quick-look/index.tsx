import React, { useMemo, useState } from 'react'
import isEmpty from 'lodash/isEmpty'
import isNil from 'lodash/isNil'
import map from 'lodash/map'
import cx from 'classnames'

import { QuickLookContext } from './context'
import useQuickLookItemStore from './hooks/useQuickLookItemStore'
import QuickLoopItem from './item'
import QuickLookPreviewerWrapper from './previewer/wrapper'
import { trigger } from './index.css'

import type { QuickLookItemData } from './hooks/useQuickLookItemStore'
import type { QuickLookItemProps } from './item'

interface QuickLookProps {
  id?: string
  className?: string
  styles?: React.CSSProperties
  onOpen?: (index: number) => void
  onClose?: (index: number) => void
  onNavigate?: (index: number) => void
  onClick?: (event: React.MouseEvent) => void
  onMouseDown?: (event: React.MouseEvent) => void
  onMouseUp?: (event: React.MouseEvent) => void
}

const QuickLook: React.FC<QuickLookProps> & { Item: React.FC<QuickLookItemProps> } = ({
  id,
  className,
  styles,
  children,
  onOpen,
  onClose,
  onNavigate,
  onClick,
  onMouseDown,
  onMouseUp,
}) => {
  const { store, setItem, removeItem, updateIdList } = useQuickLookItemStore(id)
  const [currentItemId, setCurrentItemId] = useState<string>()
  const isOpened = useMemo(() => !isEmpty(currentItemId), [currentItemId])

  const contextValue = useMemo(
    () => ({
      register: (itemData: QuickLookItemData) => {
        const itemId = itemData.id ?? window.btoa(String(Date.now() + Math.random()))
        setItem(itemId, itemData)

        return {
          groupId: id,
          itemId,
          open: () => {
            if (!isNil(id)) {
              const orderedIdList = map(document.querySelectorAll(`[quick-look-group="${id}"]`), node =>
                node.getAttribute('quick-look-item')
              )

              if (!isEmpty(orderedIdList)) {
                updateIdList(orderedIdList as string[])
              }
            }
            setCurrentItemId(itemId)
          },
          unregister: () => {
            removeItem(itemId)
          },
        }
      },
    }),
    []
  )

  return (
    <QuickLookContext.Provider value={contextValue}>
      <>
        <div
          className={cx(trigger, className)}
          style={styles}
          onClick={onClick}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
        >
          {children}
        </div>
        {isOpened && (
          <QuickLookPreviewerWrapper
            store={store}
            currentItemId={currentItemId as string}
            setCurrentItemId={setCurrentItemId}
            onOpen={onOpen}
            onClose={onClose}
            onNavigate={onNavigate}
          />
        )}
      </>
    </QuickLookContext.Provider>
  )
}

QuickLook.Item = QuickLoopItem

export default QuickLook
