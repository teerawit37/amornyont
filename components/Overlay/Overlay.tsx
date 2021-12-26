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
interface OverlayProps {
  onClick?: () => void,
  className?: string,
}

const Overlay = ({ onClick, className = '' } : OverlayProps) => {
  return (
    <OverlayBG className={className} onClick={onClick} />
  );
}

export default memo(Overlay);