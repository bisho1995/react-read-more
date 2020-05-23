import React, { useState, useRef, useEffect } from 'react'

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
 * todo: write docs, rewrite as class
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
  const containerRef = useRef<HTMLDivElement>(null)
  const readMoreRef = useRef<HTMLDivElement>(null)

  const handleReadMoreClick = (e: any) => {
    setShowReadMore(false)
    readMoreClick(e)
  }

  useEffect(() => {
    if (!showReadMore || !containerRef.current || !readMoreRef?.current) return
    const divHeight =
      containerRef?.current?.clientHeight + containerRef?.current?.offsetTop
    const refHeight =
      readMoreRef?.current?.offsetTop + readMoreRef?.current?.clientHeight

    if (refHeight >= divHeight) setShowReadMore(false)
  }, [containerRef, readMoreRef, showReadMore])

  if (!showReadMore) return children

  return (
    <div
      style={{
        position: 'absolute',
        overflow: 'hidden',
        lineHeight: `${lineHeight}${unit}`,
        height: `${height}${unit}`
      }}
    >
      <div ref={containerRef}>{children}</div>
      <div
        className={readMoreClass}
        onClick={handleReadMoreClick}
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          cursor: 'pointer',
          background: '#fff',
          fontSize: 12,
          lineHeight: 12,
          ...readMoreStyles
        }}
        ref={readMoreRef}
      >
        {readMoreText}
      </div>
    </div>
  )
}
