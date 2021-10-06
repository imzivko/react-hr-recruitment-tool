import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Box, CircularProgress, Snackbar, Typography } from '@material-ui/core';
import { format, formatDistance, parseISO } from 'date-fns';
import { Alert } from '@material-ui/lab';

import styles from './recieved-applicants-table.module.scss';

interface RecievedApplicantsTableProps {
  onProfileSelection: (id: string) => void;
  query: string;
}
interface IPost {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  date: string;
  department: string;
  seniority: string;
}
const defaultPosts: IPost[] = [];

const RecievedApplicantsTable: React.FC<RecievedApplicantsTableProps> = ({ onProfileSelection, query }) => {
  const [posts, setPosts] = React.useState(defaultPosts);
  const [error, setError] = React.useState<string>('');
  const [loading, setLoading] = React.useState<boolean>(false);

  const getData = React.useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch('https://api.hr-tool.proficodev.com/applicants');
      const data = await response.json();
      setPosts(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  React.useEffect(() => {
    getData();
  }, [getData]);

  const handleTableRowClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const {
      currentTarget: {
        dataset: { id },
      },
    } = event;
    if (id) {
      onProfileSelection(id);
    }
  };

  const filteredPosts = React.useMemo(
    () => posts.filter(post => `${post.firstName} ${post.lastName}`.toLowerCase().includes(query.toLowerCase())),
    [query, posts]
  );

  const capitalizeFirstLetter = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

  const handleAlertButtonClick = () => setError('');

  return (
    <Box className={styles.container}>
      {/* Error handle temporary solution */}
      <Snackbar open={error !== ''} autoHideDuration={6000} onClose={handleAlertButtonClick}>
        <Alert elevation={6} variant="filled" onClose={handleAlertButtonClick} severity="error">
          {`An error has occured. ${error}`}
        </Alert>
      </Snackbar>
      {loading ? (
        <Box className={styles.circularProgressContainer}>
          <CircularProgress size="7rem" />
        </Box>
      ) : (
        <TableContainer className={styles.tableContainer} component={Paper}>
          <Table stickyHeader aria-label="recieved applicants table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography classes={{ root: styles.headerText }} variant="body1" color="textSecondary">
                    Applicant
                  </Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography classes={{ root: styles.headerText }} variant="body1" color="textSecondary">
                    Application Date
                  </Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography classes={{ root: styles.headerText }} variant="body1" color="textSecondary">
                    Position
                  </Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography classes={{ root: styles.headerText }} variant="body1" color="textSecondary">
                    Experience
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredPosts.map(data => (
                <TableRow
                  classes={{ root: styles.tableRow }}
                  key={data.id}
                  onClick={handleTableRowClick}
                  data-id={data.id}
                >
                  <TableCell align="left" component="th" scope="data">
                    <Typography variant="body1" color="textPrimary">
                      {`${capitalizeFirstLetter(data.firstName)} ${capitalizeFirstLetter(data.lastName)}`}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {data.email}
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography variant="body1" color="textPrimary">
                      {format(parseISO(data.date), 'd/MM/yyyy')}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {formatDistance(parseISO(data.date), new Date(), { addSuffix: true })}
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography variant="body1" color="textPrimary">
                      {capitalizeFirstLetter(data.department)}
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography
                      classes={{ root: styles.headerText }}
                      variant="body1"
                      color={data.seniority.toLowerCase() === 'senior' ? 'primary' : 'error'}
                    >
                      {capitalizeFirstLetter(data.seniority)}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default RecievedApplicantsTable;
