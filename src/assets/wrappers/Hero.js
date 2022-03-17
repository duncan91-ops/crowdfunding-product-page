import styled from "styled-components";
import heroMobile from "../images/image-hero-mobile.jpg";
import heroDesktop from "../images/image-hero-desktop.jpg";

const Wrapper = styled.div`
  height: 30rem;
  width: 100%;
  background: url(${heroMobile}) top / contain no-repeat;

  @media screen and (min-width: 376px) {
    height: 40rem;
    background: url(${heroDesktop}) top / cover no-repeat;
  }
`;

export default Wrapper;
