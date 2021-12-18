import { memo } from "react";
import styled from '@emotion/styled';
import Image from 'next/image';
import herobg3 from '../../public/assets/images/bg-hero-3.png';
import en from '../../public/locales/en';
import th from '../../public/locales/th';
import { useRouter } from "next/router";

const breakpoints = [375, 768, 1024, 1440]

const mq = breakpoints.map(
  bp => `@media (min-width: ${bp}px)`
)

const OrderSection = styled.section`
  display: flex;
  height: 367px;
  width: 100%;
  background-color: black;
  // background: #F2F2F2;
  ${mq[3]} {
    height: 600px;
    }
`
const HeroBG = styled.div`
  position: relative;;
  height: 100%;
  width: 100vw;
  overflow: hidden;
  z-index: 1;
`

const HeroShowCase = styled.div`
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;
  color: white;
`

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 24px;
`

const ContactItem = styled.div`
  display: flex;
  margin-bottom: 16px;
  width: 100%;
  justify-content: center;
`
const Button = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 9px 16px;
  width: 100%;
  max-width: 282px;
  height: 44px;
  top: 267px;
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;
  background: #FFFFFF;
  border-radius: 6px;
  color: #008837;
  text-decoration: none;
`

const LineButton = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 9px 16px;
  width: 100%;
  max-width: 282px;
  height: 44px;
  top: 267px;
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;
  background: #06C755;
  border-radius: 6px;
  color: #fff;
  text-decoration: none;
`

const Title = styled.div`
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
`

const Img = styled.img`
  width: 44px;
  height: 44px;
  margin-right: 5px;
`

const Order = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : th;
  return (
    <>
      <OrderSection>
        <HeroBG>
          <Image
            alt="hero-bg-3"
            src={herobg3}
            placeholder="blur"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <HeroShowCase>
            <Title>{t.order.title}</Title>
            <div>{t.order.subtitle}</div>
            <div className="container">
              <ContactContainer>
                <ContactItem>
                  <Img
                    alt="line"
                    src="/assets/icons/line.png"
                  />
                  <LineButton href="http://line.me/ti/p/@amornyont">
                  {t.order.line}
                  </LineButton>
                </ContactItem>
                <ContactItem>
                  <Img
                    alt="call"
                    src="/assets/icons/call.png"
                  />
                  <Button href="tel:02-224-2247">
                  {t.order.call}
                  </Button> 
                </ContactItem>
                <ContactItem>
                  <Img
                    alt="mail"
                    src="/assets/icons/mail.png"
                  />
                    <Button href="mailto: sales@amornyont.com">
                    {t.order.mail}
                    </Button>
                </ContactItem>
              </ContactContainer>
            </div>
          </HeroShowCase>
        </HeroBG>
      </OrderSection>
    </>
  );
}

export default memo(Order);