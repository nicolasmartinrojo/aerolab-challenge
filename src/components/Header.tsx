import styled from "styled-components";
import Coins from "./Coins";

const HeaderContainer = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
  margin: 0 42px;
  align-items: center;
  img {
    height: 38px;
  }

  .username {
    font-size: 24px;
    line-height: 48px;
  }
  & > span {
    display: flex;
    align-items: center;
  }
`;

const Header = () => (
  <HeaderContainer>
    <img src={process.env.PUBLIC_URL + "/aerolab-logo.svg"} alt="logo" />
    <span>
      <span className="username">John Kite</span>
      <span>
        <Coins>36000</Coins>
      </span>
    </span>
  </HeaderContainer>
);

export default Header;
