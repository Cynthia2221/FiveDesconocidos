import styled from "styled-components"
import { Link } from "react-router-dom";

const CardContainer = styled(Link)`
    border-radius: 16px;
    width: 152px;
    min-width: 150px;
    height: 265px;
    overflow: hidden;
    transition: transform 0.3s;
    flex-shrink: 0;
    text-decoration: none;
    color: #003f5c;
`;

const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
  margin-top: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const SubjectCard = ({ photo, name, url }) => {
  return (
    <CardContainer to={url}>
      <p>{name}</p>
      <CardImg src={`http://localhost:8080${photo}`} alt={`imagen of ${name} subject`} />
    </CardContainer>
  )
}

export default SubjectCard
