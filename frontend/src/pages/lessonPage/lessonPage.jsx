import { useParams, Link } from "react-router-dom";
import lessonData from "../../data/lessonData.json";
import {
  LessonPageStyled,
  LessonPageThumbnail,
  LessonPageContent,
  LessonCourse,
} from "./lessonPage.styled";

export const LessonPage = () => {
  const { subject_id, level_id, lesson_id } = useParams();
  const course = lessonData.course;
  const lesson = lessonData.course.lessons.find((lesson) => lesson.id === parseInt(lesson_id));

  if (!lesson) {
    return <p>Lesson not found!</p>;
  }

  return (
    <LessonPageStyled>
      <h1>{course.title}</h1>
      <LessonPageThumbnail>
        <iframe
          width="100%"
          height="100%"
          src={lesson.video}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </LessonPageThumbnail>
      <LessonPageContent>
        <h3>{lesson.title}</h3>
        <p>{lesson.description}</p>
        <p>{lesson.content}</p>
      </LessonPageContent>
      <LessonCourse>
        <h2>Course Content</h2>
        <ul>
          {course.lessons.map((item) => (
            <Link to={`/subject/${subject_id}/${level_id}/${item.id}`} key={item.id}>
              <li key={item.id}>
                <img src={item.thumbnail} alt={`Thumbnail for ${item.title}`} />
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.description}</p>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </LessonCourse>
    </LessonPageStyled>
  );
};
