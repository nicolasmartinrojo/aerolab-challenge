import React from "react";
import styled from "styled-components";
import classnames from "classnames";

const Container = styled.div`
  background-color: #ededed;
  border-radius: ${(props) => props.theme.borderRadius};
  font-size: 24px;
  line-height: 48px;
  display: flex;
  align-items: center;
  padding: 0 13px;
  margin-left: 18px;
  img {
    margin-left: 6px;
  }
  &.dark {
    background: #616161;
    mix-blend-mode: normal;
    opacity: 0.8;
    border-radius: 100px;
    font-size: 14px;
    line-height: 18px;
    color: white;
    padding: 11px 15px 13px;
    width: fit-content;
    right: 12px;
    position: absolute;
  }
`;
interface ICoinsProps {
  children: string;
  dark?: boolean;
}
const Coins = ({ children, dark }: ICoinsProps) => (
  <Container className={classnames({ dark })}>
    <span>{children}</span>
    <img src={process.env.PUBLIC_URL + "/icons/coin.svg"} alt="logo" />
  </Container>
);

export default Coins;
