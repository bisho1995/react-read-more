# @bisvarup/react-read-more

> Add a readmore text to your long content

[![NPM](https://img.shields.io/npm/v/@bisvarup/react-read-more.svg)](https://www.npmjs.com/package/@bisvarup/react-read-more) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Wrap any component with this component to show a read more text. On clicking the read more text user will be able to see the full content. On full content is shown it cannot be reverted back.

There is also a withReadMore HOC wrapper along with this file. They do the same thing and usage depends on the choice of the user.

Check the [docs](https://bisho1995.github.io/react-read-more/)

## Install

Install with npm

```bash
npm install --save @bisvarup/react-read-more
```

or

Install with yarn

```bash
yarn add @bisvarup/react-read-more
```

## Standard Usage

```tsx
import React, { Component } from 'react'
import ReadMore from '@bisvarup/react-read-more'

class Example extends Component {
  render() {
    return (
      <div>
        ...
        <ReadMore
          readMoreStyles={{
            background: '#fff' /** white is the default color btw */
          }}
          lineHeight={2}
          height={10}
        >
          <ol style={{ margin: 0 }}>
            <li>
              This is one of the lines, aasfsfsafsas fhgsfhgsfgsi fis fgisgf
            </li>
            <li>
              This is one of the lines, aasfsfsafsas fhgsfhgsfgsi fis fgisgf
            </li>
            <li>
              This is one of the lines, aasfsfsafsas fhgsfhgsfgsi fis fgisgf
            </li>
            <li>
              This is one of the lines, aasfsfsafsas fhgsfhgsfgsi fis fgisgf
            </li>
            <li>
              This is one of the lines, aasfsfsafsas fhgsfhgsfgsi fis fgisgf
            </li>
            <li>
              This is one of the lines, aasfsfsafsas fhgsfhgsfgsi fis fgisgf
            </li>
            <li>
              This is one of the lines, aasfsfsafsas fhgsfhgsfgsi fis fgisgf
            </li>
            <li>
              This is one of the lines, aasfsfsafsas fhgsfhgsfgsi fis fgisgf
            </li>
            <li>
              This is one of the lines, aasfsfsafsas fhgsfhgsfgsi fis fgisgf
            </li>
          </ol>
        </ReadMore>
        ...
      </div>
    )
  }
}
```

## HOC Usage

```jsx
const Component = (props) => (
  <ol style={{ margin: 0 }}>
    <li>This is one of the lines, aasfsfsafsas fhgsfhgsfgsi fis fgisgf</li>
    <li>This is one of the lines, aasfsfsafsas fhgsfhgsfgsi fis fgisgf</li>
    <li>This is one of the lines, aasfsfsafsas fhgsfhgsfgsi fis fgisgf</li>
    <li>This is one of the lines, aasfsfsafsas fhgsfhgsfgsi fis fgisgf</li>
    <li>This is one of the lines, aasfsfsafsas fhgsfhgsfgsi fis fgisgf</li>
    <li>This is one of the lines, aasfsfsafsas fhgsfhgsfgsi fis fgisgf</li>
    <li>This is one of the lines, aasfsfsafsas fhgsfhgsfgsi fis fgisgf</li>
    <li>This is one of the lines, aasfsfsafsas fhgsfhgsfgsi fis fgisgf</li>
    <li>This is one of the lines, aasfsfsafsas fhgsfhgsfgsi fis fgisgf</li>
  </ol>
)

...
...

export withReadMore(Component)
```

## License

MIT © [bisho1995](https://github.com/bisho1995)
