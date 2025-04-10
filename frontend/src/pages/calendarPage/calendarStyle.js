import styled from "styled-components";
const calendarStyle = styled.div`
  
  .react-calendar_title  {
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
  }

  .react-calendar__navigation__label {
    width: 80%;
    background-color: white;
    border: none;
  }

  .react-calendar__navigation__arrow.react-calendar__navigation__prev-button {
    width: 6%;
    height: 6px;
    border: none;
    background-color: white;
    color: #FFDF9E;
    
  }

  .react-calendar__navigation__arrow.react-calendar__navigation__prev2-button {
    width: 6%;
    height: 6px;
    border: none;
    background-color: white;
    color: #FFDF9E;
  }
  .react-calendar__navigation__arrow.react-calendar__navigation__next2-button {
    width: 6%;
    height: 6px;
    border: none;
    background-color: white;
    color: #FFDF9E;
    
  .react-calendar__navigation__arrow.react-calendar__navigation__next-button {
    width: 8%;
    height: 6px;
    border: none;
    background-color: white;
    color: #FFDF9E;
  }

}
  
`;

export const Title = styled.h1`
display: flex;
justify-content: center;
flex-direction: row;
width: 334px;
height: 53px;
padding: 17px 20px;

align-items: center;
gap: 10px;
flex-shrink: 0;
border-radius: 8px;
background: var(--Blue-light-100, #17A1FA);
color: white;
color: var(--White, #FFF);
text-align: center;
margin-top: 20px;
margin-bottom: 10%;

/* Subtitle */
font-family: Inter;
font-size: 24px;
font-style: normal;
font-weight: 500;
line-height: 121.095%; /* 29.063px */
`;

export const calendar__tile = styled.div`
display: flex;
width: 393px;
height: 320px;
padding: 81px 7px 16px 11px;
justify-content: flex-end;
align-items: center;
flex-shrink: 0;

border-radius: 8px;
border: 0px solid rgba(0, 0, 0, 0.80);
background: #FFF;

` 

export default calendarStyle;

