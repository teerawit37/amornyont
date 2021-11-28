import { memo } from "react";
import styled from '@emotion/styled';
import Image from 'next/image';
import who1 from '../../public/assets/images/who-1.png';
import who2 from '../../public/assets/images/who-2.png'

const breakpoints = [375, 768, 1024, 1440]

const mq = breakpoints.map(
  bp => `@media (min-width: ${bp}px)`
)

const ContentContainer = styled.div`
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
  ${mq[1]} {
    padding: 32px;
    }
  ${mq[3]} {
    padding: 40px 32px;
    }
`
const SubTitle = styled.div`
  font-size: 14px;
  line-height: 22px;
  color: #232924;
  width: 100%;
  text-align: left;
  margin-bottom: 45px;
  ${mq[2]} {
    text-align: center;
    }
  ${mq[3]} {
    width: 901px;
    text-align: center;
    }
`

const Title = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-align: left;
  color: #000000;
  margin-bottom: 8px;
  ${mq[3]} {
    text-align: center;
    }
  ${mq[3]} {
    width: 901px;
    text-align: center;
    }
`

const TextContent = styled.div`
  font-size: 14px;
  line-height: 22px;
  color: #232924;
  margin-bottom: 40px;
`

const ImageContent1 = styled.div`
  width: 100%;
  margin-bottom: 40px;
`

const ImageContent2 = styled.div`
  width: 100%;
  margin-bottom: 40px;
`

const WhoContent = () => {
  return (
    <div className="container">
      <div className="d-flex">
      <ContentContainer>
        <Title>Mitsuboshi Premier Distributor opened the brand-new website.</Title>
        <SubTitle>{`We, AMORNYONT, are delighted to present our partner and customer a brand-new website - www.amornyont.com - as a new channel of communication. Please feel free to browse and don't hesitate to let us . . .`}</SubTitle>
        <div className="row">
          <div className="col-12 col-lg-6">
            <ImageContent1>
              <Image
                alt="hero-bg-1"
                src={who1}
                placeholder="blur"
                layout="responsive"
                objectFit="cover"
                quality={100}
              />
            </ImageContent1>
          </div>
          <div className="col-12 col-lg-6">
            <TextContent>Use wide color to enhance the visual experience on compatible displays. Wide color displays support a P3 color space, which can produce richer, more saturated colors than sRGB. As a result, photos and videos that use wide color are more lifelike, and visual data and status indicators that use wide color are more impactful. When appropriate, use the Display P3 color profile at 16 bits per pixel (per channel) and export images in PNG format. Note that a wide color display is needed to design wide color images and select P3 colors.</TextContent>
            <TextContent>Provide color space-specific image and color variations when the experience calls for it. In general, P3 colors and images tend to appear as expected on sRGB devices. Occasionally, however, it may be hard to differentiate between two very similar P3 colors when they’re viewed in sRGB. Gradients that use colors in the P3 spectrum can also sometimes appear clipped on sRGB devices. To avoid these issues, you can provide distinct images and colors in the asset catalog of your Xcode project to ensure visual fidelity on both wide color and sRGB devices.</TextContent>
          </div>
          <div className="col-12">
            <ImageContent2>
              <Image
                alt="hero-bg-2"
                src={who2}
                placeholder="blur"
                layout="responsive"
                objectFit="cover"
                quality={100}
              />
            </ImageContent2>
          </div>
          <div className="col-12">
            <TextContent>Use wide color to enhance the visual experience on compatible displays. Wide color displays support a P3 color space, which can produce richer, more saturated colors than sRGB. As a result, photos and videos that use wide color are more lifelike, and visual data and status indicators that use wide color are more impactful. When appropriate, use the Display P3 color profile at 16 bits per pixel (per channel) and export images in PNG format. Note that a wide color display is needed to design wide color images and select P3 colors.</TextContent>
            <TextContent>Provide color space-specific image and color variations when the experience calls for it. In general, P3 colors and images tend to appear as expected on sRGB devices. Occasionally, however, it may be hard to differentiate between two very similar P3 colors when they’re viewed in sRGB. Gradients that use colors in the P3 spectrum can also sometimes appear clipped on sRGB devices. To avoid these issues, you can provide distinct images and colors in the asset catalog of your Xcode project to ensure visual fidelity on both wide color and sRGB devices.</TextContent>
          </div>
        </div>
      </ContentContainer>
      </div>
    </div>
  );
}

export default memo(WhoContent);