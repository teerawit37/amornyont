import { memo, useEffect, useState } from "react";
import styled from '@emotion/styled';
import Image from 'next/image';
import who1 from '../../public/assets/images/who-1.png';
import who2 from '../../public/assets/images/who-2.png';
import blogData from '../../data/blog.json';
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
  width: 100%;
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
    width: 901px;
    text-align: center;
    }
`

export interface MyComponentProps {
  id: string;
  title: string;
  titleTh: string;
  desc: string;
  descTh: string;
  content: string;
  contentTh: string;
}

const WhoContent = () => {
  const [blog, setBlog] = useState<MyComponentProps>();
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : th;

  const { slug } = router.query
  useEffect(() => {
    console.log(slug)
    if(slug !== undefined) {
    if (blogData) {
      const found = blogData.data.find(element => element.id === slug);
      setBlog(found);
    }
  }
  }, [slug]);
  return (
    <div className="container">
      <div className="d-flex">
        <ContentContainer>
          <Title>{locale === 'en' ? blog?.title : blog?.titleTh}</Title>
          <SubTitle>{locale === 'en' ? blog?.desc : blog?.descTh}</SubTitle>
          {blog !== undefined &&
            <div dangerouslySetInnerHTML={{
              __html: locale === 'en' ? blog.content : blog.contentTh
            }}></div>
          }
        </ContentContainer>
      </div>
    </div >
  );
}

export default memo(WhoContent);