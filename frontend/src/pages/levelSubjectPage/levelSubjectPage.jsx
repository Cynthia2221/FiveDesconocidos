import useLessons from "../../hooks/useLesson";
import "./LevelSubject.css";

export const LevelSubjectPage = () => {
  const { lessons } = useLessons();

  return (
    <div className="level-subject-page">
      <h1 className="level-subject-title">Mathematics</h1>

      <>
        <p>prueba</p>
        {
          lessons.map((lesson) => (
            <p>{lesson.name}</p>
          ))

        }
      </>

      <div className="subject-image-container">
        <img
          src="/subjectsPictures/history.jpg"
          alt="Mathematics"
          className="subject-image"
        />
        <p className="subject-description">
          Solid foundations in arithmetic and algebra. Master operations, fractions, decimals, and simple equations.
        </p>
      </div>

      <h2 className="course-title">Course</h2>

      <div className="course-scroll">
        <div className="lesson-card">
          <img
            src="/subjectsPictures/music.jpg"
            alt="Lesson 1"
            className="lesson-image"
          />
          <div className="lesson-text">
            <div className="lesson-title">Lesson 1</div>
            <div className="lesson-description">
              Learn about arithmetic and algebra.
            </div>
          </div>
        </div>
        <div className="lesson-card">
          <img
            src="/subjectsPictures/music.jpg"
            alt="Lesson 1"
            className="lesson-image"
          />
          <div className="lesson-text">
            <div className="lesson-title">Lesson 1</div>
            <div className="lesson-description">
              Learn about arithmetic and algebra.
            </div>
          </div>
        </div>
        <div className="lesson-card">
          <img
            src="/subjectsPictures/music.jpg"
            alt="Lesson 1"
            className="lesson-image"
          />
          <div className="lesson-text">
            <div className="lesson-title">Lesson 1</div>
            <div className="lesson-description">
              Learn about arithmetic and algebra.
            </div>
          </div>
        </div>
        <div className="lesson-card">
          <img
            src="/subjectsPictures/music.jpg"
            alt="Lesson 1"
            className="lesson-image"
          />
          <div className="lesson-text">
            <div className="lesson-title">Lesson 1</div>
            <div className="lesson-description">
              Learn about arithmetic and algebra.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
