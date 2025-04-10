import { useParams } from "react-router-dom";
import {
  LessonPageStyled,
  LessonPageThumbnail,
  LessonPageContent,
  LessonCourse,
} from "./lessonPage.styled";
import { LessonCard } from "../../components/lessonCard/LessonCard";
import useLessons from "../../hooks/useLesson";

import { Container } from "../../components/container/container";

export const LessonPage = () => {
  const { subject_id, level_id, lesson_id } = useParams();
  const { lesson, lessons } = useLessons(level_id, subject_id, lesson_id);

  if (!lesson) {
    return <p>Lesson not found!</p>;
  }

  return (
    <Container>
      <LessonPageStyled>
        <h1>{lesson.subject_name}</h1>
        <LessonPageThumbnail>
          <iframe
            width="100%"
            height="100%"
            src={lesson.url}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </LessonPageThumbnail>
        <LessonPageContent>
          <h3>{lesson.lesson_name}</h3>
          <p>{lesson.lesson_description}</p>
          <p>{lesson.lesson_content}</p>
        </LessonPageContent>
        <LessonCourse>
          <h2>Course Content</h2>
          <ul>
            {lessons.map((lesson) => {
              return (
                <>
                  < LessonCard
                    lessonName={lesson.lesson_name}
                    lessonDescription={lesson.lesson_description}
                    lessonImg={lesson.lesson_photo}
                    url={`/subject/${subject_id}/level/${level_id}/${lesson.lesson_id}`}
                    key={lesson.lesson_id}
                  />
                </>
              )
            })}
          </ul>
        </LessonCourse>
      </LessonPageStyled>
    </Container>
  );
};
