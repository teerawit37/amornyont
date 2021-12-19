import type { NextPage } from 'next'
import styled from '@emotion/styled';
import { TalkBanner } from '../../components/PageBanner';
import { Address } from '../../components/Address';
import { BlogContent } from '../../components/BlogContent';


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

const TalkToYou: NextPage = () => {
  return (
    <>
      <TalkBanner text="" />
      {/* <BlogContent /> */}
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
