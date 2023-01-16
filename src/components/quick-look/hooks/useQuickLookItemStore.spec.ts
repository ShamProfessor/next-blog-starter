import React from 'react'
import { expect, it } from 'vitest'
import { renderHook } from '@testing-library/react-hooks'

import useQuickLookItemStore from './useQuickLookItemStore'

const DEFAULT_QUICKLOOK_ITEM = {
  thumbnail: () =>
    React.createElement('a', null, 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'),
  preview: () => React.createElement('a', null, 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'),
  download: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
}

it('the default store should empty', () => {
  const { result } = renderHook(() => useQuickLookItemStore())
  expect(result.current.getItem('foo')).toBeUndefined()
})

it('can save item to store', () => {
  const { result } = renderHook(() => useQuickLookItemStore())
  result.current.setItem('foo', DEFAULT_QUICKLOOK_ITEM)
  expect(result.current.getItem('foo')).not.toBeUndefined()
})

it('can remove item from store', () => {
  const { result } = renderHook(() => useQuickLookItemStore())
  result.current.setItem('foo', DEFAULT_QUICKLOOK_ITEM)
  result.current.removeItem('foo')
  expect(result.current.getItem('foo')).toBeUndefined()
})

it('can use the different store when quick look id is difference', () => {
  const { result } = renderHook(() => useQuickLookItemStore('store'))
  result.current.setItem('foo', DEFAULT_QUICKLOOK_ITEM)
  const { result: result1 } = renderHook(() => useQuickLookItemStore('store1'))
  expect(result1.current.getItem('foo')).toBeUndefined()
})

it('can share the same store when quick look id is same', () => {
  const { result } = renderHook(() => useQuickLookItemStore('store'))
  result.current.setItem('bar', DEFAULT_QUICKLOOK_ITEM)
  const { result: result1 } = renderHook(() => useQuickLookItemStore('store'))
  expect(result1.current.getItem('bar')).not.toBeUndefined()
})
