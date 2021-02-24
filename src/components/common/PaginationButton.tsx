import React from "react";
import styled from "styled-components";
import classnames from "classnames";

interface IPaginationButtons {
  img: string;
  click: () => void;
  disabled?: boolean;
  text: string;
}

const Container = styled.div`
  margin-left: 12px;
  cursor: pointer;
  &.disabled {
    opacity: 0.5;
    cursor: default;
  }
`;
const PaginationButton = ({
  img,
  click,
  disabled,
  text,
}: IPaginationButtons) => (
  <Container onClick={() => click()} className={classnames({ disabled })}>
    <img src={img} alt={text} />
  </Container>
);

export default PaginationButton;
