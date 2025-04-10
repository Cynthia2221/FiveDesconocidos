import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  h1 {
    font-size: 2rem;
    margin-bottom: 2rem;
    color: #333;
  }
`;

export const ProfileHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  margin-bottom: 2rem;
  width: 100%;
  
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
  }
  
  .user-info {
    h2 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }
    
    p {
      color: #666;
      margin-bottom: 0.5rem;
    }
  }
`;

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  
  .section {
    margin-bottom: 2rem;
    
    h3 {
      font-size: 1.2rem;
      margin-bottom: 1rem;
      border-bottom: 1px solid #eee;
      padding-bottom: 0.5rem;
    }
  }
`; 