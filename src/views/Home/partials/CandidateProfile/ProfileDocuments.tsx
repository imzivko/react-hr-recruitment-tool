import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { PdfIcon } from 'components/Icons';
import clsx from 'clsx';
import { Applicant } from 'models/applicant';

import styles from './candidate-profile.module.scss';

interface ProfileDocumentsProps {
  applicant: Applicant | null;
}

const ProfileDocuments: React.FC<ProfileDocumentsProps> = ({ applicant }) => {
  if (!applicant) {
    return null;
  }
  return (
    <Box marginBottom="2.1rem">
      <Typography align="justify" classes={{ subtitle1: styles.title }} color="primary" variant="subtitle1">
        Attached documents
      </Typography>
      <Box margin="2rem 0 0 3.5rem" display="flex">
        <Box className={clsx(styles.cv, { [styles.hidden]: !applicant.cv })} width="9.7rem" height="7.7rem">
          <PdfIcon color="#5E74D2" className={styles.pdfIcon} />
          <Box className={styles.cvFileName}>
            <Typography variant="subtitle1">CV Max.pdf</Typography>
            <Typography variant="caption">321 KB</Typography>
          </Box>
        </Box>
        <Box className={clsx(styles.letter, { [styles.hidden]: !applicant.ml })} width="9.7rem" height="7.7rem">
          <PdfIcon color="#1E8DE1" className={styles.pdfIcon} />
          <Box className={styles.letterFileName}>
            <Typography variant="subtitle1">Application.pdf</Typography>
            <Typography variant="caption">171 KB</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileDocuments;
