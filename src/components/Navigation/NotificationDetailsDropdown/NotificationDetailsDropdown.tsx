import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Box, IconButton } from '@material-ui/core';
import NotificationIcon from '@material-ui/icons/Notifications';
import styles from './account-details-dropdown.module.scss';

export default function NotificationDetailsDropdownMenu() {
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
        aria-controls="notifications-menu"
        aria-haspopup="true"
        onClick={handleClick}
        size="small"
        classes={{ root: styles.notificationsIcon }}
      >
        <NotificationIcon fontSize="large" />
      </IconButton>
      <Menu id="notifications-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleClose}>New Notification #1</MenuItem>
        <MenuItem onClick={handleClose}>New Notification #2</MenuItem>
        <MenuItem onClick={handleClose}>New Notification #3</MenuItem>
      </Menu>
    </Box>
  );
}
