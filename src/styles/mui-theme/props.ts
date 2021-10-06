import { ThemeOptions } from '@material-ui/core';

const props: ThemeOptions['props'] = {
  MuiButton: {
    variant: 'contained',
    color: 'primary',
  },
  MuiTextField: {
    variant: 'filled',
  },
  MuiTypography: {
    variant: 'body2',
  },
  MuiTabs: {
    indicatorColor: 'primary',
  },
};

export default props;
