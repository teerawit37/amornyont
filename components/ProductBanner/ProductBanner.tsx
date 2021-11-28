import { memo } from "react";
import styled from '@emotion/styled';
import Image from 'next/image';
import productbanner from '../../public/assets/images/product-banner-1.png'

const breakpoints = [375, 768, 1024, 1440]

const mq = breakpoints.map(
  bp => `@media (min-width: ${bp}px)`
)

const BannerContainer = styled.div`
  display: flex;
  height: 158px;
  width: 100vw;
  position: relative;
  ${mq[3]} {
    height: 184px;
  }
`
const BG = styled.div`
  position: relative;
  height: 100%;
  width: 100vw;
  overflow: hidden;
  z-index: 1;
`
const TextHeroSection = styled.div`
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TextHero = styled.div`
  font-size: 32px;
  line-height: 40px;
  text-align: center;
  font-weight: 600;
  color: white;
  ${mq[3]} {
    font-size: 68px;
    line-height: 76px;
    }
`

const TextDesc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 400;
  color: white;
  ${mq[3]} {
    font-size: 20px;
    }
`


const ProductBanner = () => {
  return (
    <>
      <BannerContainer>
        <BG>
          <Image
            alt="product-banner"
            src={productbanner}
            placeholder="blur"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />
        </BG>
        <TextHeroSection>
          <TextHero>
            PRODUCTS
          </TextHero>
          <TextDesc>วางใจเมื่อไปด้วยสายพานมิตซูโบชิ</TextDesc>
        </TextHeroSection>
      </BannerContainer>
    </>
  );
}

export default memo(ProductBanner);