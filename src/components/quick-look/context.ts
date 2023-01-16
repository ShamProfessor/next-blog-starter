import React from 'react'

import type { QuickLookItemData } from './hooks/useQuickLookItemStore'

interface QuickLookContextValue {
  register: (props: QuickLookItemData) => { open: () => void; unregister: () => void; groupId?: string; itemId: string }
}

export const QuickLookContext = React.createContext<QuickLookContextValue>({} as any)
