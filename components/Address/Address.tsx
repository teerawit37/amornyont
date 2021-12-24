import { memo } from "react";
import styled from '@emotion/styled';
import Image from 'next/image';
import union from '../../public/assets/images/union.png';
import { useRouter } from "next/router";
import en from '../../public/locales/en';
import th from '../../public/locales/th';

const breakpoints = [375, 768, 1024, 1440]

const mq = breakpoints.map(
  bp => `@media (min-width: ${bp}px)`
)

const AddressContainer = styled.div`
  height: 100%;
  width: 100%;
  max-width: 322px;
  position: relative;
  padding: 14px 16px;
  align-items: center;
  display: flex; 
  flex-direction: column;
  ${mq[1]} {
      width: 100%;
      max-width: 350px;
    }
  ${mq[2]} {
      width: 100%;
      max-width: 400px;
      padding: 14px 24px;
    }
`
const H5 = styled.h5`
  font-size: 20px;
  line-height: 36px;
  font-weight: 600;
  color: #000000;
  margin-block-start: 1em;
  margin-block-end: 1em;
  text-align: center;
  ${mq[3]} {
    font-size: 28px;
    }
`

const AddressContext = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const AddressRow = styled.div`
  display: flex;
`
const AdresssTitle = styled.div`
  display: flex;
  flex: 1;
  color: #008837;
  font-size: 14px;
  font-weight: 600;
`

const Desc = styled.div`
  display: flex;
  flex: 2;
  color: #232924;
  font-size: 14px;
  text-decoration: none;
`

const Img = styled.img`
  width: 16px;
  height: 16px;
  margin-top: 2px;
  margin-right: 10px;
`
const TitleContain = styled.div`
  display: flex;
  flex: 1;
`


const Address = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : th;
  return (
    <>
      <H5>{t.address.title}</H5>
      <AddressContainer>
        <AddressContext>
          <AddressRow>
            <TitleContain>
              <Img
                alt="pin"
                src="/assets/icons/pin_green.png"
              />
              <AdresssTitle>{t.address.addressTitle}</AdresssTitle>
            </TitleContain>
            <Desc>{t.address.address}</Desc>
          </AddressRow>
          <AddressRow>
            <TitleContain>
              <Img
                alt="line"
                src="/assets/icons/line_green.png"
              />
              <AdresssTitle>{t.address.lineTitle}</AdresssTitle>
            </TitleContain>
            <Desc>{t.address.line}</Desc>
          </AddressRow>
          <AddressRow>
            <TitleContain>
              <Img
                alt="call"
                src="/assets/icons/call_green.png"
              />
              <AdresssTitle>{t.address.callTitle}</AdresssTitle>
            </TitleContain>
            <Desc>{t.address.call}</Desc>
          </AddressRow>
          <AddressRow>
            <TitleContain>
              <Img
                alt="fax"
                src="/assets/icons/fax_green.png"
              />
              <AdresssTitle>{t.address.faxTitle}</AdresssTitle>
            </TitleContain>
            <Desc>{t.address.fax}</Desc>
          </AddressRow>
          <AddressRow>
            <TitleContain>
              <Img
                alt="mail"
                src="/assets/icons/mail_green.png"
              />
              <AdresssTitle>{t.address.mailTitle}</AdresssTitle>
            </TitleContain>
            <Desc>{t.address.mail}</Desc>
          </AddressRow>
        </AddressContext>
      </AddressContainer>
    </>
  );
}

export default memo(Address);