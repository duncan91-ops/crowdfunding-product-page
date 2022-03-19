import styled from "styled-components";

const Wrapper = styled.section`
  min-width: 30rem;
  width: 90%;
  max-width: 60rem;
  margin: 0 auto;
  background-color: #fff;
  margin-top: 12rem;
  border-radius: 10px;
  padding: 30px 0;

  .container {
    width: 90%;
    margin: 0 auto;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .modal-btn {
    width: 20px;
    height: 20px;
    border-radius: 100px;
    background-color: transparent;
  }

  .title {
    color: ${(props) => props.theme.colors.primaryBlack};
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .text {
    color: ${(props) => props.theme.colors.primaryGray};
    margin-bottom: 2rem;
    line-height: 1.5;
  }

  @media screen and (min-width: 1200px) {
    min-width: 60rem;
    width: 50%;
    max-width: 102.4rem;
    padding: 50px 0;
    margin-top: 18.5rem;

    title {
      margin-bottom: 4rem;
    }

    .text {
      margin-bottom: 3rem;
    }
  }
`;

export default Wrapper;
