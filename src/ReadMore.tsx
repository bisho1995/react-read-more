/**
 * @author Bisvarup Mukherjee
 * @date 23/05/2020
 */

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
 * Wrap any component with this component to show a read more text. On clicking
 * the read more text user will be able to see the full content. On full content
 * is shown it cannot be reverted back.
 *
 * There is also a withReadMore HOC wrapper along with this file. They do the same thing
 * and usage depends on the choice of the user
 *
 * children: ReactNode - The component which you want to show an excerpt of.
 * readMoreText: ReactNode - The default value is '...see more' you may want to change this
 * lineHeight: Number - The line height size, default '1'
 * height: Number - The height of the excerpt to be shown initially, default '5'
 * unit: String - Unit of line height, by default it is 'rem'
 * readMoreClass: String - Optionally add classes to the read more label, default is ''
 * readMoreClick: function - Optionally do something on the click of read more, default noop
 * readMoreStyles: Object - Support for styles of read more, default {}
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
          fontSize: `${lineHeight}${unit}`,
          lineHeight: `${lineHeight}${unit}`,
          ...readMoreStyles
        }}
        ref={readMoreRef}
      >
        {readMoreText}
      </div>
    </div>
  )
}
