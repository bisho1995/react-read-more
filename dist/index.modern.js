import React, { useState } from 'react';

var styles = {"position-relative":"_2CS8d","read-more":"_3oG6o"};

var ReadMore = function ReadMore(_ref) {
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
      readMoreClick = _ref$readMoreClick === void 0 ? function () {} : _ref$readMoreClick;

  var _useState = useState(true),
      showReadMore = _useState[0],
      setShowReadMore = _useState[1];

  if (!showReadMore) return children;

  var handleReadMoreClick = function handleReadMoreClick(e) {
    setShowReadMore(false);
    readMoreClick(e);
  };

  return React.createElement("div", {
    className: styles['position-relative'],
    style: {
      lineHeight: "" + lineHeight + unit,
      height: "" + height + unit
    }
  }, React.createElement("div", null, children), React.createElement("div", {
    className: styles['read-more'] + " " + readMoreClass,
    onClick: handleReadMoreClick
  }, readMoreText));
};

function ReadMore$1(_ref) {
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
      readMoreClick = _ref$readMoreClick === void 0 ? function () {} : _ref$readMoreClick;

  var _useState = useState(true),
      showReadMore = _useState[0],
      setShowReadMore = _useState[1];

  if (!showReadMore) return children;

  var handleReadMoreClick = function handleReadMoreClick(e) {
    setShowReadMore(false);
    readMoreClick(e);
  };

  return React.createElement("div", {
    className: styles['position-relative'],
    style: {
      lineHeight: "" + lineHeight + unit,
      height: "" + height + unit
    }
  }, React.createElement("div", null, children), React.createElement("div", {
    className: styles['read-more'] + " " + readMoreClass,
    onClick: handleReadMoreClick
  }, readMoreText));
}

export { ReadMore, ReadMore$1 as withReadMore };
//# sourceMappingURL=index.modern.js.map
