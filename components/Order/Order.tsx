import { memo } from "react";
import styled from '@emotion/styled';
import Image from 'next/image';
import herobg3 from '../../public/assets/images/bg-hero-3.png';
import qrcode from '../../public/assets/images/qr-code.png';
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
const OrderSectionW = styled.section`
  display: flex;
  height: 367px;
  width: 100%;
  background: #F2F2F2;
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

const HeroShowCaseW = styled.div`
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;
  color: bloack;
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

const AddFriend = styled.div`
  font-size: 12px;
  line-height: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #000;
`

const AddFriendW = styled.div`
  font-size: 12px;
  line-height: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #fff;
`

const Img = styled.img`
  width: 44px;
  height: 44px;
  margin-right: 5px;
`
const Vi = styled.div`
  border-left: 1px solid #fff;
  height: 24px;
`

const ViB = styled.div`
  border-left: 1px solid #000;
  height: 24px;
`

const ViContainer = styled.div`
  position: absolute;
  left: 50%;
  right: 50%;
  top: 50%;
  bottom: 50%;
  transform: translate(-50%, -50%);
`

export interface MyComponentProps {
  page?: string;
}

const Order = ({
  page = 'home',
}: MyComponentProps) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : th;
  return (
    <>
      {page === 'home' ?
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
            <ViContainer className="d-none d-lg-block">
              <div className="d-flex flex-column align-items-center">
                <Vi />
                <div className="text-white am-p-5">{t.order.or}</div>
                <Vi />
              </div>
            </ViContainer>
            <HeroShowCase>
              <Title>{t.order.title}</Title>
              <div>{t.order.subtitle}</div>
              <div className="container mt-4">
                <div className="row">
                  <div className="d-none d-xl-block col-xl-2" />
                  <div className="d-none d-lg-block col-lg-2 col-xl-1" />
                  <div className="d-none d-lg-block col-lg-4 col-xl-3 text-center">
                    <Image
                      alt="qr-code"
                      src={qrcode}
                      placeholder="blur"
                      width={198}
                      height={198}
                      quality={100}
                    />
                    <div className="d-flex justify-content-center">
                      <AddFriendW>{t.order.addfriend}</AddFriendW>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6 col-xl-4">
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
                  <div className="d-none d-xl-block col-xl-2" />
                </div>
              </div>
            </HeroShowCase>
          </HeroBG>
        </OrderSection>
        :
        <OrderSectionW>
          <HeroBG>
            <HeroShowCaseW>
              <Title>{t.order.title}</Title>
              <div>{t.order.subtitle}</div>
              <div className="container mt-4">
                <div className="row">
                  <div className="d-none d-xl-block col-xl-2" />
                  <div className="d-none d-lg-block col-lg-2 col-xl-1" />
                  <div className="d-none d-lg-block col-lg-4 col-xl-3 text-center">
                    <Image
                      alt="qr-code"
                      src={qrcode}
                      placeholder="blur"
                      width={198}
                      height={198}
                      quality={100}
                    />
                    <ViContainer className="d-none d-lg-block">
                      <div className="d-flex flex-column align-items-center">
                        <ViB />
                        <div className="text-black am-p-5">{t.order.or}</div>
                        <ViB />
                      </div>
                    </ViContainer>
                    <div className="d-flex justify-content-center">
                      <AddFriend>{t.order.addfriend}</AddFriend>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6 col-xl-4">
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
                  <div className="d-none d-xl-block col-xl-2" />
                </div>
              </div>
            </HeroShowCaseW>
          </HeroBG>
        </OrderSectionW>
      }
    </>
  );
}

export default memo(Order);