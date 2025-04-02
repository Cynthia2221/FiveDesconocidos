import { useParams } from "react-router-dom";

export const ProfilePage = () => {
  const { user_id } = useParams();
  console.log(user_id);

  return (
    <div>
      <h1>Profile Page</h1>
      <p>Welcome to the profile page!</p>
      <p>You are on profile {user_id}</p>
    </div>
  );
};
