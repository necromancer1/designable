import React from 'react'
import { useTranslateHelper, useCursor, usePrefix } from '../../hooks'
import { observer } from '@formily/reactive-react'
import { CursorDragType, CursorStatus } from '@designable/core'

export const SpaceBlock = observer(() => {
  const cursor = useCursor()
  const translateHelper = useTranslateHelper()
  const prefix = usePrefix('aux-space-box')
  const createRectStyle = (rect: DOMRect) => {
    const baseStyle: React.CSSProperties = {
      top: 0,
      left: 0,
      height: rect.height,
      width: rect.width,
      transform: `perspective(1px) translate3d(${rect.x}px,${rect.y}px,0)`,
      background: `rgba(255, 64, 0, 0.15)`,
      position: 'absolute',
      zIndex: 3,
    }
    return baseStyle
  }
  if (
    cursor.status !== CursorStatus.Dragging ||
    !translateHelper ||
    cursor.dragType !== CursorDragType.Translate
  )
    return null
  return (
    <>
      {translateHelper.spaceBlocks.map(({ rect }, key) => {
        return (
          <div key={key} className={prefix} style={createRectStyle(rect)}></div>
        )
      })}
    </>
  )
})

SpaceBlock.displayName = 'SpaceBlock'
