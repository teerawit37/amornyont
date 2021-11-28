import { memo } from "react";
import Image from 'next/image';
import contactus from '../../public/assets/images/banner/contact-banner.png'
import styled from "@emotion/styled";

const breakpoints = [375, 768, 1024, 1440]

const mq = breakpoints.map(
  bp => `@media (min-width: ${bp}px)`
)

const BannerSection = styled.section`
  display: flex;
  height: 220px;
  width: 100vw;
  position: relative;
  ${mq[3]} {
    height: 400px;
    }
`

const Banner = styled.div`
  position: relative;;
  height: 100%;
  width: 100vw;
  overflow: hidden;
  z-index: 1;
`

const TextHero = styled.div`
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 32px;
  width: 100%;
  text-align: center;
  font-weight: 600;
  color: white;
  ${mq[3]} {
    font-size: 68px;
    }
`
type BannerProps = { text: string };

const ContactBanner = ({ text }: BannerProps) => {
  return (
    <BannerSection>
      <Banner>
        <Image
          alt="banner"
          src={contactus}
          placeholder="blur"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </Banner>
      <TextHero>
        {text}
      </TextHero>
    </BannerSection>
  );
}

export default memo(ContactBanner);