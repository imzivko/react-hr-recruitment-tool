import React from 'react';
import AppRouter from 'routers/AppRouter';
import MuiTheme from 'styles/mui-theme';

import { ConfigurationBuilder } from 'config';
import { ThemeProvider } from '@material-ui/core';

import 'styles/sass/index.scss';

ConfigurationBuilder.buildConfiguration();

const App: React.FC = () => (
  <ThemeProvider theme={MuiTheme}>
    <AppRouter />
  </ThemeProvider>
);

export default App;
