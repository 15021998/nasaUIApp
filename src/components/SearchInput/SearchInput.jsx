import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
// import Icon from '../Icon'

const SearchInput = ({ type, label, onKeyDown, ...delegated }) => {
  return (
    <Label>
      <Input
        {...delegated}
        placeholder={label}
        onKeyDown={onKeyDown}
        type={type}
        onWheel={(event) => event.currentTarget.blur()}
      />
      {/* <SearchIcon id="search" strokeWidth={1} size={16} /> */}
    </Label>
  );
};

const Label = styled.label`
  position: relative;
`;

const Input = styled.input`
  border: none;
  background: transparent;
  border: 1px solid ${COLORS.gray[300]};
  padding: 15px 20px;
  font-size: 0.875rem;
  color: ${COLORS.black};
  outline-offset: 1px;
  &::placeholder {
    color: ${COLORS.gray[500]};
  }
  // width: 100%;
  min-width: 811px;
  border-radius: 5px;
`;

// // const SearchIcon = styled(Icon)`
// //   position: absolute;
// //   top: 0;
// //   right: 0;
// //   width: 16px;
// //   height: 16px;
// //   padding-right: 25px;
// `

export default SearchInput;
