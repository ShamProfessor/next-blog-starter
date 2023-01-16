import { useCallback, useMemo, useRef } from 'react'
import isNil from 'lodash/isNil'
import uniq from 'lodash/uniq'

import type React from 'react'

export enum MEDIA_TYPE {
  Video = 'video',
  Image = 'image',
  Audio = 'audio',
  Other = 'other',
}
export interface QuickLookItemData {
  id?: string
  name?: string | React.JSXElementConstructor<void> | React.ReactElement
  thumbnail: string | React.JSXElementConstructor<void> | React.ReactElement
  preview: string | React.JSXElementConstructor<void> | React.ReactElement
  download?: string
  mediaType?: MEDIA_TYPE
}

export interface QuickLookItemStore {
  listById: string[]
  data: { [index: string]: QuickLookItemData }
}

const EXTERNAL_QUICK_LOOK_STORE = new Map<string, QuickLookItemStore>()

const createQuickLookStore = () => ({ listById: [], data: {} } as QuickLookItemStore)

const useQuickLookItemStore = (id?: string) => {
  const innerItems = useRef<QuickLookItemStore>(createQuickLookStore())

  const getStore = useCallback(
    (id?: string) => {
      if (isNil(id)) return innerItems.current

      if (!EXTERNAL_QUICK_LOOK_STORE.has(id)) {
        EXTERNAL_QUICK_LOOK_STORE.set(id, createQuickLookStore())
      }

      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return EXTERNAL_QUICK_LOOK_STORE.get(id)!
    },
    [innerItems]
  )

  const setItem = useCallback(
    (itemId: string, item: QuickLookItemData) => {
      const store = getStore(id)
      if (store.data[itemId]) {
        console.error(`[QuickLook]: ${itemId} has been registered!`)
      }
      store.listById.push(itemId)
      store.data[itemId] = item
      return itemId
    },
    [getStore, id]
  )

  const removeItem = useCallback(
    (itemId: string) => {
      const store = getStore(id)
      store.listById = store.listById.filter(iId => iId !== itemId)
      delete store.data[itemId]
    },
    [getStore, id]
  )

  const getItem = useCallback(
    (itemId: string) => {
      const store = getStore(id)
      return store.data[itemId]
    },
    [getStore, id]
  )

  const updateIdList = useCallback(
    (idList: string[]) => {
      const store = getStore(id)
      store.listById = uniq(idList)
    },
    [getStore, id]
  )

  return useMemo(
    () => ({ store: getStore(id), setItem, getItem, removeItem, updateIdList }),
    [getStore, id, setItem, getItem, removeItem, updateIdList]
  )
}

export default useQuickLookItemStore
