import React, { Component } from "react";
import styled from "styled-components";

const DotWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;
const Dot = styled.div`
  background-color: black;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin: 0 5px;
`;
class Loader extends Component {
  render() {
    return (
      <DotWrapper>
        LOADING
        <Dot/>
        <Dot/>
        <Dot/>
      </DotWrapper>
    )
  }
}
export default Loader