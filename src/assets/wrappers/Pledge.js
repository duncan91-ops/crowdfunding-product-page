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

  &.disabled .select:hover {
    cursor: not-allowed;
  }

  &.none {
    display: none;
  }

  &.selected {
    border: 2px solid ${(props) => props.theme.colors.primaryCyan};
  }

  &.show {
    .reward {
      transition: all 0.3s ease-in;
    }

    .header__content:hover {
      cursor: pointer;
    }

    .header:hover .select {
      border: 1px solid ${(props) => props.theme.colors.primaryCyan};
    }

    .header__content:hover .reward {
      color: ${(props) => props.theme.colors.primaryCyan};
    }

    &.disabled {
      &:hover {
        cursor: not-allowed;
      }

      .header__content:hover {
        cursor: not-allowed;

        .reward {
          color: ${(props) => props.theme.colors.primaryBlack};
        }
      }
    }
  }

  .header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 20px;
  }

  .select {
    width: 30px;
    height: 30px;
    border: 1px solid ${(props) => props.theme.colors.primaryGray};
    border-radius: 100px;
    position: relative;
    margin-right: 15px;
    background-color: transparent;
  }

  .select.none {
    display: none;
  }

  .select:hover {
    cursor: pointer;
  }

  .select__btn {
    width: 15px;
    height: 15px;
    border-radius: 100px;
    background-color: ${(props) => props.theme.colors.primaryCyan};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .select__btn.none {
    display: none;
  }

  .header__content {
    display: flex;
    flex-direction: column;
  }

  .reward,
  .pledge {
    font-size: 1.6rem;
    color: ${(props) => props.theme.colors.primaryBlack};
    margin-bottom: 5px;
  }

  .pledge {
    color: ${(props) => props.theme.colors.primaryCyan};
    font-weight: 500;
  }

  .pledge.none {
    display: none;
  }

  .details {
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

  .remaining.none {
    display: none;
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
    font-weight: 700;
    color: #fff;
    background-color: ${(props) => props.theme.colors.primaryCyan};
  }

  .btn.none {
    display: none;
  }

  .btn:disabled {
    background-color: ${(props) => props.theme.colors.primaryGray};
    cursor: not-allowed;
  }

  .btn:not(:disabled):hover {
    background-color: ${(props) => props.theme.colors.secondaryCyan};
  }

  .divider {
    width: calc(100% + 40px);
    height: 2px;
    background-color: ${(props) => props.theme.colors.secondaryGray};
    margin: 30px -20px;
  }

  .divider.none,
  .input.none {
    display: none;
  }

  .input__label {
    color: ${(props) => props.theme.colors.primaryGray};
    text-align: center;
    margin-bottom: 2.5rem;
  }

  .input__form {
    display: flex;
    justify-content: space-between;
  }

  .input__container {
    width: 120px;
    display: flex;
    border: 1px solid ${(props) => props.theme.colors.primaryGray};
    border-radius: 100px;
    padding: 12px 15px;
    font-size: 2rem;
    color: ${(props) => props.theme.colors.primaryGray};
  }

  .input__container.focused {
    border: 1px solid ${(props) => props.theme.colors.primaryCyan};
  }

  .input__container.error {
    border: 1px solid orangered;
  }

  .form-input {
    width: 100%;
    border: none;
    font-weight: 700;
    font-size: 2rem;
    padding-left: 10px;
  }

  .form-input:focus {
    border: none;
    outline: none;
  }

  .form-btn {
    width: 130px;
    border-radius: 100px;
    font-weight: 700;
    background-color: ${(props) => props.theme.colors.primaryCyan};
    color: white;
  }

  .form-btn:disabled {
    background-color: ${(props) => props.theme.colors.primaryGray};
  }

  .form-btn:not(:disabled):hover {
    background-color: ${(props) => props.theme.colors.secondaryCyan};
  }

  .btn:not(:disabled):hover,
  .form-btn:not(:disabled):hover {
    transform: scale(1.1) translateY(-5px);
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  }

  .btn:active,
  .form-btn:active {
    transform: translateY(-2px);
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
  }

  @media screen and (min-width: 1200px) {
    padding: 35px;

    &.show {
      position: relative;
    }

    &.show .header {
      margin-bottom: 10px;
    }

    .header__content {
      width: 100%;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    .header__content.show {
      justify-content: flex-start;
    }

    .header__content.show .reward {
      margin-right: 20px;
    }

    .select {
      margin-right: 30px;
    }

    .details {
      margin-bottom: 30px;
    }

    .details.show {
      margin-left: 60px;
      margin-bottom: 0;
    }

    &.show .divider {
      margin-bottom: 20px;
    }

    .footer {
      display: flex;
      justify-content: space-between;
    }

    .remaining {
      margin-bottom: 0;
    }

    .remaining.show {
      position: absolute;
      top: 30px;
      right: 20px;
    }

    &.show.selected .input {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &.show.selected .input__label {
      margin-bottom: 0;
    }

    &.show.selected .input__form {
      width: 270px;
    }
  }
`;

export default Wrapper;
