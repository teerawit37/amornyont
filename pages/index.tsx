import type { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import en from '../public/locales/en';
import th from '../public/locales/th';
import styles from '../styles/Home.module.css'
import styled from '@emotion/styled';
import { Address } from '../components/Address';
import { Order } from '../components/Order';
import Image from 'next/image';
import herobg1 from '../public/assets/images/bg-hero-1.png'
import herobg2 from '../public/assets/images/bg-hero-2.png'
import icon1 from '../public/assets/icons/best-choice.png'
import icon2 from '../public/assets/icons/services.png'
import icon3 from '../public/assets/icons/product.png'
import amornyontcolor from '../public/assets/images/amornyont-color.png'
import amornyontwhite from '../public/assets/images/amornyont-logo-white.png'
import mitsuboshicolor from '../public/assets/images/mitsuboshi-color.png'
import union from '../public/assets/images/union.png'
import { ProductBanner } from '../components/ProductBanner';
import { ProductCate } from '../components/ProductCate';
import { Overlay } from '../components/Overlay';
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

const HeroSection = styled.section`
  display: flex;
  height: 612px;
  width: 100vw;
  ${mq[1]} {
    height: 600px;
    }
  ${mq[3]} {
    height: 800px;
    }
`
const HeroBG = styled.div`
  position: relative;
  height: 100%;
  width: 100vw;
  overflow: hidden;
  z-index: 1;
`

const WhySection = styled.section`
  display: flex;
  height: 612px;
  width: 100%;
  ${mq[1]} {
    height: 600px;
    }
  ${mq[3]} {
    height: 800px;
    }
`

const ProductSection = styled.section`
  display: flex;
  flex-direction: column;
  height: 1018px;
  width: 100%;
  ${mq[1]} {
    height: 652px;
    }
  ${mq[3]} {
    height: 758px;
    }
`
const ProductLogo = styled.div`
  display: flex;
  height: 100%;
  width: 231px;
  padding: 24px 0;
  justify-content: space-between;
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
const HeroShowCase = styled.div`
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;
  color: white;
  ${mq[3]} {
    font-size: 46px;
    }
`
const LogoWhite = styled.div`
  width: 95px;
  height: 79px;
  margin-bottom: 24px;
  ${mq[3]} {
    width: 144px;
    height: 92px;
    }
`
const AbsoluteContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`
const TextHero = styled.div`
  font-size: 32px;
  text-align: center;
  font-weight: 600;
  color: white;
  line-height: 40px;  
  ${mq[3]} {
    font-size: 68px;
    line-height: 76px;
    }  
`
const TextHeroSub = styled.div`
  font-size: 20px;
  text-align: center;
  color: white;
  line-height: 28px;
`

const TextHeroDesc = styled.div`
  font-size: 16px;
  text-align: center;
  color: white;
  line-height: 24px;
  max-width: 343px; 
  margin-top: 16px;
  ${mq[1]} {
    max-width: 568px;
    }
  ${mq[3]} {
    max-width: 670px;
    }
`

const WhyUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 57px;
  ${mq[2]} {
    flex-direction: row;
    justify-content: space-between;
    }
`

const WhyItemContainer = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: start;
  max-width: 305px;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  ${mq[1]} {
    max-width: 428px;
    }
  ${mq[2]} {
    flex-direction: column;
    text-align: center;
    max-width: 298px;
    }
`
const TextBlock = styled.div`
  display: flex;
  flex:1;
  flex-direction: column;
  margin-left: 16px;
  ${mq[2]} {
    margin-top: 24px;
    margin-left: 0px;
  }
`
const WhyTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  text-align: start;
  ${mq[1]} {
    font-size: 24px;
    line-height: 32px;
    }
  ${mq[2]} {
    text-align: center;
    }
`
const IconWhite = styled.div`
  width: 80px;
  height: 80px;
  ${mq[2]} {
    width: 120px;
    height: 120px;
    }
`

const Button = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;  
  padding: 9px 16px;
  background: #008837;
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;
  cursor: pointer;
  margin-top: 32px;
  border-radius: 6px;
`
const AddressImage = styled.div`
  position: absolute;
  bottom: -5px;
  right: 0%;
  ${mq[3]} {
    right: 10%;
    }
`

const Home: NextPage = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : th

  const handleClick = (path: string) => {
    router.push(path)
  }
  return (
    <>
      <HeroSection>
        <HeroBG>
          <Overlay />
          <Image
            alt="hero-bg-1"
            src={herobg1}
            placeholder="blur"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <HeroShowCase>
            <AbsoluteContainer>
              <LogoWhite>
                <Image
                  alt="logo-white"
                  src={amornyontwhite}
                  placeholder="blur"
                  layout="responsive"
                  objectFit="cover"
                  quality={100}
                />
              </LogoWhite>
              <TextHero>{t.home.heroTitle1}</TextHero>
              <TextHero>{t.home.heroTitle2}</TextHero>
              <TextHeroDesc>{t.home.heroDesc}</TextHeroDesc>
              <Button onClick={() => handleClick('/product')}>{t.home.btnSeeHow}</Button>
            </AbsoluteContainer>
          </HeroShowCase>
        </HeroBG>
      </HeroSection>
      <WhySection>
        <HeroBG>
          <Overlay />
          <Image
            alt="hero-bg-2"
            src={herobg2}
            placeholder="blur"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <HeroShowCase>
            <AbsoluteContainer>
              <TextHero>WHY US</TextHero>
              <TextHeroSub>ครบ...ทุกเรื่องสายพาน</TextHeroSub>
              <div className="container">
                <WhyUsContainer>
                  <WhyItemContainer>
                    <IconWhite>
                      <Image
                        alt="logo-white"
                        src={icon1}
                        placeholder="blur"
                        layout="responsive"
                        objectFit="cover"
                        quality={100}
                      />
                    </IconWhite>
                    <TextBlock>
                      <WhyTitle>Assured Quality</WhyTitle>
                      <div className="d-block d-sm-none">สายพานมิตซูโบชิ คุณภาพญี่ปุ่น เทคโนโลยีสูง อึด ทน การันตีโดยผู้ใช้จริง</div>
                      <div className="d-none d-sm-block">สายพานมิตซูโบชิ คุณภาพญี่ปุ่น เทคโนโลยีสูง อึด ทน การันตีโดยผู้ใช้จริง</div>
                    </TextBlock>
                  </WhyItemContainer>
                  <WhyItemContainer>
                    <IconWhite>
                      <Image
                        alt="logo-white"
                        src={icon2}
                        placeholder="blur"
                        layout="responsive"
                        objectFit="cover"
                        quality={100}
                      />
                    </IconWhite>
                    <TextBlock>
                      <WhyTitle>Customer Care</WhyTitle>
                      <div className="d-block d-sm-none">บริการข้อมูลสายพาน จัดเตรียมสินค้าถูกต้องแม่นยำ พร้อมบริการหลังการขาย</div>
                      <div className="d-none d-sm-block">บริการข้อมูลสายพาน จัดเตรียมสินค้าถูกต้องแม่นยำ พร้อมบริการหลังการขาย</div>
                    </TextBlock>
                  </WhyItemContainer>
                  <WhyItemContainer>
                    <IconWhite>
                      <Image
                        alt="logo-white"
                        src={icon3}
                        placeholder="blur"
                        layout="responsive"
                        objectFit="cover"
                        quality={100}
                      />
                    </IconWhite>
                    <TextBlock>
                      <WhyTitle>Variety of products</WhyTitle>
                      <div className="d-block d-sm-none">สายพานหลากหลาย ของครบ จบที่เดียว และบริการสั่งทำพิเศษ Made-to-Order</div>
                      <div className="d-none d-sm-block">สายพานหลากหลาย ของครบ จบที่เดียว และบริการสั่งทำพิเศษ Made-to-Order</div>
                    </TextBlock>
                  </WhyItemContainer>
                </WhyUsContainer>
              </div>
            </AbsoluteContainer>
          </HeroShowCase>
        </HeroBG>
      </WhySection>
      <ProductSection>
        <ProductBanner />
        <div className="container">
          <Container>
            <ProductLogo>
              <Image
                alt="amornyont-color"
                src={amornyontcolor}
                placeholder="blur"
                width={116}
                height={76}
                quality={100}
              />
              <Image
                alt="mitsuboshi-color"
                src={mitsuboshicolor}
                placeholder="blur"
                width={72}
                height={76}
                quality={100}
              />
            </ProductLogo>
            <ProductCate />
          </Container>
        </div>
      </ProductSection>
      <Order />
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
        <div className="container d-flex flex-column align-items-center">
          <Address />
        </div>
      </AddressSection>
    </>
  )
}

export default Home
