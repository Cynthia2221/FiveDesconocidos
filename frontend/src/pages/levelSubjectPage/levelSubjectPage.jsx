import { useParams } from "react-router-dom";

export const LevelSubjectPage = () => {
  const { level_id } = useParams();
  const { subject_id } = useParams();
  console.log(level_id);
  console.log(subject_id);

  return (
    <div>
      <h1>Level Subject Page</h1>
      <p>Welcome to the level subject page!</p>
      <p>
        You are on subject {level_id} & level {subject_id}
      </p>
    </div>
  );
};
