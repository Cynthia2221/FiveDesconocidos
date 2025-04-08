import logo from "../../assets/logo.png";
import HomePageStyle from "./homePage.style";
export const HomePage = () => {
  return (
    <HomePageStyle>
      <div style={{textAlign: 'center'}}>
      <img src={logo} width={149} height={165} alt="logo" />
      </div>
    </HomePageStyle>
  );
};
