import styled from "styled-components";

const Wrapper = styled.div`
  display: none;
  min-width: 30rem;
  width: 90%;
  max-width: 60rem;
  margin: 0 auto;
  height: 20rem;
  margin-top: 1.5rem;
  background-color: #fff;
  border-radius: 10px;
  z-index: 2;

  &.open {
    display: block;
  }

  .menu {
    height: 100%;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .menu-item {
    font-weight: 500;
    font-size: 2rem;
    color: ${(props) => props.theme.colors.primaryBlack};
    padding: 0 40px;
  }

  .divider {
    height: 1px;
    background-color: ${(props) => props.theme.colors.secondaryGray};
  }

  @media screen and (min-width: 1200px) {
    &.open {
      display: none;
    }
  }
`;

export default Wrapper;
