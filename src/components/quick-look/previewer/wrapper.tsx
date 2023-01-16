import { useLayoutEffect } from 'react'

import ReactDOM from 'react-dom'

import React from 'react'

import useQuickLookContainer from '../hooks/useQuickLookContainer'

import QuickLookPreviewer from './index'

import type { QuickLookItemStore } from '../hooks/useQuickLookItemStore'

interface QuickLookPreviewerWrapperProps {
  store: QuickLookItemStore
  currentItemId: string
  setCurrentItemId: (currentItemId?: string) => void
  onOpen?: (index: number) => void
  onClose?: (index: number) => void
  onNavigate?: (index: number) => void
}

const QuickLookPreviewerWrapper: React.FC<QuickLookPreviewerWrapperProps> = props => {
  const container = useQuickLookContainer()

  useLayoutEffect(() => {
    ReactDOM.render(<QuickLookPreviewer {...props} container={container} />, container.current)

    return () => {
      ReactDOM.unmountComponentAtNode(container.current)
    }
  }, [container])

  return null
}

export default QuickLookPreviewerWrapper
