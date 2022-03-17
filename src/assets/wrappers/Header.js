import styled from "styled-components";

const Wrapper = styled.header`
  background-color: #fff;
  width: 100%;
  text-align: center;
  padding-bottom: 30px;
  margin-top: -55px;
  border-radius: 5px;
  margin-bottom: 20px;

  .container {
    width: 90%;
    margin: 0 auto;
  }

  .logo-box {
    transform: translateY(-50%);
  }

  .title {
    padding-bottom: 10px;
    color: ${(props) => props.theme.colors.primaryBlack};
    font-size: 2.3rem;
    margin-top: -10px;
  }

  .text {
    padding-bottom: 20px;
    color: ${(props) => props.theme.colors.primaryGray};
    font-size: 1.5rem;
    line-height: 1.5;
  }

  .btn-container {
    display: flex;
    justify-content: space-between;
  }

  .btn {
    border-radius: 100px;
    padding: 0 70px;
  }

  .primary-btn {
    background-color: ${(props) => props.theme.colors.primaryCyan};
    color: #fff;
  }

  .secondary-btn {
    display: none;
  }

  .bookmark-img {
    z-index: 2;
  }

  .bookmark {
    display: flex;
    justify-content: center;
  }

  @media screen and (min-width: 1200px) {
    margin-top: -90px;
    padding-bottom: 40px;

    .title {
      font-size: 2.8rem;
      margin-top: 0;
    }

    .text {
      font-size: 1.6rem;
      margin-bottom: 15px;
    }

    .btn {
      padding: 0 50px;
    }

    .secondary-btn {
      display: block;
      margin-left: -40px;
      padding-left: 60px;
      padding-right: 40px;
      z-index: 1;
    }
  }
`;

export default Wrapper;
