import React from 'react'
import cx from 'classnames'
import { RemindIndexLeftIcon, RemindIndexRightIcon } from '@gd-uikit/icons'

import { navigatorItem, navigatorLeft, navigatorRight, navigatorDisabled } from './index.css'

import type { QuickLookItemStore } from '../hooks/useQuickLookItemStore'

interface QuickLookNavigatorProps {
  store: QuickLookItemStore
  currentIdx: number
  onNavigatePrev: () => void
  onNavigateNext: () => void
}
const QuickLookNavigator: React.FC<QuickLookNavigatorProps> = ({
  store,
  currentIdx,
  onNavigatePrev,
  onNavigateNext,
}) => {
  if (store.listById.length < 1) return null

  const showNavigatorItem = store.listById.length > 1

  return (
    <div onClick={e => e.stopPropagation()}>
      {showNavigatorItem && (
        <a
          className={cx(navigatorItem, navigatorLeft, {
            [navigatorDisabled]: currentIdx === 0,
          })}
          onClick={onNavigatePrev}
          title={'上一个'}
        >
          <RemindIndexLeftIcon size={24} />
        </a>
      )}
      {showNavigatorItem && (
        <a
          className={cx(navigatorItem, navigatorRight, {
            [navigatorDisabled]: currentIdx === store.listById.length - 1,
          })}
          onClick={onNavigateNext}
          title={'下一个'}
        >
          <RemindIndexRightIcon size={24} />
        </a>
      )}
    </div>
  )
}

export default QuickLookNavigator
