import { memo } from "react";
import styled from '@emotion/styled';
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
  max-width: 312px;
  background-color: #fff;
  position: relative;
  padding: 14px 16px;
  align-items: center;
  display: flex; 
  flex-direction: column;
  ${mq[1]} {
      width: 312px;
    }
  ${mq[2]} {
      width: 312px;
      padding: 14px 24px;
    }
    ${mq[3]} {
      width: 368px;
      max-width: 368px;
    }
`
const H5 = styled.h5`
  font-size: 20px;
  line-height: 36px;
  font-weight: 600;
  color: #000000;
  margin-block-start: 1em;
  margin-block-end: 1em;
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
          <AddressRow><AdresssTitle>{t.address.addressTitle}</AdresssTitle><Desc>{t.address.address}</Desc></AddressRow>
          <AddressRow><AdresssTitle>{t.address.lineTitle}</AdresssTitle><Desc>{t.address.line}</Desc></AddressRow>
          <AddressRow><AdresssTitle>{t.address.callTitle}</AdresssTitle><Desc>{t.address.call}</Desc></AddressRow>
          <AddressRow><AdresssTitle>{t.address.faxTitle}</AdresssTitle><Desc>{t.address.fax}</Desc></AddressRow>
          <AddressRow><AdresssTitle>{t.address.mailTitle}</AdresssTitle><Desc>{t.address.mail}</Desc></AddressRow>
        </AddressContext>
      </AddressContainer>
    </>
  );
}

export default memo(Address);