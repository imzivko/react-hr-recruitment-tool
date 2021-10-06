import React from 'react';
import { Box, Link, Typography } from '@material-ui/core';
import { Behance, Dribbble, LinkedIn } from 'components/Icons';
import { Applicant } from 'models/applicant';

import styles from './candidate-profile.module.scss';

interface ProfileLinksProps {
  applicant: Applicant | null;
}

const ProfileLinks: React.FC<ProfileLinksProps> = ({ applicant }) => {
  if (!applicant) {
    return null;
  }
  return (
    <Box>
      <Typography align="justify" classes={{ subtitle1: styles.title }} color="primary" variant="subtitle1">
        Attached links
      </Typography>
      <Box display="flex" alignItems="center" margin="2rem 0 1rem 3.5rem">
        <Dribbble fontSize="large" />
        <Link TypographyClasses={{ root: styles.link }} href={applicant.websiteLink}>
          {applicant.websiteLink}
        </Link>
      </Box>
      <Box display="flex" alignItems="center" margin="1rem 0 1rem 3.5rem">
        <Behance />
        <Link TypographyClasses={{ root: styles.link }} href="/">
          Behance link...
        </Link>
      </Box>
      <Box display="flex" alignItems="center" margin="1rem 0 2rem 3.5rem">
        <LinkedIn />
        <Link TypographyClasses={{ root: styles.link }} href="/">
          LinkedIn link...
        </Link>
      </Box>
    </Box>
  );
};

export default ProfileLinks;
