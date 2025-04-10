import styled from "styled-components"
import { Link } from "react-router-dom";

const SubjectHomeCardContainer = styled(Link)`
  display: "flex";
  flexDirection: "column"; 
  gap: "16px"; 
  marginBottom: "16px"; 
  justifyContent: "center";
  text-decoration: none;
`;

const SubjectBlock = styled.div`
display: flex;
gap: 16px;
padding-bottom: 16px;
margin-bottom: 16px;
border-bottom: 1px solid #E0E0E0
`;

const Picture = styled.img`
width: 98px;
height: 98px;
border-radius: 8px;
border: 1px solid #DFDFDF;
margin-left: 30.5px;
display: flex;
`;

const SubjectTitle = styled.h2`
width: 129px;
height: 22px;
font-family: Inter;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
color: #000;
display: flex;
gap: 10px;
text-decoration: none,
`;

const SubjectDescription = styled.p`
overflow: hidden;
color: #8A8A8A;
font-family: Inter;
font-size: 12px;
font-style: normal;
line-height: normal;
display: flex;
`;

export const SubjectHomeCard = ({ subject_id, photo, name, url, description }) => {
  return (
    <SubjectHomeCardContainer to={url}>
      <SubjectBlock style={{ width: "290px" }}>
        <Picture src={`http://localhost:8080${photo}`} alt={name} />
        <div>
          <SubjectTitle>{name}</SubjectTitle>
          <SubjectDescription>{description}</SubjectDescription>
        </div>
      </SubjectBlock>
    </SubjectHomeCardContainer>
  )
}
