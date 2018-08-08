import * as React from 'react';
import * as classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Grid, Typography, PropTypes, Theme } from '@material-ui/core';
import { statsWidgetStyles } from './statsWidget.styles';
import { Style } from '@material-ui/core/styles/createTypography';

interface IStatsWidgetOwnProps {
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
}

interface IStatsWidgetStateProps {
  classes: any;
  theme?: Theme;
}

export type IStatsWidgetProps = IStatsWidgetOwnProps & IStatsWidgetStateProps;

const StatsWidget: React.SFC<IStatsWidgetProps> = ({
  classes,
  component,
  color,
  title,
  value,
  square,
  textColor,
  backgroundColor,
  theme,
  direction,
  padding,
  valueVariant,
  titleVariant,
  onValueClick,
  onWidgetClick,
  onTitleClick,
}) => {
  const isRightAligned = direction === 'rtl' || (theme && theme.direction === 'rtl');

  return (
    <div>
      <Paper square={square}>
        <Grid container style={{ flexDirection: isRightAligned ? 'row-reverse' : 'row', padding }}>
          <Grid item xs={7}>
            <div className={classes.statContent}>
              <Typography
                variant={valueVariant || 'display1'}
                noWrap
                color={color}
                style={{ color: textColor }}
                align={isRightAligned ? 'right' : 'left'}
                className={classNames(classes.statValue, onValueClick && classes.clickable)}
                onClick={() => onValueClick && onValueClick()}
              >
                {value}
              </Typography>
              <Typography
                noWrap
                variant={titleVariant || 'subheading'}
                align={isRightAligned ? 'right' : 'left'}
                className={classNames(classes.statTitle, onTitleClick && classes.clickable)}
                onClick={() => onTitleClick && onTitleClick()}
              >
                {title}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={5}>
            <Paper
              className={classNames(classes.icon, onWidgetClick && classes.clickable)}
              style={{ background: backgroundColor }}
              square={square}
              onClick={() => onWidgetClick && onWidgetClick()}
            >
              {component}
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default withStyles(statsWidgetStyles, { withTheme: true })(StatsWidget);
