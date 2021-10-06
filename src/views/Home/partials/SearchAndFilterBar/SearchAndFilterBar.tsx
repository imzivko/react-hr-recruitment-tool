import { Box, Button, InputAdornment, TextField } from '@material-ui/core';
import { FilterList, Search } from '@material-ui/icons';
import React from 'react';

import styles from './search-and-filter-bar.module.scss';

interface SearchAndFilterProps {
  onChange: (query: string) => void;
}

const SearchAndFilterBar: React.FC<SearchAndFilterProps> = ({ onChange: setQuery }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setQuery(event.target.value);

  return (
    <Box className={styles.container} padding="2rem" display="flex" justifyContent="space-between" alignItems="center">
      <TextField
        variant="outlined"
        spellCheck="false"
        onChange={handleChange}
        color="primary"
        placeholder="Search applicants"
        size="small"
        classes={{ root: styles.searchInput }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
      />
      <Button classes={{ outlinedPrimary: styles.filterButton, root: styles.buttonRoot }} variant="outlined">
        <FilterList />
      </Button>
    </Box>
  );
};

export default SearchAndFilterBar;
