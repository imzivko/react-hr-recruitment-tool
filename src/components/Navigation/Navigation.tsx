import React from 'react';
import { Box, Typography } from '@material-ui/core';

import DashboardLogo from './DashboardLogo/DashboardLogo';
import styles from './navigation.module.scss';
import NotificationDetailsDropdown from './NotificationDetailsDropdown';
import AccountDetailsDropdown from './AccountDetailsDropdown';

const Navigation: React.FC = () => (
  //  Navigation Bar
  <Box className={styles.container}>
    {/* Company logo, Nav Text */}
    <Box className={styles.logo}>
      <DashboardLogo />
      <Typography color="textPrimary" classes={{ h3: styles.dashboardHeader }} variant="h3">
        Dashboard
      </Typography>
    </Box>

    {/*  Navigation Icons/Buttons */}
    <Box className={styles.icons}>
      <NotificationDetailsDropdown />
      <AccountDetailsDropdown />
    </Box>
  </Box>
);

export default Navigation;
