import styled from "styled-components";

export const LessonPageStyled = styled.div`
  h1 {
    font-size: 25px;
    color: ${(props) => props.theme.color.cerulean};
    margin: 1rem;
  }
  font-family: inter;
`;

export const LessonPageThumbnail = styled.div`
  width: 100%;
  height: 300px;
`;

export const LessonPageContent = styled.section`
  margin: 1rem;
  p {
    color: ${(props) => props.theme.color.grey};
    margin: 1rem 0;
  }
`;

export const LessonCourse = styled.div`
  h2 {
    margin: 1rem 0;
  }
  margin: 1rem;
  ul {
    li {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;
      border-radius: 8px;
      background-color: ${(props) => props.theme.color.lightGrey};
      p {
        color: ${(props) => props.theme.color.grey};
      }
    }
    a {
      text-decoration: none;
      color: inherit;
      align-items: center;
    }
  }
  li {
    list-style: none;
  }

  img {
    width: 100px;
    height: 100px;
    border-radius: 8px;
    margin-right: 1rem;
  }
`;
