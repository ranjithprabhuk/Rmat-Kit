import * as React from 'react';
import { withStyles, Theme, MuiThemeProvider } from '@material-ui/core/styles';
import { getTheme, ThemeConfig } from './theme';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Widgets from '@material-ui/icons/Widgets';

const styles = (theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});

class RMatKitExampleApp extends React.Component<any, any> {
  constructor(props: any, context: any) {
    super(props);
    this.state = {
      value: 0,
      theme: getTheme(ThemeConfig),
    };
  }

  public handleChange = (event: any, value: any) => this.setState({ value });

  public render(): React.ReactNode {
    const { classes } = this.props;
    const { value, theme } = this.state;

    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <AppBar position='static' color='default'>
            <Tabs
              value={value}
              onChange={this.handleChange}
              scrollable
              scrollButtons='on'
              indicatorColor='primary'
              textColor='primary'
            >
              <Tab label='Widgets' icon={<Widgets />} />
            </Tabs>
          </AppBar>
          {value === 0 && 'Some Content to be displayed'}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(RMatKitExampleApp);
