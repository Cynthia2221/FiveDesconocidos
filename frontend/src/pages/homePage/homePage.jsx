import logo from "../../assets/logo.png";
import { SubjectPage } from "../subjectPage/subject";
import {HomePageStyle, Title, Picture, SubjectTitle, SubjectDescription, SubjectBlock} from "./homePage.style";
import React, {useRef} from "react";

export const HomePage = () => {
  return (
    <div style={{justifyContent: "left"}}>
    <HomePageStyle>
      <div style={{textAlign: 'center', paddingTop: "20.5px"}}>
      <img src={logo} width={149} height={165} alt="logo" />
      </div>
      
    </HomePageStyle>
    <Title>New Courses</Title>
    
    <div style={{display: "flex", flexDirection: "column", gap: "16px", marginBottom: "16px", justifyContent: "center"}}>
            <SubjectBlock style={{width: "290px"}}>
            <Picture src="/subjectsPictures/music.jpg" alt="Subject 1" />
            <div>
            <SubjectTitle>Music</SubjectTitle>
            <SubjectDescription>Learn what you need to play the piano correctly.</SubjectDescription>
            </div>
            </SubjectBlock>
            </div>     
          <div style={{display: "flex", flexDirection: "column", gap: "16px", marginBottom: "16px", justifyContent: "center"}}>
            <SubjectBlock style={{width: "290px"}}>
            <Picture src="/subjectsPictures/math.png" alt="Subject 2" />
            <div>
            <SubjectTitle>Mathematics</SubjectTitle>
            <SubjectDescription>
          Solid foundations in arithmetic and algebra. Master operations, fractions, decimals, and simple equations.
          </SubjectDescription>
          </div>
          </SubjectBlock>
          <div style={{display: "flex",  gap: "16px", marginBottom: "16px", justifyContent: "center"}}></div>
          </div>
          <SubjectBlock style={{width: "290px"}}>
          <Picture src="/subjectsPictures/history.jpg" alt="Subject 3" />
          <div>
          <SubjectTitle>History</SubjectTitle>
          <SubjectDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </SubjectDescription>
          </div>
          </SubjectBlock>
         
    
  </div>
  


  );

};
