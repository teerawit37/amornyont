import type { NextPage } from 'next'
import React, { SyntheticEvent, useEffect } from 'react';
import styled from '@emotion/styled';
import { ContactBanner } from '../../components/PageBanner';
import { Address } from '../../components/Address';
import union from '../../public/assets/images/union.png'
import Image from 'next/image';
import { useRouter } from 'next/router'
import en from '../../public/locales/en';
import th from '../../public/locales/th';
import emailjs from 'emailjs-com';


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
  postion: relative;
  background-color: white;
  justify-content: center;
  align-items: center;
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

const ContactUS: NextPage = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : th;
  const [valueName, setValueName] = React.useState<string>('');
  const [valueTel, setValueTel] = React.useState<string>('');
  const [valueEmail, setValueEmail] = React.useState<string>('');
  const [valueMessage, setValueMessage] = React.useState<string>('');
  const [isDisabled, setDisabled] = React.useState<boolean>(true);

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
    if(valueName !== '' && valueTel !== '' && valueEmail !== '' && valueMessage !== ''){
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
      <ContactBanner text={t.navbar.contact} />
      <div className="container">
      <div className="d-flex">
        <FormContainer>      
          <div className="d-flex flex-column align-items-center">
          <Text>Please fill out the information correctly.</Text>
          <Form className="d-flex flex-column" onSubmit={sendEmail}>
            <input className="text-input" type="text" name="name" placeholder="Name" onChange={handleChangeName}/>
            <input className="text-input" type="text" name="user_phone_number" placeholder="Phone number" onChange={handleChangeTel}/>
            <input className="text-input" type="text" name="user_email" placeholder="Email" onChange={handleChangeEmail}/>
            <textarea className="text-input-area" name="user_message" placeholder="Message" rows={4} onChange={handleChangeMessage}/>
            <div className="d-flex justify-content-center w-100"><input disabled={isDisabled} className={`button ${isDisabled ? 'button-disabled' : ''}`} type="submit" value="Send your message" /></div>
          </Form>
          </div>
        </FormContainer>
      </div>
    </div >
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
    </>
  )
}

export default ContactUS
