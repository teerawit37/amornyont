import { memo } from "react";
import styled from '@emotion/styled';

const OverlayBG = styled.div`
  position: absolute;
  height: 100%;
  width: 100vw;
  background-color: black;
  z-index: 1;
  opacity: 0.4;
`


const Overlay = () => {
  return (
    <OverlayBG />
  );
}

export default memo(Overlay);