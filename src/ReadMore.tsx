import React, { useState } from 'react'

export interface Props {
  children: React.ReactNode
  readMoreText?: React.ReactNode
  lineHeight?: number
  height?: number
  unit?: string
  readMoreClass?: string
  readMoreClick?: (e: Event) => void
  readMoreStyles?: { [x: string]: string }
}

/**
 * todo: write docs
 * children
 * readMoreText
 * lineHeight
 * height
 * unit
 * readMoreClass
 * readMoreClick
 * readMoreStyles
 * @param param0 props
 */
export default function ReadMore({
  children,
  readMoreText = '...see more',
  lineHeight = 1,
  height = 5,
  unit = 'rem',
  readMoreClass = '',
  readMoreClick = () => {},
  readMoreStyles = {}
}: Props) {
  const [showReadMore, setShowReadMore] = useState(true)

  if (!showReadMore) return children

  const handleReadMoreClick = (e: any) => {
    setShowReadMore(false)
    readMoreClick(e)
  }

  return (
    <div
      style={{
        position: 'absolute',
        overflow: 'hidden',
        lineHeight: `${lineHeight}${unit}`,
        height: `${height}${unit}`
      }}
    >
      <div>{children}</div>
      <div
        className={readMoreClass}
        onClick={handleReadMoreClick}
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          cursor: 'pointer',
          ...readMoreStyles
        }}
      >
        {readMoreText}
      </div>
    </div>
  )
}
