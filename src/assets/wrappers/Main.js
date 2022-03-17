import styled from "styled-components";

const Wrapper = styled.main`
  min-width: 30rem;
  width: 90%;
  max-width: 60rem;
  margin: 0 auto;

  @media screen and (min-width: 1200px) {
    min-width: 60rem;
    width: 50%;
    max-width: 102.4rem;
  }
`;

export default Wrapper;
