import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Divider, Grid, Typography } from '@material-ui/core';
import { widgetStyles } from './widgets.styles';
import { IWidgetsProps, IWidgetsState } from './IWidgets';
import StatsWidget from '../../components/StatsWidget';
import StarIcon from '@material-ui/icons/Star';
import InboxIcon from '@material-ui/icons/Inbox';
import { defineColours, ThemeConfig } from '../theme';


class Widgets extends React.Component<IWidgetsProps, IWidgetsState> {
  public render(): React.ReactElement<Widgets> {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={8} className={classes.gridContainer}>
        <Grid item xs={12}>
          <Typography variant='body2'>Widgets With Icons</Typography>
          <Divider />
        </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatsWidget
              component={<StarIcon style={{ fontSize: 50 }} />}
              value='32.5 C'
              title='Temperature'
              textColor={defineColours(ThemeConfig.primaryColor, true)}
              backgroundColor={defineColours(ThemeConfig.primaryColor)}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatsWidget
              component={<InboxIcon style={{ fontSize: 50 }} />}
              value='13486'
              title='Visibility'
              color='secondary'
              backgroundColor={defineColours(ThemeConfig.secondaryColor)}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatsWidget
              component={<StarIcon style={{ fontSize: 50 }} />}
              value='87%'
              title='Humidity'
              textColor={defineColours(ThemeConfig.warningColor, true)}
              backgroundColor={defineColours(ThemeConfig.warningColor)}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatsWidget
              component={<StarIcon style={{ fontSize: 50 }} />}
              value='2.1 m/s'
              title='Wind Speed'
              textColor={defineColours(ThemeConfig.dangerColor, true)}
              backgroundColor={defineColours(ThemeConfig.dangerColor)}
            />
          </Grid>
        </Grid>
        <Grid container spacing={8} className={classes.gridContainer}>
          <Grid item xs={12}>
            <Typography variant='body2'>Widgets With Padding</Typography>
            <Divider />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatsWidget
              padding={10}
              component={<StarIcon style={{ fontSize: 50 }} />}
              value='32.5 C'
              title='Temperature'
              textColor={defineColours(ThemeConfig.primaryColor, true)}
              backgroundColor={defineColours(ThemeConfig.primaryColor)}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatsWidget
              padding={10}
              component={<InboxIcon style={{ fontSize: 50 }} />}
              value='13486'
              title='Visibility'
              color='secondary'
              backgroundColor={defineColours(ThemeConfig.secondaryColor)}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatsWidget
              padding={10}
              component={<StarIcon style={{ fontSize: 50 }} />}
              value='87%'
              title='Humidity'
              textColor={defineColours(ThemeConfig.warningColor, true)}
              backgroundColor={defineColours(ThemeConfig.warningColor)}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatsWidget
              padding={10}
              component={<StarIcon style={{ fontSize: 50 }} />}
              value='2.1 m/s'
              title='Wind Speed'
              textColor={defineColours(ThemeConfig.dangerColor, true)}
              backgroundColor={defineColours(ThemeConfig.dangerColor)}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(widgetStyles, { withTheme: true })(Widgets);
