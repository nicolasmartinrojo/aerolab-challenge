import styled from "styled-components";

const HeroContainer = styled.div`
  height: 400px;
  background-image: url(/header-x1.png);
  background-position: center;
  background-size: cover;

  font-weight: bold;
  font-size: 64px;
  line-height: 80px;
  color: white;

  display: flex;
  padding: 48px 132px;
  align-items: flex-end;
  box-sizing: border-box;
`;

const Hero = () => <HeroContainer>Electronics</HeroContainer>;

export default Hero;
