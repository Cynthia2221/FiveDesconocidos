import { FavouriteSubjects } from '../../components/favouriteSubjects/favouriteSubjects';
import { ProfileContainer, ProfileHeader, ProfileContent } from './profilePage.styled';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../providers/AuthProvider';

export const ProfilePage = () => {
  const { user_id } = useParams();
  const { loginData } = useAuth();

  const isOwnProfile = loginData?.user?.id === parseInt(user_id);

  return (
    <ProfileContainer>
      <h1>Perfil de Usuario</h1>

      <ProfileHeader>
        <img
          src={loginData?.user?.photo || "../../src/assets/profilepic.png"}
          alt="Profile photo"
        />
        <div className="user-info">
          <h2>{loginData?.user?.name || "Usuario"}</h2>
        </div>
      </ProfileHeader>

      <ProfileContent>
        <div className="section">
          <h3>Asignaturas Favoritas</h3>
          <FavouriteSubjects />
        </div>
      </ProfileContent>
    </ProfileContainer>
  );
};
