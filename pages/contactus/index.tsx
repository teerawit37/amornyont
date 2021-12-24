import type { NextPage } from 'next'
import React, { SyntheticEvent, useEffect } from 'react';
import styled from '@emotion/styled';
import { ContactBanner } from '../../components/PageBanner';
import { Address } from '../../components/Address';
import Image from 'next/image';
import { useRouter } from 'next/router'
import en from '../../public/locales/en';
import th from '../../public/locales/th';
import map1 from '../../public/assets/images/map-1.png'
import map2 from '../../public/assets/images/map-2.png'
import map3 from '../../public/assets/images/map-3.png'
import union from '../../public/assets/images/union.png'
import ggmap from '../../public/assets/images/google-map-logo.png'
import emailjs from 'emailjs-com';
import { Modal } from 'react-bootstrap';


const breakpoints = [375, 768, 1024, 1440]

const mq = breakpoints.map(
  bp => `@media (min-width: ${bp}px)`
)

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const AddressSection = styled.section`
  display: flex;
  height: 367px;
  width: 100%;
  position: relative;
  background-color: white;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #D3D4D3;
  ${mq[3]} {
    height: 451px;
    }
`

const MapSection = styled.section`
  display: flex;
  height: 100%;
  width: 100%;
  position: relative;
  background-color: white;
  justify-content: center;
  align-items: center;
  padding: 48px 0px;
  border-bottom: 1px solid #D3D4D3;
  ${mq[3]} {
    height: 451px;
    }
`

const FormContainer = styled.div`
  background: #FFFFFF;
  border: 1px solid #F2F2F2;
  box-sizing: border-box;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
  border-radius: 6px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -30px;
  z-index: 80;
  width: 100%;
  ${mq[1]} {
    padding: 32px;
    }
  ${mq[3]} {
    padding: 40px 32px;
    }
`

const Form = styled.form`
width: 100%;
  ${mq[1]} {
    width: 434px;
    }
`

const Text = styled.div`
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  color: #7B7F7C;
  margin-bottom: 16px;
`

const AddressImage = styled.div`
  position: absolute;
  bottom: -5px;
  right: 0%;
  ${mq[3]} {
    right: 10%;
    }
`

const LoadContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

const TextA = styled.a`
  text-decoration: none;
  color: #000;
`
const Img = styled.img`
  width: 100%;
  height: 24px;
`
const TextLink = styled.div`
  font-size: 16px;
  margin-bottom: 24px;
  margin-top: 14px;
  ${mq[1]} {
    margin-bottom: 0px;
    }
`

const ContactUS: NextPage = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : th;
  const [valueName, setValueName] = React.useState<string>('');
  const [valueTel, setValueTel] = React.useState<string>('');
  const [valueEmail, setValueEmail] = React.useState<string>('');
  const [valueMessage, setValueMessage] = React.useState<string>('');
  const [isDisabled, setDisabled] = React.useState<boolean>(true);
  const [show, setShow] = React.useState<boolean>(false);

  const googleUrl = "https://www.google.co.th/maps/place/%E0%B8%AB%E0%B8%88%E0%B8%81.+%E0%B8%AD%E0%B8%A1%E0%B8%A3%E0%B8%A2%E0%B8%99%E0%B8%95%E0%B9%8C/@13.7446514,100.5136317,17z/data=!3m1!4b1!4m5!3m4!1s0x30e299299af0b4a5:0xff7a05d62a9f558f!8m2!3d13.7446462!4d100.5158204"

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function sendEmail(e: any) {
    e.preventDefault();
    emailjs.sendForm(
      "service_pfmt4sr",
      "template_coflrf9",
      e.target,
      "user_e2RwPXMJEygKPv4syxgz1"
    ).then(res => {
      router.push('/contactus/success', '/contactus/success', { locale })
    }).catch(err => console.log(err));
  }
  useEffect(() => {
    if (valueName !== '' && valueTel !== '' && valueEmail !== '' && valueMessage !== '') {
      setDisabled(false);
    }
  }, [valueName, valueTel, valueEmail, valueMessage])

  const handleChangeName = (event: any) => {
    setValueName(event.target.value);
  };

  const handleChangeTel = (event: any) => {
    setValueTel(event.target.value);
  };

  const handleChangeEmail = (event: any) => {
    setValueEmail(event.target.value);
  };

  const handleChangeMessage = (event: any) => {
    setValueMessage(event.target.value);
  };

  return (
    <>
      <ContactBanner text={t.contact.contact} />
      <div className="container">
        <div className="d-flex">
          <FormContainer>
            <div className="d-flex flex-column align-items-center">
              <Text>{t.contact.fill}</Text>
              <Form className="d-flex flex-column" onSubmit={sendEmail}>
                <input className="text-input" type="text" name="name" placeholder={t.contact.name} onChange={handleChangeName} />
                <input className="text-input" type="text" name="user_phone_number" placeholder={t.contact.call} onChange={handleChangeTel} />
                <input className="text-input" type="text" name="user_email" placeholder={t.contact.email} onChange={handleChangeEmail} />
                <textarea className="text-input-area" name="user_message" placeholder={t.contact.message} rows={4} onChange={handleChangeMessage} />
                <div className="d-flex justify-content-center w-100"><input disabled={isDisabled} className={`button ${isDisabled ? 'button-disabled' : ''}`} type="submit" value={t.contact.send} /></div>
              </Form>
            </div>
          </FormContainer>
        </div>
      </div >
      <MapSection>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="d-flex justify-content-center mb-2">
                <div>
                  <Img
                    alt="map-gg"
                    src='assets/images/google-map-logo.png'
                  />
                </div>
              </div>
              <a href={googleUrl} target="_blank" rel="noreferrer">
                <Image
                  alt="map-1"
                  src={map1}
                  placeholder="blur"
                  layout="responsive"
                  quality={100}
                />
              </a>
              <LoadContainer>
                <TextA href='/assets/images/map-1.png' download><TextLink>{t.contact.load}</TextLink></TextA>
              </LoadContainer>
            </div>
            <div className="col-12 col-md-6">
              <div className="d-flex justify-content-center mb-2">{t.contact.mapImg}</div>
              <div onClick={handleShow}>
                <Image
                  alt="map-2"
                  src={map2}
                  placeholder="blur"
                  layout="responsive"
                  quality={100}
                />
              </div>
              <LoadContainer>
                <TextA href='/assets/images/map-3.png' download><TextLink>{t.contact.load}</TextLink></TextA>
              </LoadContainer>
            </div>
          </div>
        </div>
      </MapSection>
      <AddressSection>
        <AddressImage className="d-none d-lg-block">
          <Image
            alt="hero-bg-3"
            src={union}
            placeholder="blur"
            width={490}
            height={243}
            quality={100}
          />
        </AddressImage>
        <div className="container">
          <Container>
            <Address />
          </Container>
        </div>
      </AddressSection>
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
  )
}

export default ContactUS
