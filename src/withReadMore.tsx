import React, { useState } from 'react'
import styles from './styles.module.css'

interface Props {
  children: React.ReactNode
  readMoreText?: React.ReactNode
  lineHeight?: number
  height?: number
  unit?: string
  readMoreClass?: string
  readMoreClick?: (e: Event) => void
}

export default function ReadMore({
  children,
  readMoreText = '...see more',
  lineHeight = 1,
  height = 5,
  unit = 'rem',
  readMoreClass = '',
  readMoreClick = () => {}
}: Props) {
  const [showReadMore, setShowReadMore] = useState(true)

  if (!showReadMore) return children

  const handleReadMoreClick = (e: any) => {
    setShowReadMore(false)
    readMoreClick(e)
  }

  return (
    <div
      className={styles['position-relative']}
      style={{ lineHeight: `${lineHeight}${unit}`, height: `${height}${unit}` }}
    >
      <div>{children}</div>
      <div
        className={`${styles['read-more']} ${readMoreClass}`}
        onClick={handleReadMoreClick}
      >
        {readMoreText}
      </div>
    </div>
  )
}
