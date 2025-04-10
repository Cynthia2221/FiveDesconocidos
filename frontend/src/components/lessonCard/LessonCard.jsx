import styled from "styled-components"
import { Link } from "react-router-dom";


const LessonCardContainer = styled(Link)`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 500px;
  padding: 12px 0;
  border-bottom: 1px solid #ccc;
  text-decoration:none;
  cursor: pointer;
`;

const LessonCardImagen = styled.img`
  width: 98px;
  height: 98px;
  border-radius: 12px;
  object-fit: cover;
  margin-right: 16px;
`

const LessonText = styled.div`
  display: flex;
  flex-direction: column;
`

const LessonCadTittle = styled.div`
  font-weight: bold;
  font-size: 14px;
  color: #2b6985;
`

const LessonCadDescription = styled.div`
  font-size: 12px;
  color: #555;
`

export const LessonCard = ({ lessonName, lessonDescription, url, lessonImg }) => {
  return (
    <>
      <LessonCardContainer to={url}>
        <LessonCardImagen
          src={`https://0469e835-68e4-497b-b14e-ff98ab667c7a.escritorios.ieselrincon.es:443${lessonImg}`}
          alt={lessonName}
        />
        <LessonText>
          <LessonCadTittle>{lessonName}</LessonCadTittle>
          <LessonCadDescription>
            {lessonDescription}
          </LessonCadDescription>
        </LessonText>
      </LessonCardContainer>
    </>
  )
}
