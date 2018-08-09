"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var classNames = require("classnames");
var Paper_1 = require("@material-ui/core/Paper");
var Typography_1 = require("@material-ui/core/Typography");
var Grid_1 = require("@material-ui/core/Grid");
var withStyles_1 = require("@material-ui/core/styles/withStyles");
var statsWidget_styles_1 = require("./statsWidget.styles");
var StatsWidget = function (_a) {
    var classes = _a.classes, component = _a.component, color = _a.color, title = _a.title, value = _a.value, square = _a.square, textColor = _a.textColor, backgroundColor = _a.backgroundColor, theme = _a.theme, direction = _a.direction, padding = _a.padding, valueVariant = _a.valueVariant, titleVariant = _a.titleVariant, onValueClick = _a.onValueClick, onWidgetClick = _a.onWidgetClick, onTitleClick = _a.onTitleClick;
    var isRightAligned = direction === 'rtl' || (theme && theme.direction === 'rtl');
    return (React.createElement("div", null,
        React.createElement(Paper_1.default, { square: square },
            React.createElement(Grid_1.default, { container: true, style: { flexDirection: isRightAligned ? 'row-reverse' : 'row', padding: padding } },
                React.createElement(Grid_1.default, { item: true, xs: 7 },
                    React.createElement("div", { className: classes.statContent },
                        React.createElement(Typography_1.default, { variant: valueVariant || 'display1', noWrap: true, color: color, style: { color: textColor }, align: isRightAligned ? 'right' : 'left', className: classNames(classes.statValue, onValueClick && classes.clickable), onClick: function () { return onValueClick && onValueClick(); } }, value),
                        React.createElement(Typography_1.default, { noWrap: true, variant: titleVariant || 'subheading', align: isRightAligned ? 'right' : 'left', className: classNames(classes.statTitle, onTitleClick && classes.clickable), onClick: function () { return onTitleClick && onTitleClick(); } }, title))),
                React.createElement(Grid_1.default, { item: true, xs: 5 },
                    React.createElement(Paper_1.default, { className: classNames(classes.icon, onWidgetClick && classes.clickable), style: { background: backgroundColor }, square: square, onClick: function () { return onWidgetClick && onWidgetClick(); } }, component))))));
};
exports.default = withStyles_1.default(statsWidget_styles_1.statsWidgetStyles)(StatsWidget);
//# sourceMappingURL=StatsWidget.js.map