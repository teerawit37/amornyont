import { memo } from "react";
import styled from '@emotion/styled';
import { useRouter } from "next/router";
import en from '../../public/locales/en';
import th from '../../public/locales/th';

const breakpoints = [375, 768, 1024, 1440]

const mq = breakpoints.map(
    bp => `@media (min-width: ${bp}px)`
)

const FooterContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: #fff;
  position: relative;
  padding: 14px 16px;
  align-items: center;
  display: flex;
  flex-direction: column;
  border-top: 1px solid #D3D4D3;
  ${mq[2]} {
    padding: 14px 24px;
    }
`

const FooterLink = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: 16px;
  ${mq[1]} {
   flex-direction: row;
  }
`

const Link = styled.a`
  display: inline-block;
  padding: 13px 10px 13px 10px;
  text-decoration: none;
  color: #000;
  text-align: center;
`
const Copyright = styled.div`
  display: inline-block;
  padding: 13px 10px 13px 10px;
  text-decoration: none;
  color: #7B7F7C;
  text-align: center;
  font-size: 12px;

`

const Footer = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : th;
    return (
        <>
            <FooterContainer>
                <FooterLink>
                    <Link href="" target="_blank" rel="noreferrer">{t.footer.product}</Link>
                    <Link href="" target="_blank" rel="noreferrer">{t.footer.weare}</Link>
                    <Link href="" target="_blank" rel="noreferrer">{t.footer.talk}</Link>
                    <Link href="" target="_blank" rel="noreferrer">{t.footer.contact}</Link>
                </FooterLink>
                <Copyright>
                  {t.footer.copyright}
                </Copyright>
            </FooterContainer>
        </>
    );
}

export default memo(Footer);