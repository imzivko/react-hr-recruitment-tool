import React, { useState } from 'react';
import Navigation from 'components/Navigation';

import { Box } from '@material-ui/core';

import RecievedApplicantsTable from 'components/RecievedApplicantsTable';
import CandidateProfile from './partials/CandidateProfile';
import ApplicationTypeSelector from './partials/ApplicationTypeSelector';
import useApplicationTypeSelector from './partials/ApplicationTypeSelector/useApplicationTypeSelector';
import SearchAndFilterBar from './partials/SearchAndFilterBar';
import SideBar from './partials/SideBar';

import styles from './home.module.scss';

const Home: React.FC = () => {
  const { applicationType, handleApplicationTypeChange } = useApplicationTypeSelector();
  const [query, setQuery] = React.useState<string>('');
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null);

  const handleDrawerClose = () => {
    setSelectedProfile(null);
  };

  return (
    <Box className={styles.container}>
      <Navigation />
      <Box display="flex" width="100%" minHeight="90vh">
        <SideBar />
        <Box className={styles.tabContainer}>
          <ApplicationTypeSelector value={applicationType} onChange={handleApplicationTypeChange} />
          <SearchAndFilterBar onChange={setQuery} />
          <RecievedApplicantsTable query={query} onProfileSelection={setSelectedProfile} />
        </Box>
      </Box>
      <CandidateProfile applicantId={selectedProfile} onClose={handleDrawerClose} />
    </Box>
  );
};

export default Home;
