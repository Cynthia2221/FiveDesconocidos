import { useParams } from "react-router-dom";

export const LessonPage = () => {
  const { lesson_id } = useParams();
  return (
    <div>
      <h1>Lesson Page</h1>
      <p>Welcome to the lesson page!</p>
      <p>You are on lesson {lesson_id}</p>
    </div>
  );
};
