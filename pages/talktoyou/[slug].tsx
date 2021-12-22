import type { NextPage } from 'next'
import styled from '@emotion/styled';
import { TalkSlugBanner } from '../../components/PageBanner';
import { Address } from '../../components/Address';
import { BlogContent } from '../../components/BlogContent';
import union from '../../public/assets/images/union.png'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import blogData from '../../data/blog.json';
import { useRouter } from "next/router";


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
  position: relative;
  background-color: white;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #D3D4D3;
  ${mq[3]} {
    height: 451px;
    }
`

const AddressImage = styled.div`
  position: absolute;
  bottom: -5px;
  right: 0%;
  ${mq[3]} {
    right: 10%;
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

const TalkToYou: NextPage = () => {
  const [blog, setBlog] = useState<MyComponentProps>();
  const router = useRouter();
  const { slug } = router.query
  useEffect(() => {
    if (slug !== undefined) {
      if (blogData) {
        const found = blogData.data.find(element => element.id === slug);
        setBlog(found);
      }
    }
  }, [slug]);
  return (
    <>
      <TalkSlugBanner text="" img={blog?.id as string} />
      <BlogContent />
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

export default TalkToYou
