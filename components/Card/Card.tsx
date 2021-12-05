import { memo, useEffect, useState } from "react";
import { Button, Modal } from 'react-bootstrap';
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
  text-align: start;
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
  margin-bottom: 24px;
`

export interface MyComponentProps {
  cate: string;
  id: string;
  title: string;
  characteristics: string;
  type: string;
  rawHTML: string;
}

const Card = ({
  cate,
  id,
  title,
  characteristics,
  type,
  rawHTML,
}: MyComponentProps) => {
  const [modal, setModal] = useState<boolean>(false)
  return (
    <>
      <CardContainer onClick={() => setModal(true)}>
        <ImageContainer>
          <Image
            alt={`${id}`}
            src={`/assets/images/product/${cate}/${id}.png`}
          />
        </ImageContainer>
        <TextContainer>
          <Title>{title}</Title>
          <Desc>{characteristics}</Desc>
        </TextContainer>
      </CardContainer>
      {/* modal */}
      <Modal size="xl" centered show={modal} onHide={() => setModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{type}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ModalContainer>
            <div className="row">
              <div className="col-6">
                <ModalTitle>{title}</ModalTitle>
                <div
                  dangerouslySetInnerHTML={{
                    __html: rawHTML
                  }}></div>
              </div>
              <div className="col-6">
                <Image
                  alt={`${id}`}
                  src={`/assets/images/product/${cate}/${id}.png`}
                />
              </div>
            </div>
          </ModalContainer>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default memo(Card);