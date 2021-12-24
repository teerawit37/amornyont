import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import bg from '../../public/assets/images/success-bg.png'
import success from '../../public/assets/images/success-symbol.png'
import Image from 'next/image';
import styled from '@emotion/styled';
import en from '../../public/locales/en';
import th from '../../public/locales/th';
import Link from 'next/link'
import { Overlay } from '../../components/Overlay';


const breakpoints = [375, 768, 1024, 1440]

const mq = breakpoints.map(
    bp => `@media (min-width: ${bp}px)`
)

const HeroSection = styled.section`
  display: flex;
  height: 612px;
  width: 100vw;
  ${mq[1]} {
    height: 600px;
    }
  ${mq[3]} {
    height: 800px;
    }
`
const HeroBG = styled.div`
  position: relative;
  height: 100%;
  width: 100vw;
  overflow: hidden;
  z-index: 1;
`

const SymbolContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
`

const SuccessContainer = styled.div`
  position: absolute;
  width: 343px;
  height: 290px;
  background-color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  border-radius: 6px;
  ${mq[1]} {
    width: 670px;
    }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 64px 12px 32px 22px;
  ${mq[1]} {
    padding: 64px 24px 32px 24px;
    }
`

const Title = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #000000;
  margin-bottom: 8px;
`

const Text = styled.div`
  font-size: 14px;
  line-height: 22px;
  color: #232924;;
`

const LinkBack = styled.a`
  font-size: 16px;
  line-height: 24px;
  color: #008837;
  cursor: pointer;
  text-decoration: none;
`

const Success: NextPage = () => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : th
    return (
        <>
            <HeroSection>
                <HeroBG>
                    <Overlay />
                    <Image
                        alt="bg"
                        src={bg}
                        placeholder="blur"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                    />
                    <SuccessContainer>
                        <SymbolContainer>
                            <Image
                                alt="success-symbol"
                                src={success}
                                placeholder="blur"
                                width={80}
                                height={80}
                                quality={100}
                            />
                        </SymbolContainer>
                        <TextContainer>
                            <Title>{t.contact.successTitle}</Title>
                            <Text>{t.contact.successP1}</Text>
                            <Text className="am-mb-24">{t.contact.successP2}</Text>

                            <Text className="am-mb-38">{t.contact.successP3}</Text>

                            <Link href="/" locale={locale}><LinkBack>{t.contact.successBtn}</LinkBack></Link>
                        </TextContainer>
                    </SuccessContainer>
                </HeroBG>
            </HeroSection >
        </>
    )
}

export default Success;
