import styled from "styled-components";

const MaxWidthWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth || 1100}px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 2rem;
  padding-right: 2rem;
`;

export default MaxWidthWrapper;
