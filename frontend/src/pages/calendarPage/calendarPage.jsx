
import { useState } from 'react';
import React from "react";
import Calendar from "react-calendar"
import CalendarStyle from './calendarStyle';

export const CalendarPage = () => {
  return (
    <div>
      <h1>Calendar Page</h1>
      <CalendarStyle >
      <Calendar />
      </CalendarStyle>
      <p>Welcome to the calendar page!</p>
    </div>
  );
};

export default CalendarPage