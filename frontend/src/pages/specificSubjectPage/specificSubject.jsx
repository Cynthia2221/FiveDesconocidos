// SpecificSubject.tsx
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: white;
`;

const Title = styled.h1`
  color: #2B3385;
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  margin-bottom: 8px;
`;

const Subtitle = styled.p`
  color: #17A1FA;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  margin-bottom: 32px;
`;

const Button = styled.button`
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
  return (
    <>
    <Container>
      <Title>Mathematics</Title>
      <Subtitle>What level are you?</Subtitle>
      <Button>Elementary</Button>
      <Button>High School</Button>
      <Button>University</Button>
    </Container>
       </>
  );
};

export default SpecificSubject;
