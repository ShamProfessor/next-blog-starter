import { style } from '@vanilla-extract/css'

export const item = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 48,
  height: 48,
})

export const itemImage = style({
  maxWidth: '100%',
  maxHeight: '100%',
})

export const trigger = style({
  display: 'flex',
  alignItems: 'center',
  gap: 6,
})
