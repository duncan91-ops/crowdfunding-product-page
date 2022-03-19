import styled from "styled-components";

const Wrapper = styled.section`
  min-width: 30rem;
  width: 90%;
  max-width: 48rem;
  margin: 0 auto;
  background-color: #fff;
  margin-top: 14.5rem;
  border-radius: 10px;
  padding: 40px 10px;
  text-align: center;

  .hero,
  .title,
  .text {
    margin-bottom: 20px;
  }

  .title {
    font-size: 2rem;
  }

  .text {
    color: ${(props) => props.theme.colors.primaryGray};
    line-height: 1.5;
  }

  .btn {
    padding: 15px 25px;
    background-color: ${(props) => props.theme.colors.primaryCyan};
    color: #fff;
    border-radius: 100px;
    font-size: 1.6rem;
    font-weight: 700;
  }

  .btn:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.secondaryCyan};
    transform: scale(1.1) translateY(-5px);
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  }

  .btn:active {
    transform: translateY(-2px);
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
  }

  @media screen and (min-width: 1200px) {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    margin: 0;
    width: 40%;
    max-width: 55rem;
    padding: 50px;
    margin-top: 18.5rem;
  }
`;

export default Wrapper;
