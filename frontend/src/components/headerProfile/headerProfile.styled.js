import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: left; 
  justify-content: space-between;
  background-color: #2b6985;
  padding: 20px;
  height: 300px;
  width: 100%;
  flex-shrink: 0;
  flex-direction: column;
  position: relative;

  @media (max-width: 768px) {
    padding: 50px 16px 16px 16px;
  }
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: space-between;
  width:50%;
  @media (max-width: 1076px) {
    width:80%;
     
  }
  @media (max-width: 768px) {
    width:75%;
    gap: 4px;  
  }
`;

export const TopSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  gap: 16px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  height: 33px;
  padding: 0px 10px;
  justify-content: flex-end;
  align-items: center;
  border-radius: 8px;
  background-color: white;
  width: auto; /* <- mudado de 100% para auto */
  max-width: 300px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  background: transparent;
  width: 100%;
  font-size: 14px;
  
  @media (max-width: 768px) {
    font-size: 12px;  
  }
`;

export const SearchIcon = styled.img`
  width: 18px;
  height: 18px;

  @media (max-width: 768px) {
    width: 16px;
    height: 16px;  
  }
`;

export const MenuIcon = styled.img`
  width: 18px;
  height: 10px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;

  @media (max-width: 768px) {
    width: 16px;
    height: 9px;  
  }
`;

export const BellIcon = styled.img`
  width: 16px;
  height: 18px;
  cursor: pointer;
  filter: hue-rotate(20deg) brightness(1.2);
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 14px;
    height: 16px;  
  }
`;

export const ProfileImage = styled.img`
  border-radius: 50%;
  width: 96px;
  height: 96px;
  flex-shrink: 0;
  margin-top: 40px; 
  align-self: center;
  z-index: 1;

  @media (max-width: 768px) {
    width: 96px;
    height: 96px;
    margin-top: 30px;
  }
`;

export const ProfileInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12px;
  color: white;
  text-align: center;
`;

export const ProfileName = styled.p`
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  text-align: center;
  font-weight: 500;
  line-height: 121.095%; /* 29.063px */
  margin: 4px 0 0 0;
 `;

export const ProfileEmail = styled.p`
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  text-align: center;
  font-weight: 500;
  line-height: normal;
  opacity: 0.9;
  margin: 2px 0 0 0;
  padding-bottom:10px;
`;

export const ProfileButton = styled.button`
  width: 140px;
  height: 50.282px;
  flex-shrink: 0;
  font-family: Inter;
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
  background: var(--Yellow-peach-100, #FFDF9E); 
  color: black;
  border: none;
  border-radius: 50px; 
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #FFCA7D;  
  }
`;

