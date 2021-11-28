import { memo } from "react";
import styled from '@emotion/styled';

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
  font-size: 22px;
  line-height: 36px;
  font-weight: 600;
  color: #000000;
  margin-block-start: 1em;
  margin-block-end: 1em;
  ${mq[3]} {
    font-size: 30px;
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
  return (
    <>
      <H5>Amornyont Limited Part</H5>
      <AddressContainer>
        <AddressContext>
          <AddressRow><AdresssTitle>Address:</AdresssTitle><Desc>1506 Krungkasem Road, Pom Prap, Pom Prap Sattru Phai, Bangkok 10100, Thailand.</Desc></AddressRow>
          <AddressRow><AdresssTitle>Line ID:</AdresssTitle><Desc>@amornyont</Desc></AddressRow>
          <AddressRow><AdresssTitle>Tel:</AdresssTitle><Desc>02-224-2247</Desc></AddressRow>
          <AddressRow><AdresssTitle>Fax:</AdresssTitle><Desc>02-224-2433</Desc></AddressRow>
          <AddressRow><AdresssTitle>Email:</AdresssTitle><Desc>sales@amornyont.com</Desc></AddressRow>
        </AddressContext>
      </AddressContainer>
    </>
  );
}

export default memo(Address);