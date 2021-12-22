import { memo, useContext, useEffect, useState } from "react";
import Image from 'next/image';
import styled from '@emotion/styled';
import logo from '../../public/assets/images/amornyont-logo.png'
import logoMB from '../../public/assets/images/amornyont-logo-mb.png'
import icon from '../../public/assets/icons/menu.png'
import { useRouter } from "next/router";
import Link from 'next/link'
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

const LinkA = styled.a`
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

const HotLineContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  margin-right: 16px;
  ${mq[2]} {
    display: none;
  }
`
const HotLineText = styled.div`
  font-size: 12px;
  line-height: 20px;
  color: #4F5450;
  text-decoration: none;
`
const HotLineTextB = styled.div`
font-size: 12px;
font-weight: 600;
line-height: 20px;
color: #4F5450;
`

const NavBar = () => {
  const [menu, setMenu] = useState<boolean>(false);
  const router = useRouter();
  const { locale, query } = router;
  const t = locale === 'en' ? en : th;

  const changeLanguageEN = () => {
    const locale = 'en';
    if (query.slug !== undefined && router.pathname.search('[slug]')) {
      const result_path = router.pathname.substring(0, router.pathname.length - 6);
      const path = result_path + query.slug
      router.push(path, path, { locale: 'en' })
    } else {
      const path = router.pathname
      router.push(path, path, { locale: 'en' })
    }
  }

  const changeLanguageTH = () => {
    const locale = 'th';
    if (query.slug !== undefined && router.pathname.search('[slug]')) {
      const result_path = router.pathname.substring(0, router.pathname.length - 6);
      const path = result_path + query.slug
      router.push(path, path, { locale: 'th' })
    } else {
      const path = router.pathname
      router.push(path, path, { locale: 'th' })

    }
  }

  const goTo = (path: string) => {
    setMenu(false);
    router.push(path)
    router.push(path, path, { locale: locale })
  }
  return (
    <>
      <Nav>
        <NavHeader>
          <Link href="/" locale={locale}>
            <LinkA className="d-block d-lg-none">
              <Image
                alt="logo"
                src={logoMB}
                quality={100}
                placeholder="blur"
                width={57}
                height={37}
              />
            </LinkA>
          </Link>
          <Link href="/" locale={locale}>
            <LinkA className="d-none d-lg-block">
              <Image
                alt="logo"
                src={logo}
                quality={100}
                placeholder="blur"
                width={194}
                height={26}
              />
            </LinkA>
          </Link>
        </NavHeader>
        <HotLineContainer><HotLineTextB>HOTLINE</HotLineTextB><HotLineText>02-224-2247</HotLineText></HotLineContainer>
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
          <Link href="/product" locale={locale}><LinkA className={router.pathname === '/product' ? "active" : 'link'}>{t.navbar.product}</LinkA></Link>
          <Link href="/whoweare" locale={locale}><LinkA className={router.pathname === '/whoweare' ? "active" : 'link'}>{t.navbar.weare}</LinkA></Link>
          <Link href="/talktoyou" locale={locale}><LinkA className={router.pathname === '/talktoyou' ? "active" : 'link'}>{t.navbar.talk}</LinkA></Link>
          <Link href="/contactus" locale={locale}><LinkA className={router.pathname === '/contactus' ? "active" : 'link'}>{t.navbar.contact}</LinkA></Link>
          <ChangeLangButton className={locale !== 'en' ? "active" : 'link'} onClick={() => changeLanguageTH()}>{t.navbar.btnTH}</ChangeLangButton>
          <SpaceButton>|</SpaceButton>
          <ChangeLangButton className={locale === 'en' ? "active" : 'link'} onClick={() => changeLanguageEN()}>{t.navbar.btnEN}</ChangeLangButton>
        </NavLink>
      </Nav>
      {menu &&
        <LinkContainer>
          <div onClick={() => goTo("/product")} ><LinkA className={router.pathname === '/product' ? "active" : 'link'}>{t.navbar.product}</LinkA></div>
          <div onClick={() => goTo("/whoweare")} ><LinkA className={router.pathname === '/whoweare' ? "active" : 'link'}>{t.navbar.weare}</LinkA></div>
          <div onClick={() => goTo("/talktoyou")} ><LinkA className={router.pathname === '/talktoyou' ? "active" : 'link'}>{t.navbar.talk}</LinkA></div>
          <div onClick={() => goTo("/contactus")} ><LinkA className={router.pathname === '/contactus' ? "active" : 'link'}>{t.navbar.contact}</LinkA></div>
        </LinkContainer>
      }
    </>
  );
}

export default memo(NavBar);