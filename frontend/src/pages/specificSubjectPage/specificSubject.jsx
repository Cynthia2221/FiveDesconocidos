// SpecificSubject.tsx
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import useLevels from '../../hooks/useLevels';
import useSubjects from '../../hooks/useSubjects';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: white;
`;

export const Title = styled.h1`
  color: #2B3385;
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  margin-bottom: 8px;
`;

export const Subtitle = styled.p`
  color: #17A1FA;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  margin-bottom: 32px;
`;

export const Button = styled.button`
  background-color: #2B6985;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
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


