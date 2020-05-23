import React, { useState } from 'react';

var styles = {"wrapper":"_1I_qj","read-more":"_3oG6o"};

function ReadMore(_ref) {
  var children = _ref.children,
      _ref$readMoreText = _ref.readMoreText,
      readMoreText = _ref$readMoreText === void 0 ? '...see more' : _ref$readMoreText,
      _ref$lineHeight = _ref.lineHeight,
      lineHeight = _ref$lineHeight === void 0 ? 1 : _ref$lineHeight,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 5 : _ref$height,
      _ref$unit = _ref.unit,
      unit = _ref$unit === void 0 ? 'rem' : _ref$unit,
      _ref$readMoreClass = _ref.readMoreClass,
      readMoreClass = _ref$readMoreClass === void 0 ? '' : _ref$readMoreClass,
      _ref$readMoreClick = _ref.readMoreClick,
      readMoreClick = _ref$readMoreClick === void 0 ? function () {} : _ref$readMoreClick,
      _ref$readMoreStyles = _ref.readMoreStyles,
      readMoreStyles = _ref$readMoreStyles === void 0 ? {} : _ref$readMoreStyles;

  var _useState = useState(true),
      showReadMore = _useState[0],
      setShowReadMore = _useState[1];

  if (!showReadMore) return children;

  var handleReadMoreClick = function handleReadMoreClick(e) {
    setShowReadMore(false);
    readMoreClick(e);
  };

  return React.createElement("div", {
    className: styles.wrapper,
    style: {
      lineHeight: "" + lineHeight + unit,
      height: "" + height + unit
    }
  }, React.createElement("div", null, children), React.createElement("div", {
    className: styles['read-more'] + " " + readMoreClass,
    onClick: handleReadMoreClick,
    style: readMoreStyles
  }, readMoreText));
}

function withReadMore(Component, readMoreProps) {
  if (readMoreProps === void 0) {
    readMoreProps = {};
  }

  return function (props) {
    return React.createElement(ReadMore, Object.assign({}, readMoreProps), React.createElement(Component, Object.assign({}, props)));
  };
}

export { ReadMore, withReadMore };
//# sourceMappingURL=index.modern.js.map
