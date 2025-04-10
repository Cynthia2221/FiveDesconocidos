import styled from "styled-components";

const CalendarStyle = styled.div`
  .react-calendar_title {
    display: flex;
    justify-content: center;
  }

  .react-calendar__tile {
    display: flex;
    background-color: white;
    border: none;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .react-calendar__navigation__label__labelText {
    background-color: white;
    justify-content: center;
    width: 100%;
    height: auto;
  }

  .react-calendar__navigation__label {
    width: 60%;
    background-color: white;
    border: none;
  }

  .react-calendar__navigation__arrow {
    width: 6%;
    height: 6px;
    border: none;
    background-color: white;
    color: #ffdf9e;
  }
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  width: 334px;
  height: 53px;
  padding: 17px 20px;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: #17a1fa;
  color: #fff;
  text-align: center;
  margin: 20px auto 10%;
  font-family: Inter;
  font-size: 24px;
  font-weight: 500;
  line-height: 121.095%;
`;

export const ReminderTitle = styled.p`
  display: flex;
  justify-content: center;
  width: fit-content;
  padding: 10px 20px;
  border-radius: 8px;
  background: #17a1fa;
  color: #fff;
  margin: 20px auto 10px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 500;
`;

export const ReminderButton = styled.button`
  padding: 10px 12px;
  background-color: #17a1fa;
  color: white;
  border: none;
  border-radius: 6px;
  margin-left: 8px;
  cursor: pointer;
  font-weight: 500;
`;

export const ReminderInput = styled.input`
  padding: 10px;
  margin-top: 12px;
  border-radius: 6px;
  border: 1px solid #ccc;
  width: 250px;
`;

export const ReminderList = styled.ul`
  margin-top: 16px;
  list-style-type: disc;
  padding-left: 20px;
`;



export default CalendarStyle;


