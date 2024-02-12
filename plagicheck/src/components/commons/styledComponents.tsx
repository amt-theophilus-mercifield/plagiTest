import styled from "styled-components";

export const Modal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background: #34405480;
  backdrop-filter: blur(2px);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
