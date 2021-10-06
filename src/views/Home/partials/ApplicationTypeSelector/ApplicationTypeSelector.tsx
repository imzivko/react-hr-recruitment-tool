import React from 'react';

import { Tab, Tabs, Box } from '@material-ui/core';
import DatePicker from '../DatePicker/DatePicker';

import styles from './application-type-selector.module.scss';
import 'react-datepicker/dist/react-datepicker.css';

export enum ApplicationType {
  RECEIVED = 'received',
  IN_PROGRESS = 'in_progress',
  PENDING = 'pending',
}

const applicationTypeLabelMap: Record<ApplicationType, string> = {
  [ApplicationType.RECEIVED]: 'Received',
  [ApplicationType.IN_PROGRESS]: 'In progress',
  [ApplicationType.PENDING]: 'Pending',
};

export interface ApplicationTypeSelectorProps {
  value: ApplicationType;
  onChange: (value: ApplicationType) => void;
}

const ApplicationTypeSelector: React.FC<ApplicationTypeSelectorProps> = ({ value, onChange }) => {
  const handleChange = (_: React.ChangeEvent<{}>, newValue: ApplicationType) => {
    onChange(newValue);
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="space-between" mr="2rem" borderBottom="1px solid #E8EAEB">
      <Tabs
        indicatorColor="primary"
        textColor="primary"
        classes={{
          root: styles.tabs,
          flexContainer: styles.container,
          indicator: styles.indicator,
        }}
        value={value}
        onChange={handleChange}
      >
        {Object.entries(applicationTypeLabelMap).map(([type, label]) => (
          <Tab
            classes={{
              root: styles.tab,
              wrapper: styles.wrapper,
            }}
            key={type}
            label={label}
            value={type}
          />
        ))}
      </Tabs>

      <DatePicker />
    </Box>
  );
};

export default ApplicationTypeSelector;
