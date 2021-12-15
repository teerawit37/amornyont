import { memo, useState } from "react";
import Image from 'next/image';
import styled from '@emotion/styled';
import logo from '../../public/assets/images/mitsuboshi-logo-white.png'
import jplogo from '../../public/assets/images/japan-logo.png'

const breakpoints = [375, 768, 1024, 1440]

const mq = breakpoints.map(
  bp => `@media (min-width: ${bp}px)`
)

const Nav = styled.div`
  height: 56px;
  width: 100%;
  background: linear-gradient(180deg, #444 0%, rgba(0, 0, 0, 0) 100%);
  position: absolute;
  padding: 0px 16px;
  align-items: center;
  display: flex;
  z-index: 2;
  ${mq[2]} {
    padding: 0px 24px;
    }
`
const NavHeader = styled.div`
  display: inline;
`

const MenuIcon = styled(Image)`
  cursor: pointer;
`

const NavLink = styled.div`
  display: flex;
  flex:2;
  justify-content: flex-end;
  font-size: 16px;
  }
`

const LogoContainer = styled.div`
  display: flex;
  padding: 13px 10px 13px 10px;
  color: #FFF;
  flex-direction: column;
  ${mq[2]} {
    flex-direction: row;
    }
  
`

const Text = styled.div`
  display: inline-block;
  padding: 13px 10px 13px 10px;
  color: #FFF;
`

const LogoEn = styled.div`
  height: 8px;
  width: 76px;
  display: flex;
  margin-bottom: 8px;
  ${mq[2]} {
    margin-right: 16px;
    margin-bottom: 0px;
    height: 14px;
    width: 125px;
    }
`

const LogoJP = styled.div`
  height: 8px;
  width: 29px;
  display: flex;
  ${mq[2]} {
    height: 14px;
    width: 47px;
    }
`

const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  flex-direction: column;
  padding: 20px 0px;
  background-color: #fff;
  position: absolute;
  width: 100%;
  z-index: 100;
`

const SubNavBar = () => {
  const [menu, setMenu] = useState<boolean>(false);
  return (
    <>
      <Nav>
        <NavHeader>
          <LogoContainer>
            <LogoEn>
              <Image
                alt="logo"
                src={logo}
                quality={100}
                placeholder="blur"
              />
            </LogoEn>
            <LogoJP>
              <Image
                alt="jplogo"
                src={jplogo}
                quality={100}
                placeholder="blur"
                objectFit="cover"
              />
            </LogoJP>


          </LogoContainer>
        </NavHeader>

        <NavLink>
          <Text>HOTLINE 02-224-2247</Text>
        </NavLink>
      </Nav>
    </>
  );
}

export default memo(SubNavBar);