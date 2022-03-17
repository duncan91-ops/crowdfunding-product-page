import styled from "styled-components";

const Wrapper = styled.section`
  background-color: #fff;
  width: 100%;
  text-align: left;
  padding: 30px 0;
  border-radius: 5px;
  margin-bottom: 20px;

  .container {
    width: 90%;
    margin: 0 auto;
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
    padding: 50px 0;

    .title {
      margin-bottom: 4rem;
    }

    .text {
      margin-bottom: 3rem;
    }
  }
`;

export default Wrapper;
