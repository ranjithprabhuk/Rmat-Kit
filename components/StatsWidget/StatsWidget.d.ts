import * as React from 'react';
import { PropTypes, StandardProps } from '@material-ui/core';
import { Style } from '@material-ui/core/styles/createTypography';
import { StatsWidgetClassKey } from './statsWidget.styles';
export interface IStatsWidgetProps extends StandardProps<React.HTMLAttributes<HTMLDivElement>, StatsWidgetClassKey> {
    component?: any;
    color?: PropTypes.Color | 'textSecondary' | 'error';
    title?: string;
    value?: string;
    square?: boolean;
    textColor?: string;
    backgroundColor?: string;
    direction?: 'rtl' | 'ltr';
    padding?: number | string;
    valueVariant?: Style | 'caption' | 'button';
    titleVariant?: Style | 'caption' | 'button';
    onTitleClick?: () => void;
    onWidgetClick?: () => void;
    onValueClick?: () => void;
    classes?: any;
}
declare const _default: React.ComponentType<IStatsWidgetProps>;
export default _default;
