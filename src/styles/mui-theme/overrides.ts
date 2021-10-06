import { ThemeOptions } from '@material-ui/core';

const overrides: ThemeOptions['overrides'] = {
  MuiButton: {
    root: {
      fontSize: '1.125rem',
      lineHeight: '1rem',
    },
    contained: {
      padding: '1rem 2rem',
    },
  },
};

export default overrides;
