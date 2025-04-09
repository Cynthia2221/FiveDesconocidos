import styled from 'styled-components';

export const ProfileContainer = styled.div`
  padding: 2rem;
`;

export const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
`;

export const SubjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 400px;
  margin: 0 auto;
`;

export const SubjectCard = styled.div`
  text-align: center;
`;

export const SubjectImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 0.5rem;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const SubjectName = styled.p`
  font-size: 1rem;
  font-weight: 500;
`;

