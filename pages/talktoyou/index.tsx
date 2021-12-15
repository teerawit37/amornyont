import type { NextPage } from 'next'
import styled from '@emotion/styled';
import { TalkBanner } from '../../components/PageBanner';
import { Address } from '../../components/Address';
import blogData from '../../data/blog.json';
import { useEffect, useState } from 'react';

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
  ${mq[3]} {
    height: 451px;
    }
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
  const [blog, setBlog] = useState<MyComponentProps[]>([]);
    useEffect(() => {
        if (blogData) {
          setBlog(blogData.data);
        }
    }, [blog]);

  return (
    <>
      <TalkBanner text="TALK TO YOU" />
      {blog.map((item, index) => (
        <a key={index} href={`/talktoyou/${item.id}`}>{item.id}</a>
      ))}
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
