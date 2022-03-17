import styled from "styled-components";

const Wrapper = styled.nav`
  width: 88%;
  margin: 0 auto;
  padding: 32px 0;
  display: flex;
  justify-content: space-between;

  .menu-btn {
    background-color: transparent;
  }

  .menu {
    display: none;
    list-style-type: none;
  }

  @media screen and (min-width: 1200px) {
    width: 80%;
    padding: 50px 0;

    .menu-btn {
      display: none;
    }

    .menu {
      width: 30%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    .menu-item {
      color: #fff;
      padding: 0;
    }
  }
`;

export default Wrapper;
