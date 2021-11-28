import type { NextPage } from 'next'
import styled from '@emotion/styled';
import { ProductBanner } from '../../components/PageBanner';
import { ProductTabs } from '../../components/ProductTabs';
import { Order } from '../../components/Order';


const breakpoints = [375, 768, 1024, 1440]

const mq = breakpoints.map(
  bp => `@media (min-width: ${bp}px)`
)

const Container = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const Product: NextPage = () => {
  return (
    <>
      <ProductBanner text="PRODUCT" />
      <div className="container">
        <ProductTabs />
      </div>
      <Order />
    </>
  )
}

export default Product
