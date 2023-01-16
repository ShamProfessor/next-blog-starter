import React from 'react'
import isEmpty from 'lodash/isEmpty'
import isString from 'lodash/isString'

import { prompter, prompterContent } from './index.css'

import type { QuickLookItemData } from '../hooks/useQuickLookItemStore'

interface QuickLookPrompterProps {
  currentIdx: number
  currentItem: QuickLookItemData
  quickLookItemsCount: number
}

const QuickLookPrompter: React.FC<QuickLookPrompterProps> = ({ currentIdx, currentItem, quickLookItemsCount }) => {
  return (
    <div
      className={prompter}
      onClick={e => {
        if (e.target !== e.currentTarget) {
          e.stopPropagation()
        }
      }}
    >
      {!isEmpty(currentItem.name) && isString(currentItem.name) && (
        <span className={prompterContent} title={currentItem.name}>
          {currentItem.name}
        </span>
      )}
      {!isEmpty(currentItem.name) && React.isValidElement(currentItem.name) && currentItem.name}
      <span>{`(${currentIdx + 1}/${quickLookItemsCount})`}</span>
    </div>
  )
}

export default QuickLookPrompter
