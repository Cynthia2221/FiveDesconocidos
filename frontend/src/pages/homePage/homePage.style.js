import styled from 'styled-components';


export const HomePageStyle = styled.div`
 background-color: ${(props) => props.theme.color.blue};
 width: 100%;
 height: 80vh;
 padding-top: 3vh;
 
`;

export const SubjectsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  background-color: ${(props) => props.theme.color.blue}; /* optional */
`;

export const SubjectCard = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 20px;
  width: 200px;
  height: 120px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default HomePageStyle;

