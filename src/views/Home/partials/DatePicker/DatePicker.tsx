import React, { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import { Box } from '@material-ui/core';

import 'react-datepicker/dist/react-datepicker.css';
import styles from './date-picker.module.scss';

const DatePicker: React.FC = () => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());

  const newLocal = (date: [Date, Date]) => {
    const [start, end] = date;
    setStartDate(start);
    setEndDate(end);
  };
  const handleDateRange = newLocal;
  return (
    <Box className={styles.datePickerContainer}>
      <ReactDatePicker
        className={styles.datePicker}
        selected={startDate}
        selectsStart
        startDate={startDate}
        selectsEnd
        endDate={endDate}
        onChange={handleDateRange}
        selectsRange
        placeholderText="dd-mm-yyyy"
        dateFormat="dd-MM-yyyy"
      />
    </Box>
  );
};

export default DatePicker;
