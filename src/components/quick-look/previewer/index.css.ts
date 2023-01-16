import { style, keyframes, globalStyle } from '@vanilla-extract/css'

globalStyle('#quick-look-container *', {
  boxSizing: 'border-box',
})

export const containerStyle = style({
  transition: 'opacity 250ms ease-in',
  opacity: 0,
  userSelect: 'none',
})

export const mask = style({
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
  height: '100%',
  background: 'rgba(0, 0, 0, 0.98)',
  opacity: 0.9,
})

export const previewer = style({
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 1080,
})

export const stage = style({
  position: 'absolute',
  left: '10%',
  right: '10%',
  top: 100,
  width: '80%',
  bottom: 170,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const prompter = style({
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  bottom: 100,
  margin: 0,
  padding: '.25em 1em',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  maxWidth: '80%',
  background: 'rgba(255, 255, 255, 0.1)',
  borderRadius: 40,
  filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
  fontSize: 15,
  color: 'white',
})

export const prompterContent = style({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  marginRight: 8,
})

export const circle = keyframes({
  '0%': {
    transform: 'rotate(0)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
})

export const loading = style({
  width: '30px',
  height: '30px',
  border: '2px solid #FFF',
  borderTopColor: 'transparent',
  borderRadius: '100%',
  animationName: circle,
  animationDuration: '1.4s',
  animationTimingFunction: 'linear',
  animationIterationCount: 'infinite',
  position: 'absolute',
  left: '50%',
  top: '50%',
  marginLeft: -30,
  marginTop: -30,
})

export const previewImageType = style({
  maxWidth: '100%',
  maxHeight: '100%',
  objectFit: 'contain',
  objectPosition: 'center',
  transition: 'transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)',
  willChange: 'transform',
})

export const thumbnailImageType = style({
  width: '100%',
  height: '100%',
  objectFit: 'contain',
  objectPosition: 'center',
})

export const thumbnails = style({
  position: 'absolute',
  left: 6,
  right: 6,
  padding: '6px 0',
  overflow: 'hidden',
  transition: 'bottom 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)',
  willChange: 'bottom',
})

export const thumbnailsList = style({
  margin: '0 auto',
  padding: 0,
  height: 60,
  transition: 'transform 350ms cubic-bezier(0.215, 0.61, 0.355, 1)',
})

export const thumbnailsItem = style({
  position: 'relative',
  width: 100,
  height: 60,
  marginRight: 6,
  overflow: 'hidden',
  cursor: 'pointer',
  userSelect: 'none',
  color: 'white',
  background: 'rgba(255, 255, 255, 0.1)',
  border: '2px solid white',
  borderRadius: 4,
  opacity: 0.7,
  transition: 'all 200ms ease-in',
  display: 'inline-block',
  ':hover': {
    opacity: 1,
  },
  ':last-of-type': {
    marginRight: 0,
  },
})

export const thumbnailsItemActive = style({
  border: '2px solid #FF8533',
  opacity: 1,
})

export const operationBar = style({
  position: 'absolute',
  top: 0,
  right: 0,
  padding: '6px 12px',
  height: 40,
  borderBottomLeftRadius: '12px',
  background: 'rgba(255, 255, 255, 0.1)',
  color: '#cdcdcd',
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  cursor: 'pointer',
  userSelect: 'none',
})

export const operationItem = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.2s ease-in',

  ':hover': {
    color: '#fff',
  },
})

export const navigatorItem = style({
  width: 42,
  height: 42,
  background: '#666666',
  color: '#333333',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  top: 'calc(50% - 42px)',
  cursor: 'pointer',
  userSelect: 'none',
  transition: 'all 0.2s ease-in',

  ':hover': {
    background: '#fff',
  },
})

export const navigatorDisabled = style({
  cursor: 'not-allowed',

  ':hover': {
    background: '#666666',
  },
})

export const navigatorLeft = style({
  left: 'calc(5% - 24px)',
})

export const navigatorRight = style({
  right: 'calc(5% - 24px)',
})
