import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #2b6985;
  padding: 10px 20px;
  height: 124px;
  width: 100%;
  flex-shrink: 0;

  @media (max-width: 768px) {
    padding: 16px;  
    height: auto;   
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

export const SearchContainer = styled.div`
  display: flex;
  height: 33px;
  padding: 0px 10px;
  justify-content: flex-end;
  align-items: center;
  flex-shrink: 0;
  border-radius: 8px;
  width: 100%;
  background-color: white;

  @media (min-width: 768px) {
    width: 100%;  
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
  border-radius: 60%;
  width: 60px;
  height: 60px;
  flex-shrink: 0;
  margin-left: 9px;

  @media (max-width: 768px) {
    width: 45px;   
    height: 45px;  
  }
`;

