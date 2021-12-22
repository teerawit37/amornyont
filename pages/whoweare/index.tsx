import type { NextPage } from 'next'
import styled from '@emotion/styled';
import { WhoBanner } from '../../components/PageBanner';
import { Address } from '../../components/Address';
import { WhoContent } from '../../components/WhoContent';
import { useRouter } from 'next/router'
import union from '../../public/assets/images/union.png'
import Image from 'next/image';
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
  position: relative;;
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

const WhoWeAre: NextPage = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : th
  return (
    <>
      <WhoBanner text={t.navbar.weare} />
      <WhoContent />
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

export default WhoWeAre
