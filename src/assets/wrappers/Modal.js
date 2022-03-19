import styled from "styled-components";

const Wrapper = styled.div`
  display: none;
  width: 100%;
  height: 250%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  position: absolute;
  top: 0;
  left: 0;
  /* overflow: auto; */

  &.open {
    display: block;
  }
`;

export default Wrapper;
