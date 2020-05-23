import React from 'react'
import ReadMore from './ReadMore'

export default function withReadMore(
  Component: typeof React.Component,
  readMoreProps = {}
) {
  return (props: any[]) => (
    // @ts-ignore
    <ReadMore {...readMoreProps}>
      <Component {...props} />
    </ReadMore>
  )
}
