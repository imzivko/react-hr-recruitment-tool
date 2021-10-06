import { createTheme } from '@material-ui/core';

import breakpoints from './breakpoints';
import overrides from './overrides';
import palette from './palette';
import props from './props';
import typography from './typography';

const MuiTheme = createTheme({
  overrides,
  palette,
  typography,
  breakpoints,
  props,
});

export default MuiTheme;
