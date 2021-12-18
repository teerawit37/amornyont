import { memo } from "react";
import styled from '@emotion/styled';
import Image from 'next/image';
import productcate1 from '../../public/assets/images/product-cate-1.png';
import productcate2 from '../../public/assets/images/product-cate-2.png'
import { useRouter } from "next/router";
import en from '../../public/locales/en';
import th from '../../public/locales/th';

const breakpoints = [375, 768, 1024, 1440]

const mq = breakpoints.map(
  bp => `@media (min-width: ${bp}px)`
)

const CateContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${mq[1]} {
    flex-direction: row;
  }
`
const BG1 = styled.div`
  position: relative;;
  height: 340px;
  width: 100%;
  max-width: 340px;
  overflow: hidden;
  z-index: 1;
  margin-bottom: 16px;
  ${mq[1]} {
    height: 340px;
    width: 340px;
    margin-bottom: 0px;
    margin-right: 12px;
  }
  ${mq[3]} {
    width: 672px;
    height: 367px;
    max-width: 672px;
  }
`

const BG2 = styled.div`
  position: relative;;
  height: 340px;
  width: 100%;
  max-width: 340px;
  overflow: hidden;
  z-index: 1;
  ${mq[1]} {
    height: 340px;
    width: 340px;
    margin-left: 12px;
  }
  ${mq[3]} {
    width: 672px;
    height: 367px;
    max-width: 672px;
  }
`

const TextHero = styled.div`
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 28px;
  width: 100%;
  text-align: center;
  font-weight: 600;
  color: white;
  ${mq[3]} {
    font-size: 46px;
    }
`
const Button = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;  
  padding: 9px 16px;
  background: #008837;
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;
  cursor: pointer;
  margin-top: 25px;
  border-radius: 6px;
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`


const ProductCate = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : th;

  const handleClick = (path: string) => {
    router.push(path)
  }
  return (
    <>
      <CateContainer>
        <BG1>
          <Image
            alt="product-cate-1"
            src={productcate1}
            placeholder="blur"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />
          <TextHero>
            <TextContainer>
              <div>{t.productCate.autoBelt}</div>
              <Button onClick={() => handleClick('/product')}>{t.productCate.btnMore}</Button>
            </TextContainer>
          </TextHero>
        </BG1>
        <BG2>
          <Image
            alt="product-cate-2"
            src={productcate2}
            placeholder="blur"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />
          <TextHero>
            <TextContainer>
              <div>{t.productCate.industBelt}</div>
              <Button onClick={() => handleClick('/product')}>{t.productCate.btnMore}</Button>
            </TextContainer>
          </TextHero>
        </BG2>
      </CateContainer>
    </>
  );
}

export default memo(ProductCate);