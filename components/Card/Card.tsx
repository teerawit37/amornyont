import { memo, useEffect, useState } from "react";
import { Modal } from 'react-bootstrap';
import styled from '@emotion/styled';

const breakpoints = [375, 768, 1024, 1440]

const mq = breakpoints.map(
  bp => `@media (min-width: ${bp}px)`
)

const CardContainer = styled.div`
  display: flex;
  height: 283px;
  width: 100%;
  flex-direction: column;
  background: #FFFFFF;
  cursor: pointer;

  border: 1px solid #F2F2F2;
  box-sizing: border-box;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);
  border-radius: 6px;
  overflow: hidden;
  margin-top: 20px;
  margin-bottom: 20px;
`
const Title = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
`
const TextContainer = styled.div`
  padding: 16px
`

const ImageContainer = styled.div`
  height: 179px;
  width: 100%;
  overflow: hidden;
`

const Image = styled.img`
  width: 100%;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`

const Images = styled.img`
  width: 100%;
  border-radius: 6px;
`

const Desc = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow: hidden;
  font-size: 14px;
  line-height: 22px;
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
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  margin-bottom: 24px;
`

const NameContainer = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  padding: 0px 8px;
  background-color: #fff;
`

const AbsoluteContainer = styled.div`
  position: absolute;
  top: 13px;
`

const RelativeContainer = styled.div`
  position: relative;
  margin-bottom: 24px;
`

export interface IimageProps {
  src: string;
  name: string;
}

export interface MyComponentProps {
  cate: string;
  id: string;
  img: IimageProps[],
  title: string;
  subtitle: string;
  type: string;
  rawHTML: string;
}

const Card = ({
  cate,
  id,
  title,
  type,
  img,
  subtitle,
  rawHTML,
}: MyComponentProps) => {
  const [modal, setModal] = useState<boolean>(false);
  return (
    <>
      <CardContainer onClick={() => setModal(true)}>
        <ImageContainer>
          <Image
            alt={`${id}`}
            src={`/assets/images/product/${cate}/${id}/${id}-1.png`}
          />
        </ImageContainer>
        <TextContainer>
          <Title>{title}</Title>
          <Title>{subtitle}</Title>
        </TextContainer>
      </CardContainer>
      {/* modal */}
      <Modal size="xl" centered show={modal} onHide={() => setModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{type}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ModalContainer>
            <div className=" d-block d-md-none">
              <div className="row">
                <ModalTitle>{title}</ModalTitle>
                <ModalSubTitle>{subtitle}</ModalSubTitle>
                <div className="col-12 mb-4">
                  <Images
                    alt={`${id}`}
                    src={`/assets/images/product/${cate}/${id}/${id}-1.png`}
                  />
                </div>
                <div className="col-12">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: rawHTML
                    }}></div>
                </div>
              </div>
            </div>
            <div className=" d-none d-md-block">
              <div className="row">
                <div className="col-6">
                  <ModalTitle>{title}</ModalTitle>
                  <ModalSubTitle>{subtitle}</ModalSubTitle>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: rawHTML
                    }}></div>
                </div>
                <div className="col-6">
                  {img.map((item) => (
                    <RelativeContainer key={item.src}>
                      {item.name !== '' &&
                        <AbsoluteContainer>
                          <NameContainer>{item.name}</NameContainer>
                        </AbsoluteContainer>
                      }
                      <Images
                        alt={`${id}`}
                        src={`/assets/images/product/${cate}/${id}/${item.src}.png`}
                      />
                    </RelativeContainer>
                  ))}
                </div>
              </div>
            </div>
          </ModalContainer>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default memo(Card);