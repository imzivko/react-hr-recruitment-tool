import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { Applicant } from 'models/applicant';

import styles from './candidate-profile.module.scss';

interface ProfileDetailsProps {
  applicant: Applicant | null;
}

const ProfileDetails: React.FC<ProfileDetailsProps> = ({ applicant }) => {
  if (!applicant) {
    return null;
  }
  return (
    <Box>
      <Typography classes={{ subtitle1: styles.title }} color="primary" variant="subtitle1">
        Candidate details
      </Typography>
      <Box display="flex">
        <Box className={styles.contact}>
          <Box>
            <Typography classes={{ subtitle1: styles.detailsTitle }} color="textSecondary" variant="subtitle1">
              Tel.:
            </Typography>
            <Typography classes={{ subtitle1: styles.detailsContent }} variant="subtitle1">
              Phone number...
            </Typography>
          </Box>
          <Box>
            <Typography classes={{ subtitle1: styles.detailsTitle }} color="textSecondary" variant="subtitle1">
              Position:
            </Typography>
            <Typography classes={{ subtitle1: styles.detailsContent }} variant="subtitle1">
              {applicant.department}
            </Typography>
          </Box>
        </Box>
        <Box className={styles.contact}>
          <Box>
            <Typography classes={{ subtitle1: styles.detailsTitle }} color="textSecondary" variant="subtitle1">
              E-mail:
            </Typography>
            <Typography classes={{ subtitle1: styles.detailsContent }} variant="subtitle1">
              {applicant.email}
            </Typography>
          </Box>
          <Box>
            <Typography classes={{ subtitle1: styles.detailsTitle }} color="textSecondary" variant="subtitle1">
              Experience:
            </Typography>
            <Typography classes={{ subtitle1: styles.detailsContent }} variant="subtitle1">
              {applicant.seniority}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileDetails;
