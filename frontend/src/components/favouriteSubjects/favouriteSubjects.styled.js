import styled from 'styled-components';

export const ProfileContainer = styled.div`
  padding: 2rem;
`;

export const SectionTitle = styled.h2`
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 121.095%; /* 29.063px */
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
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;     
`;

export const SubjectImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 0.5rem;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const SubjectName = styled.p`
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

