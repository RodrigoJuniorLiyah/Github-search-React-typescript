import styled from "styled-components";
import starsImage from "../../assets/icons/starBg1.svg";

export const ContainerHome = styled.div`
  height: 100vh;
  width: 100%;

  background-image: url(${starsImage});
  background-size: contain;

  display: flex;
  justify-content: center;
`;
