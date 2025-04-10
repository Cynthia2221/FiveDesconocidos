import logo from "../../assets/logo.png";
import SubjectCard from "../../components/subjectCard/SubjectCard";
import { SubjectHomeCard } from "../../components/subjectHomeCard/SubjectHomeCard";
import useSubjects from "../../hooks/useSubjects";
import { SubjectPage } from "../subjectPage/subject";
import { HomePageStyle, Title } from "./homePage.style";
import React, { useRef } from "react";

export const HomePage = () => {
  const { subjects } = useSubjects();

  return (
    <div style={{ justifyContent: "left" }}>
      <HomePageStyle>
        <div style={{ textAlign: 'center', paddingTop: "20.5px" }}>
          <img src={logo} width={149} height={165} alt="logo" />
        </div>

      </HomePageStyle>
      <Title>New Courses</Title>

      {
        subjects.map((subject) => {
          return (
            <SubjectHomeCard key={subject.id} photo={subject.photo} name={subject.name} url={`/subject/${subject.id}/level`} description={subject.description} />
          )
        })
      }

    </div>



  );

};
