import mathematicsSmall from '../../assets/icons/mathematics-small.png';
import sciencesSmall from '../../assets/icons/sciences-small.png';
import englishSmall from '../../assets/icons/english-small.png';
import geographySmall from '../../assets/icons/geography-small.png';
import { ProfileContainer, SectionTitle, SubjectCard, SubjectImage, SubjectName, SubjectsGrid } from './favouriteSubjects.styled';

export const FavouriteSubjects = () => {
    return (
      <ProfileContainer>
        <SectionTitle>Favourite Subjects</SectionTitle>
        <SubjectsGrid>
          <SubjectCard>
            <SubjectImage src={mathematicsSmall} alt="Mathematics" />
            <SubjectName>Mathematics</SubjectName>
          </SubjectCard>
          <SubjectCard>
            <SubjectImage src={sciencesSmall} alt="Sciences" />
            <SubjectName>Sciences</SubjectName>
          </SubjectCard>
          <SubjectCard>
            <SubjectImage src={englishSmall} alt="English" />
            <SubjectName>English</SubjectName>
          </SubjectCard>
          <SubjectCard>
            <SubjectImage src={geographySmall} alt="Geography" />
            <SubjectName>Geography</SubjectName>
          </SubjectCard>
        </SubjectsGrid>
      </ProfileContainer>
    );
  };
  