import styled from "styled-components"
import { Link } from "react-router-dom";

const CardContainer = styled(Link)`
    background-color: #f7e0b6;
    border-radius: 16px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 152px;
    min-width: 150px;
    height: 265px;
    overflow: hidden;
    transition: transform 0.3s;
    flex-shrink: 0;
`;

const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
`;

const SubjectCard = ({ photo, name, url }) => {
  return (
    <CardContainer to={url}>
      <CardImg src={`http://localhost:8080${photo}`} alt={`imagen of ${name} subject`} />
    </CardContainer>
  )
}

export default SubjectCard
