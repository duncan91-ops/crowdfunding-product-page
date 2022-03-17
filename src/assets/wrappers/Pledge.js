import styled from "styled-components";

const Wrapper = styled.article`
  width: 100%;
  border: 1px solid ${(props) => props.theme.colors.secondaryGray};
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;

  &.disabled {
    opacity: 0.5;
  }

  .header {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 20px;
  }

  .title,
  .details {
    font-size: 1.6rem;
    color: ${(props) => props.theme.colors.primaryBlack};
    margin-bottom: 5px;
  }

  .details {
    color: ${(props) => props.theme.colors.primaryCyan};
    font-weight: 500;
  }

  .reward {
    color: ${(props) => props.theme.colors.primaryGray};
    font-size: 1.6rem;
    line-height: 1.5;
    margin-bottom: 20px;
  }

  .remaining {
    display: flex;
    height: 20px;
    margin-bottom: 40px;
  }

  .remaining .value {
    font-weight: 700;
    font-size: 3rem;
    color: ${(props) => props.theme.colors.primaryBlack};
  }

  .remaining .text {
    color: ${(props) => props.theme.colors.primaryGray};
    padding: 7px;
  }

  .btn {
    width: 15rem;
    padding: 15px 0;
    border-radius: 100px;
    color: #fff;
    background-color: ${(props) => props.theme.colors.primaryCyan};
  }

  .btn:disabled {
    background-color: ${(props) => props.theme.colors.primaryGray};
    cursor: not-allowed;
  }

  @media screen and (min-width: 1200px) {
    padding: 35px;

    .header {
      flex-direction: row;
      justify-content: space-between;
    }

    .footer {
      display: flex;
      justify-content: space-between;
    }

    .reward {
      margin-bottom: 30px;
    }

    .remaining {
      margin-bottom: 0;
    }
  }
`;

export default Wrapper;
