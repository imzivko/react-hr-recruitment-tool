import React, { useState, useEffect } from 'react';
import { Box, Button, CircularProgress, Drawer, IconButton, Snackbar } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { Applicant } from 'models/applicant';
import ProfileDetails from './ProfileDetails';
import ProfileLinks from './ProfileLinks';
import ProfileDocuments from './ProfileDocuments';
import ProfileHeader from './ProfileHeader';

import styles from './candidate-profile.module.scss';

interface ApplicantProfileProps {
  applicantId: string | null;
  onClose: () => void;
}

const ApplicantProfile: React.FC<ApplicantProfileProps> = ({ applicantId, onClose }) => {
  const [applicant, setApplicant] = useState<Applicant | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.hr-tool.proficodev.com/applicants/${applicantId}`);
        if (response.status === 200) {
          const data = await response.json();
          setApplicant(data);
        } else {
          throw new Error('Error fetching data!');
        }
      } catch (err) {
        // setError();
      }
      setLoading(false);
    };

    if (applicantId) {
      fetchData();
    }
  }, [applicantId]);

  const handleDrawerClose = () => {
    setApplicant(null);
    onClose();
  };

  const handleSnackbarClose = () => {
    setError(undefined);
  };

  return (
    <>
      {error ? (
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          open={!!error}
          autoHideDuration={5000}
          message={`${error} data!`}
          onClose={handleSnackbarClose}
          action={
            <IconButton color="secondary" onClick={handleSnackbarClose}>
              <Close />
            </IconButton>
          }
        />
      ) : (
        <Drawer onClose={handleDrawerClose} classes={{ paper: styles.drawer }} open={!!applicant} anchor="right">
          {loading ? (
            <CircularProgress size="10rem" />
          ) : (
            <Box display="flex" flexDirection="column" justifyContent="space-between" height="100%">
              <Box display="flex" justifyContent="flex-end">
                <IconButton onClick={handleDrawerClose} classes={{ root: styles.closeButton }}>
                  <Close />
                </IconButton>
              </Box>
              <ProfileHeader applicant={applicant} />
              <ProfileDetails applicant={applicant} />
              <ProfileLinks applicant={applicant} />
              <ProfileDocuments applicant={applicant} />
              <Box className={styles.bottomButtons}>
                <Button className={styles.rejectButton} variant="outlined" color="secondary">
                  Reject
                </Button>
                <Button className={styles.acceptButton} variant="contained" color="primary">
                  Accept
                </Button>
              </Box>
            </Box>
          )}
        </Drawer>
      )}
    </>
  );
};

export default ApplicantProfile;
