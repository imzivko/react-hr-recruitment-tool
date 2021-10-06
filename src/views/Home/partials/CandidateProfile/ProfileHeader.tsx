import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { SeniorityIcon } from 'components/Icons';
import { Applicant } from 'models/applicant';

import styles from './candidate-profile.module.scss';

interface ProfileHeaderProps {
  applicant: Applicant | null;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ applicant }) => {
  if (!applicant) {
    return null;
  }
  return (
    <Box>
      <Box width="100%" display="flex" justifyContent="space-between">
        <Typography classes={{ root: styles.name }} variant="h3">
          {applicant.firstName} {applicant.lastName}
        </Typography>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="space-between" className={styles.seniority}>
        <SeniorityIcon />
        <Typography classes={{ subtitle2: styles.seniorityText }} variant="subtitle2" color="secondary">
          {applicant.seniority} {applicant.department}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProfileHeader;
