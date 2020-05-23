# @bisho/react-read-more

> Add a readmore text to your long content

[![NPM](https://img.shields.io/npm/v/@bisho/react-read-more.svg)](https://www.npmjs.com/package/@bisho/react-read-more) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @bisho/react-read-more
```

## Usage

```tsx
import React, { Component } from 'react'

import MyComponent from '@bisho/react-read-more'

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
          <ol>
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

## License

MIT © [bisho1995](https://github.com/bisho1995)
