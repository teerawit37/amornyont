import type { NextPage } from 'next'
import styled from '@emotion/styled';
import { TalkBanner } from '../../components/PageBanner';
import { Address } from '../../components/Address';
import blogData from '../../data/blog.json';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import en from '../../public/locales/en';
import th from '../../public/locales/th';

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
  background-color: white;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #D3D4D3;
  ${mq[3]} {
    height: 451px;
    }
`

const Readmore = styled.a`
  font-size: 16px;
  line-height: 24px;
  color: #008837;
  text-decoration: none;
`

const Card = styled.div`
  height: 589px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
  border-radius: 6px;
  background-color: white;
  width: 100%;
  border: 1px solid white;
  margin-top: 16px;
  overflow: hidden;
`
const DivContainer = styled.div`
  display: flex;
  margin-top: -46px;
  z-index: 80;
  flex: 1;
`

const Img = styled.img`
  width: 100%;
  height: 415px;
`

const ContentContainer = styled.div`
  padding: 16px;
  width: 100%;
  height: 172px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export interface MyComponentProps {
  id: string;
  title: string;
  subtitle: string;
  paragraph1: string;
  paragraph2: string;
  paragraph3: string;
  paragraph4: string;
}

const TalkToYou: NextPage = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : th
  const [blog, setBlog] = useState<MyComponentProps[]>([]);
  useEffect(() => {
    if (blogData) {
      setBlog(blogData.data);
    }
  }, [blog]);

  return (
    <>
      <TalkBanner text={t.navbar.talk} />
      <div className="container">
        <div className="d-flex w-100">
          <DivContainer className="row">
            {blog.map((item, index) => (
              <div key={index} className="col-12 col-lg-6">
                <Card>
                  <Img
                    alt={`${item.id}`}
                    src={`/assets/images/blogs/${item.id}/cover.jpg`}
                  />
                  <ContentContainer>
                    <div>
                      <div>title</div>
                      <div>subtitle</div>
                    </div>
                    <Readmore href={`/talktoyou/${item.id}`}>Read more</Readmore>
                  </ContentContainer>
                </Card>
              </div>
            ))}
          </DivContainer>
        </div>
      </div>
      <AddressSection>
        <div className="container">
          <Container>
            <Address />
          </Container>
        </div>
      </AddressSection>
    </>
  )
}

export default TalkToYou
