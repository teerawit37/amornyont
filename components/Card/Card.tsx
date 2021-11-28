import { memo, useEffect, useState } from "react";
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

export interface MyComponentProps {
    cate: string;
    id: string;
    title: string;
    characteristics: string;
}

const Card = ({
    cate,
    id,
    title,
    characteristics,
}: MyComponentProps) => {
    return (
        <CardContainer>
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
    );
}

export default memo(Card);