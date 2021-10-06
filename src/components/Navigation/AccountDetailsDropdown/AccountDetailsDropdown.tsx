import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { IconButton, Box } from '@material-ui/core';
import AccountIcon from '@material-ui/icons/AccountCircle';
import styles from './account-details-dropdown.module.scss';

export default function AccountDetailsDropdownMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <IconButton
        aria-controls="account-details-menu"
        aria-haspopup="true"
        onClick={handleClick}
        size="small"
        classes={{ root: styles.accountIcon }}
      >
        <AccountIcon fontSize="large" />
      </IconButton>
      <Menu id="account-details-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </Box>
  );
}
