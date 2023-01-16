import { useLayoutEffect, useRef } from 'react'
import isNil from 'lodash/isNil'

import { containerStyle } from '../previewer/index.css'

const useQuickLookContainer = () => {
  const container = useRef(
    (() => {
      let existedContainer = document.querySelector('#quick-look-container')
      if (isNil(existedContainer)) {
        existedContainer = document.createElement('div')
        existedContainer.id = 'quick-look-container'
        existedContainer.setAttribute('tabindex', '0')
        existedContainer.classList.add(containerStyle)
      }
      return existedContainer as HTMLDivElement
    })()
  )

  useLayoutEffect(() => {
    document.body.appendChild(container.current)
    container.current.focus()
    return () => {
      document.body.removeChild(container.current)
    }
  }, [])

  return container
}

export default useQuickLookContainer
