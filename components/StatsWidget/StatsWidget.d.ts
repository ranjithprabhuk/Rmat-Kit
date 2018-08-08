import * as React from 'react';
import { PropTypes, Theme, WithStyles } from '@material-ui/core';
import { Style } from '@material-ui/core/styles/createTypography';
import { statsWidgetStyles } from './statsWidget.styles';
export interface IStatsWidgetProps extends WithStyles<typeof statsWidgetStyles> {
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
    theme?: Theme;
}
declare const _default: React.ComponentType<import("@material-ui/core").Overwrite<IStatsWidgetProps, import("@material-ui/core/styles/withStyles").StyledComponentProps<never>>>;
export default _default;
