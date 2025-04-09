// SpecificSubject.tsx
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import useLevels from '../../hooks/useLevels';
import useSubjects from '../../hooks/useSubjects';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: white;
`;

const Title = styled.h1`
  color: #2B3385;
  font-size: 24px;
  margin-bottom: 8px;
`;

const Subtitle = styled.p`
  color: #17A1FA;
  font-size: 16px;
  margin-bottom: 32px;
`;

const Button = styled.button`
  background-color: #2B6985;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  margin-bottom: 16px;
  width: 200px;
  cursor: pointer;

  &:hover {
    background-color: #2B6985;
  }
`;

const SpecificSubject = () => {
  const navigate = useNavigate();
  const { subject_id } = useParams();
  const { levels } = useLevels();
  const { subjects, getSubjectById } = useSubjects();

  const subjectName = getSubjectById(subject_id).name;

  return (
    <>
      <Container>
        <Title>{subjectName}</Title>
        <Subtitle>What level are you?</Subtitle>
        {
          levels.map((level) => (
            <Button key={level.id} onClick={() => navigate(`/subject/${subject_id}/level/${level.id}`)}>{level.name}</Button >
          ))
        }
      </Container>
    </>
  );
};

export default SpecificSubject;
