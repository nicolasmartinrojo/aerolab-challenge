import styled from "styled-components";
import classnames from "classnames";

interface IButtonProps {
  click: () => void;
  children: string;
  active?: boolean;
}

const ButtonContainer = styled.button`
  border-radius: ${(props) => props.theme.borderRadius};
  background: #ededed;
  color: ${(props) => props.theme.secondaryColor};
  margin-right: 24px;
  padding: 1px 23px;
  border: 0;
  cursor: pointer;
  &:hover {
    background: #ccc;
  }

  font-size: 24px;
  line-height: 48px;

  &.active {
    background-color: ${(props) => props.theme.primaryColor};
    color: white;
  }
`;
const Button = ({ click, children, active = false }: IButtonProps) => (
  <ButtonContainer onClick={() => click()} className={classnames({ active })}>
    {children}
  </ButtonContainer>
);

export default Button;
