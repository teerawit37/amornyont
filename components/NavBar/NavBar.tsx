import { memo, useContext, useState } from "react";
import Image from 'next/image';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import logo from '../../public/assets/images/amornyont-logo.png'
import icon from '../../public/assets/icons/menu.png'
import { useRouter } from "next/router";
import en from '../../public/locales/en';
import th from '../../public/locales/th';

const breakpoints = [375, 768, 1024, 1440]

const mq = breakpoints.map(
  bp => `@media (min-width: ${bp}px)`
)

const Nav = styled.div`
  height: 72px;
  width: 100%;
  background-color: #fff;
  position: relative;
  padding: 0px 16px;
  align-items: center;
  display: flex;
  border-bottom: 1px solid #D3D4D3;
  z-index: 100
  ${mq[2]} {
    padding: 0px 24px;
    }
`
const NavHeader = styled.div`
  display: inline;
`
const NavBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 2;
  ${mq[2]} {
    display: none;
  }
`
const MenuIcon = styled(Image)`
  cursor: pointer;
`

const NavLink = styled.div`
  display: none;
  ${mq[2]} {
  display: flex;
  flex:2;
  justify-content: flex-end;
  font-size: 16px;
  }
`

const Link = styled.a`
  display: inline-block;
  padding: 13px 10px 13px 10px;
  text-decoration: none;
  color: #000;
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

const ChangeLangButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: none;
	color: inherit;
	border: none;
`
const SpaceButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const NavBar = () => {
  const [menu, setMenu] = useState<boolean>(false);
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : th;

  const changeLanguage = (lang: string) => {
    const locale = lang;
    router.push('/', '/', {locale})
  }
  return (
    <>
      <Nav>
        <NavHeader>
          <Link href="/" rel="noreferrer">
            <Image
              alt="logo"
              src={logo}
              quality={100}
              placeholder="blur"
              width={194}
              height={26}
            />
          </Link>
        </NavHeader>
        <NavBtn>
          <MenuIcon
            alt="menu"
            src={icon}
            quality={100}
            width={38}
            height={38}
            onClick={() => setMenu(!menu)}
          />
        </NavBtn>

        <NavLink>
          <Link href="/product" rel="noreferrer">{t.navbar.product}</Link>
          <Link href="/whoweare" rel="noreferrer">{t.navbar.weare}</Link>
          <Link href="/talktoyou" rel="noreferrer">{t.navbar.talk}</Link>
          <Link href="/contactus" rel="noreferrer">{t.navbar.contact}</Link>
          <ChangeLangButton onClick={() => changeLanguage('th')}>{t.navbar.btnTH}</ChangeLangButton>
          <SpaceButton>|</SpaceButton>
          <ChangeLangButton onClick={() => changeLanguage('en')}>{t.navbar.btnEN}</ChangeLangButton>
        </NavLink>
      </Nav>
      {menu &&
        <LinkContainer>
          <Link href="/product" rel="noreferrer">{t.navbar.product}</Link>
          <Link href="/whoweare" rel="noreferrer">{t.navbar.weare}</Link>
          <Link href="/talktoyou" rel="noreferrer">{t.navbar.talk}</Link>
          <Link href="/contactus" rel="noreferrer">{t.navbar.contact}</Link>
        </LinkContainer>
      }
    </>
  );
}

export default memo(NavBar);