import { memo } from "react";
import styled from '@emotion/styled';
import Image from 'next/image';
import who1 from '../../public/assets/images/who-1.png';
import who2 from '../../public/assets/images/who-2.png';
import { useRouter } from "next/router";
import en from '../../public/locales/en';
import th from '../../public/locales/th';


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

const BlockContent = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : th;
  return (
    <div className="container">
      <div className="d-flex">
        <ContentContainer>
          <Title>{t.whoweare.title}</Title>
          <SubTitle>{t.whoweare.subtitle}</SubTitle>
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
              <TextContent>
                <div dangerouslySetInnerHTML={{
                  __html: t.whoweare.p1
                }}></div>
              </TextContent>
              <TextContent>
                <div dangerouslySetInnerHTML={{
                  __html: t.whoweare.p2
                }}></div>
              </TextContent>
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
              <TextContent>
                <div dangerouslySetInnerHTML={{
                  __html: t.whoweare.p3
                }}></div>
              </TextContent>
              <TextContent>
                <div dangerouslySetInnerHTML={{
                  __html: t.whoweare.p4
                }}></div>
              </TextContent>
            </div>
          </div>
        </ContentContainer>
      </div>
    </div>
  );
}

export default memo(BlockContent);