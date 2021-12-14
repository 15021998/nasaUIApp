import styled from "styled-components";
import { COLORS } from "../../constants";

const Button = ({
  label,
  children,
  primary = false,
  disabled = false,
  onClick,
  ...delegate
}) => {
  return (
    <NativeButton
      primary={primary}
      disabled={disabled}
      onClick={onClick}
      {...delegate}
    >
      {label}
      {children}
    </NativeButton>
  );
};

const NativeButton = styled.button`
  ${({ disabled }) =>
    disabled &&
    `
    opacity: 0.3;
  `}
  background-color: ${({ primary }) =>
    primary ? COLORS.primary : COLORS.white};
  border: 1px solid
    ${({ primary }) => (primary ? COLORS.primary : COLORS.gray[300])};
  padding: 12px 50px;
  border-radius: 5px;
  color: ${({ primary }) => (!primary ? COLORS.primary : COLORS.white)};
  font-size: 1.125rem;
  line-height: 22px;
  cursor: pointer;
`;

export default Button;
