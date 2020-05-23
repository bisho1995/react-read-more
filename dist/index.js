function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ReadMore(_ref) {
  var children = _ref.children,
      _ref$readMoreText = _ref.readMoreText,
      readMoreText = _ref$readMoreText === void 0 ? '...read more' : _ref$readMoreText,
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

  var _useState = React.useState(true),
      showReadMore = _useState[0],
      setShowReadMore = _useState[1];

  var containerRef = React.useRef(null);
  var readMoreRef = React.useRef(null);

  var handleReadMoreClick = function handleReadMoreClick(e) {
    setShowReadMore(false);
    readMoreClick(e);
  };

  React.useEffect(function () {
    var _containerRef$current, _containerRef$current2, _readMoreRef$current, _readMoreRef$current2;

    if (!showReadMore || !containerRef.current || !(readMoreRef === null || readMoreRef === void 0 ? void 0 : readMoreRef.current)) return;
    var divHeight = (containerRef === null || containerRef === void 0 ? void 0 : (_containerRef$current = containerRef.current) === null || _containerRef$current === void 0 ? void 0 : _containerRef$current.clientHeight) + (containerRef === null || containerRef === void 0 ? void 0 : (_containerRef$current2 = containerRef.current) === null || _containerRef$current2 === void 0 ? void 0 : _containerRef$current2.offsetTop);
    var refHeight = (readMoreRef === null || readMoreRef === void 0 ? void 0 : (_readMoreRef$current = readMoreRef.current) === null || _readMoreRef$current === void 0 ? void 0 : _readMoreRef$current.offsetTop) + (readMoreRef === null || readMoreRef === void 0 ? void 0 : (_readMoreRef$current2 = readMoreRef.current) === null || _readMoreRef$current2 === void 0 ? void 0 : _readMoreRef$current2.clientHeight);
    if (refHeight >= divHeight) setShowReadMore(false);
  }, [containerRef, readMoreRef, showReadMore]);
  if (!showReadMore) return children;
  return React__default.createElement("div", {
    style: {
      position: 'absolute',
      overflow: 'hidden',
      lineHeight: "" + lineHeight + unit,
      height: "" + height + unit
    }
  }, React__default.createElement("div", {
    ref: containerRef
  }, children), React__default.createElement("div", {
    className: readMoreClass,
    onClick: handleReadMoreClick,
    style: _extends({
      position: 'absolute',
      bottom: 0,
      right: 0,
      cursor: 'pointer',
      background: '#fff',
      fontSize: "" + lineHeight + unit,
      lineHeight: "" + lineHeight + unit
    }, readMoreStyles),
    ref: readMoreRef
  }, readMoreText));
}

function withReadMore(Component, readMoreProps) {
  if (readMoreProps === void 0) {
    readMoreProps = {};
  }

  return function (props) {
    return React__default.createElement(ReadMore, Object.assign({}, readMoreProps), React__default.createElement(Component, Object.assign({}, props)));
  };
}

exports.ReadMore = ReadMore;
exports.withReadMore = withReadMore;
//# sourceMappingURL=index.js.map
