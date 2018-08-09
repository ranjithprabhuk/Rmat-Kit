import * as React from 'react';
import * as classNames from 'classnames';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import { PropTypes, WithStyles, StandardProps} from '@material-ui/core';
import { Style } from '@material-ui/core/styles/createTypography';
import { statsWidgetStyles, StatsWidgetClassKey } from './statsWidget.styles';

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

const StatsWidget: React.SFC<IStatsWidgetProps & WithStyles<StatsWidgetClassKey>> = ({
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

export default withStyles(statsWidgetStyles)(StatsWidget);
