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
    padding: 0 60px;
  }

  .primary-btn {
    background-color: ${(props) => props.theme.colors.primaryCyan};
    color: #fff;
    font-weight: 700;
  }

  .primary-btn:hover {
    background-color: ${(props) => props.theme.colors.secondaryCyan};
    transform: scale(1.1) translateY(-5px);
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  }

  .primary-btn:active {
    transform: translateY(-2px);
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
  }

  .secondary-btn {
    display: none;
    color: ${(props) => props.theme.colors.primaryGray};
  }

  .bookmark {
    border-radius: 100px;
  }

  .bookmark-img circle {
    transition: all 0.3s ease-in;
  }

  .bookmark:hover {
    cursor: pointer;
  }

  .bookmark:hover .bookmark-img circle {
    fill: ${(props) => props.theme.colors.primaryGray};
  }

  .bookmarked .bookmark-img circle {
    fill: ${(props) => props.theme.colors.secondaryCyan};
  }

  .bookmarked .bookmark-img path {
    fill: white;
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
    margin-bottom: 25px;

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
      font-weight: 700;
    }

    .bookmarked .secondary-btn {
      color: ${(props) => props.theme.colors.secondaryCyan};
    }
  }
`;

export default Wrapper;
