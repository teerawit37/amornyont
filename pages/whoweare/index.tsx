import type { NextPage } from 'next'
import styled from '@emotion/styled';
import { WhoBanner } from '../../components/PageBanner';
import { Address } from '../../components/Address';
import { WhoContent } from '../../components/WhoContent';
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

const WhoWeAre: NextPage = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : th
  return (
    <>
      <WhoBanner text={t.navbar.weare} />
      <WhoContent />
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

export default WhoWeAre
