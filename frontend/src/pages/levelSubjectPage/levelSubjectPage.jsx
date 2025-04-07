import "./LevelSubject.css";

export const LevelSubjectPage = () => {
  return (
    <div className="level-subject-page">
      <h1 className="level-subject-title">Mathematics</h1>

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
            src="/lessonsPictures/music.jpg"
            alt="Lesson 1"
            className="lesson-image"
          />
          <div className="lesson-title">Lesson 1</div>
          <div className="lesson-description">
            Learn about arithmetic and algebra.
          </div>
        </div>

        <div className="lesson-card">
          <img
            src="/lessonsPictures/lesson2.jpg"
            alt="Lesson 2"
            className="lesson-image"
          />
          <div className="lesson-title">Lesson 2</div>
          <div className="lesson-description">
            Learn geometry: 2D (triangles, circles), 3D (cubes, spheres, prisms).
          </div>
        </div>
        <div className="lesson-card">
          <img
            src="/lessonsPictures/lesson2.jpg"
            alt="Lesson 2"
            className="lesson-image"
          />
          <div className="lesson-title">Lesson 2</div>
          <div className="lesson-description">
            Learn geometry: 2D (triangles, circles), 3D (cubes, spheres, prisms).
          </div>
        </div>
        <div className="lesson-card">
          <img
            src="/lessonsPictures/lesson2.jpg"
            alt="Lesson 2"
            className="lesson-image"
          />
          <div className="lesson-title">Lesson 2</div>
          <div className="lesson-description">
            Learn geometry: 2D (triangles, circles), 3D (cubes, spheres, prisms).
          </div>
        </div>
        <div className="lesson-card">
          <img
            src="/lessonsPictures/lesson2.jpg"
            alt="Lesson 2"
            className="lesson-image"
          />
          <div className="lesson-title">Lesson 2</div>
          <div className="lesson-description">
            Learn geometry: 2D (triangles, circles), 3D (cubes, spheres, prisms).
          </div>
        </div>
        <div className="lesson-card">
          <img
            src="/lessonsPictures/lesson2.jpg"
            alt="Lesson 2"
            className="lesson-image"
          />
          <div className="lesson-title">Lesson 2</div>
          <div className="lesson-description">
            Learn geometry: 2D (triangles, circles), 3D (cubes, spheres, prisms).
          </div>
        </div>
      </div>
    </div>
  );
};
