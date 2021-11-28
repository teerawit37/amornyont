import { memo } from "react";
import styled from '@emotion/styled';
import { NavBar } from "../NavBar";
import { Footer } from '../Footer';

const breakpoints = [375, 768, 1024, 1440]

const mq = breakpoints.map(
  bp => `@media (min-width: ${bp}px)`
)
type LayoutProps = { children?: React.ReactNode };

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}

export default memo(Layout);