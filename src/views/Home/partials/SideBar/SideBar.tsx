import React from 'react';

import clsx from 'clsx';

import { Box, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import {
  BarChartOutlined,
  BuildOutlined,
  DonutLargeOutlined,
  HelpOutlined,
  InfoOutlined,
  MailOutlineOutlined,
  Settings,
} from '@material-ui/icons';

import styles from './side-bar.module.scss';

const appsNumber = 4;
const topIconsContent = [
  {
    title: 'New applications',
    subtitle: `${appsNumber} new applications`,
    icon: <MailOutlineOutlined fontSize="large" />,
    selected: true,
  },
  {
    title: 'Google Analytics',
    subtitle: 'Track visits to your sites',
    icon: <BarChartOutlined fontSize="large" />,
    selected: false,
  },
  {
    title: 'Metrics',
    subtitle: 'Track your apps across devices',
    icon: <DonutLargeOutlined fontSize="large" />,
    selected: false,
  },
  {
    title: 'More Tools',
    subtitle: 'Upgrade your plan to PRO',
    icon: <BuildOutlined fontSize="large" />,
    selected: false,
  },
];

const bottomIconsContent = [
  {
    title: 'Settings',
    icon: <Settings />,
  },
  { title: "What's new?", icon: <InfoOutlined /> },
  { title: 'Customers Support', icon: <HelpOutlined /> },
];

const SideBar: React.FC = () => (
  <Box className={styles.container} display="flex" flexDirection="column" justifyContent="space-between">
    <List>
      {topIconsContent.map(content => (
        <ListItem
          classes={{
            root: clsx(styles.button, {
              [styles.selected]: content.selected,
            }),
          }}
          button
          key={content.title}
        >
          <ListItemIcon classes={{ root: clsx({ [styles.selectedText]: content.selected }) }}>
            {content.icon}
          </ListItemIcon>
          <ListItemText
            classes={{
              primary: clsx({ [styles.selectedText]: content.selected }),
              secondary: clsx({ [styles.selectedText]: content.selected }),
            }}
            primary={content.title}
            secondary={content.subtitle}
          />
        </ListItem>
      ))}
    </List>
    <List>
      {bottomIconsContent.map(content => (
        <ListItem button key={content.title} classes={{ root: styles.button }}>
          <ListItemIcon>{content.icon}</ListItemIcon>
          <ListItemText primary={content.title} />
        </ListItem>
      ))}
    </List>
  </Box>
);

export default SideBar;
