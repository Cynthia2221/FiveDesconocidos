
import { useState } from 'react';
import React from "react";
import Calendar from "react-calendar";
import CalendarStyle, { Title } from './calendarStyle';

export const CalendarPage = () => {
  return (
    <div>
      <Title>Calendar Page</Title>
      <CalendarStyle>
        <Calendar />
      </CalendarStyle>
      <p>Welcome to the calendar page!</p>
    </div>
  );
};

export default CalendarPage;
