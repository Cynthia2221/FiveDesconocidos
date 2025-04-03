import { useParams } from "react-router-dom";

export const DetailSubjectPage = () => {
  const { subject_id } = useParams();

  return (
    <div>
      <h1>Detail Subject Page</h1>
      <p>Welcome to the detail subject page!</p>
      <p>You are on {subject_id}</p>
    </div>
  );
};
