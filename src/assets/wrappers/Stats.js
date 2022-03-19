import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #fff;
  width: 100%;
  text-align: center;
  padding-bottom: 30px;
  padding-top: 10px;
  border-radius: 5px;
  margin-bottom: 20px;

  .container {
    width: 90%;
    margin: 0 auto;
  }

  .stat {
    display: flex;
    flex-direction: column;
    margin: 20px 0;
  }

  .stat--main {
    font-weight: 700;
    font-size: 3rem;
    color: ${(props) => props.theme.colors.primaryBlack};
    margin-bottom: 5px;
  }

  .stat--sub {
    color: ${(props) => props.theme.colors.primaryGray};
    font-size: 1.3rem;
  }

  .divider {
    height: 1px;
    width: 100px;
    margin: 10px auto;
    background-color: ${(props) => props.theme.colors.secondaryGray};
  }

  .gauges {
    position: relative;
    margin-top: 30px;
    margin-bottom: 10px;
    width: 100%;
  }

  .gauge {
    height: 10px;
    border-radius: 100px;
  }

  .gauge--main {
    background-color: ${(props) => props.theme.colors.secondaryGray};
  }

  .gauge--sub {
    background-color: ${(props) => props.theme.colors.primaryCyan};
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }

  /* .gauge::after {
    content: "";
    width: 80%;
    height: 10px;
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${(props) => props.theme.colors.primaryCyan};
    border-radius: 100px;
  } */

  @media screen and (min-width: 1200px) {
    margin-bottom: 25px;
    padding-top: 20px;
    padding-bottom: 40px;

    .stats {
      display: flex;
    }

    .stat:not(:last-child) {
      border-right: 1px solid ${(props) => props.theme.colors.secondaryGray};
      margin-right: 70px;
      padding-right: 70px;
    }

    .divider {
      display: none;
    }
  }
`;

export default Wrapper;
