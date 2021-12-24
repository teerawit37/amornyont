import { memo, useState } from "react";
import styled from '@emotion/styled';
import Image from 'next/image';
import union from '../../public/assets/images/union.png';
import map3 from '../../public/assets/images/map-3.png'
import { useRouter } from "next/router";
import en from '../../public/locales/en';
import th from '../../public/locales/th';
import { Modal } from 'react-bootstrap';

const breakpoints = [375, 768, 1024, 1440]

const mq = breakpoints.map(
  bp => `@media (min-width: ${bp}px)`
)

const AddressContainer = styled.div`
  height: 100%;
  width: 100%;
  max-width: 322px;
  position: relative;
  padding: 14px 0px;
  align-items: center;
  display: flex; 
  flex-direction: column;
  ${mq[1]} {
      width: 100%;
      padding: 14px 16px;
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
  margin-bottom: 8px;
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
  flex-direction: column;
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

const LinkMap = styled.a`
  text-decoration: none;
  cursor: pointer;
`
const Vi = styled.div`
  border-left: 1px solid #F2F2F2;
  height: 12px;
  margin-left: 10px;
  margin-right: 10px;
`

const Address = () => {
  const router = useRouter();
  const { locale } = router;
  const googleUrl = "https://www.google.co.th/maps/place/%E0%B8%AB%E0%B8%88%E0%B8%81.+%E0%B8%AD%E0%B8%A1%E0%B8%A3%E0%B8%A2%E0%B8%99%E0%B8%95%E0%B9%8C/@13.7446514,100.5136317,17z/data=!3m1!4b1!4m5!3m4!1s0x30e299299af0b4a5:0xff7a05d62a9f558f!8m2!3d13.7446462!4d100.5158204"
  const t = locale === 'en' ? en : th;
  const [show, setShow] = useState<boolean>(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
            <Desc>
              <div>{t.address.address}</div>
              <div className="d-flex align-items-center">
                <LinkMap href={googleUrl} target="_blank">Google Map</LinkMap>
                <Vi />
                <LinkMap onClick={handleShow} >Image Map</LinkMap>
                </div>
            </Desc>
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
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Body>
          <Image
            alt="map-3"
            src={map3}
            placeholder="blur"
            layout="responsive"
            quality={100}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default memo(Address);