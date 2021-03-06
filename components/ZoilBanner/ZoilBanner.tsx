import { memo, useState } from "react";
import styled from '@emotion/styled';
import { Modal } from 'react-bootstrap';
import Image from 'next/image';
import productbanner from '../../public/assets/images/zoil-banner.png';
import zoilproduct from '../../public/assets/images/zoil-product.png';

const breakpoints = [375, 768, 1024, 1440]

const mq = breakpoints.map(
  bp => `@media (min-width: ${bp}px)`
)

const BannerContainer = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  justify-content: center;
  margin-top: 16px;
  margin-bottom: 30px;
  ${mq[1]} {
    margin-top: 24px;
    margin-bottom: 30px;
  }
`
const BG = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  max-width: 340px;
  overflow: hidden;
  z-index: 1;
  cursor: pointer;
  ${mq[1]} {
    width: 440px;
    max-width: 440px;
    }
  ${mq[2]} {
    width: 500px;
    max-width: 500px;
    }
    ${mq[3]} {
      width: 680px;
      max-width: 680px;
      }
`
const TextHeroSection = styled.div`
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ModalContainer = styled.div`
  padding: 8px;
  ${mq[2]} {
    padding: 16px;
    }
  ${mq[3]} {
    padding: 32px;
    }
`


const ModalTitle = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
`
const ModalSubTitle = styled.div`
  font-size: 20px;
  line-height: 28px;
  margin-bottom: 24px;
`

const Images = styled.img`
  width: 100%;
  border-radius: 6px;
`

const HeadLineContainer = styled.div`
  padding: 8px 24px;
  border-radius: 24px;
  margin-top: 12px;
  background-color: #008837;
  color: white;
`


const ZoilBanner = () => {
  const [modal, setModal] = useState<boolean>(false);
  return (
    <>
      <div className="row">
        <div className="d-none d-lg-block col-lg-3" />
        <BannerContainer className="col-12 col-lg-6">
          <BG onClick={() => setModal(true)}>
            <Image
              alt="product-banner"
              src={productbanner}
              placeholder="blur"
              layout="responsive"
              objectFit="cover"
              quality={100}
              priority
            />
          </BG>
        </BannerContainer>
        <div className="d-none d-lg-block col-lg-3" />
      </div>
      <Modal size="xl" centered show={modal} onHide={() => setModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>?????????????????????????????????????????????????????????</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ModalContainer>
            <div className=" d-block d-lg-none">
              <div className="row">
                <ModalTitle>Zoil (???????????????)</ModalTitle>
                <ModalSubTitle>??????????????? ????????????????????????????????????????????????</ModalSubTitle>
                <div className="col-12 mb-4">
                  <Images
                    alt='zoil-product'
                    src="/assets/images/zoil-product.png"
                  />
                </div>
                <div className="col-12">
                  <div>
                    <p><strong>???????????????????????????????????????</strong></p>
                    <p>1. ??????????????????????????????????????????????????????????????????????????????????????? ????????????????????????????????????????????? (??????????????????????????????) ?????????????????????????????????????????? ???????????????????????????????????????????????????????????????????????? ??????????????????????????????</p>
                    <p>2. ???????????????????????????????????? ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? ????????????????????????????????? ????????????????????? 20 ???????????? ??????????????????????????????????????????????????????????????????????????? ??????????????????????????????????????? ?????????????????????????????????????????????????????? ????????????????????????????????? ???????????????????????????</p>
                    <div className="d-flex flex-column align-items-center">
                      <strong className="text-danger">??????????????????????????? *2 ???????????? *5 ???????????? *10 ????????????</strong>
                      <HeadLineContainer>??????????????????????????? ????????????????????? ?????????????????????</HeadLineContainer>
                    </div>
                  </div>
                  {/* <div
                    dangerouslySetInnerHTML={{
                      __html: rawHTML
                    }}></div> */}
                </div>
              </div>
            </div>
            <div className=" d-none d-lg-block">
              <div className="row">
                <div className="col-6">
                  <ModalTitle>Zoil (???????????????)</ModalTitle>
                  <ModalSubTitle>??????????????? ????????????????????????????????????????????????</ModalSubTitle>
                  <div>
                    <p><strong>???????????????????????????????????????</strong></p>
                    <p>1. ??????????????????????????????????????????????????????????????????????????????????????? ????????????????????????????????????????????? (??????????????????????????????) ?????????????????????????????????????????? ???????????????????????????????????????????????????????????????????????? ??????????????????????????????</p>
                    <p>2. ???????????????????????????????????? ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? ????????????????????????????????? ????????????????????? 20 ???????????? ??????????????????????????????????????????????????????????????????????????? ??????????????????????????????????????? ?????????????????????????????????????????????????????? ????????????????????????????????? ???????????????????????????</p>
                    <div className="d-flex flex-column align-items-center">
                      <strong className="text-danger">??????????????????????????? *2 ???????????? *5 ???????????? *10 ????????????</strong>
                      <HeadLineContainer>??????????????????????????? ????????????????????? ?????????????????????</HeadLineContainer>
                    </div>
                  </div>
                  {/* <div
                    dangerouslySetInnerHTML={{
                      __html: rawHTML
                    }}></div> */}
                </div>
                <div className="col-6">
                  <Images
                    alt='zoil-product'
                    src="/assets/images/zoil-product.png"
                  />
                </div>
              </div>
            </div>
          </ModalContainer>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default memo(ZoilBanner);