import { useParams } from "react-router-dom";
import useLessons from "../../hooks/useLesson";
import "./LevelSubject.css";
import useSubjects from "../../hooks/useSubjects";
import { LessonCard } from "../../components/lessonCard/LessonCard";

export const LevelSubjectPage = () => {
  const { subject_id, level_id } = useParams()
  const { lessons } = useLessons(level_id, subject_id);
  const { getSubjectById } = useSubjects();

  const subjectName = getSubjectById(subject_id).name;
  const subjectPhoto = getSubjectById(subject_id).photo;
  const subjectDescription = getSubjectById(subject_id).description;

  return (
    <div className="level-subject-page">
      <h1 className="level-subject-title">{subjectName}</h1>
      <div className="subject-image-container">
        <img
          src={`http://localhost:8080${subjectPhoto}`}
          alt="Mathematics"
          className="subject-image"
        />
        <p className="subject-description">
          {subjectDescription}
        </p>
      </div>

      <h2 className="course-title">Course</h2>

      <div className="course-scroll">
        <>
          {
            (lessons.length > 0) ? lessons.map((lesson) => {
              return (
                <LessonCard
                  key={lesson.lesson_id}
                  lessonName={lesson.lesson_name}
                  lessonDescription={lesson.lesson_description}
                  lessonImg={lesson.lesson_photo}
                  url={`/subject/${subject_id}/level/${level_id}/${lesson.lesson_id}`}
                />
              )
            }) :
              <p>No course lessons</p>
          }
        </>
      </div>
    </div>
  );
};
