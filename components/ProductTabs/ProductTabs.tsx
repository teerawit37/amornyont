import { memo, useEffect, useState } from "react";
import styled from '@emotion/styled';
import { css, jsx } from '@emotion/react'
import productData from '../../data/product.json';
import { Card } from "../Card";

const breakpoints = [375, 768, 1024, 1440]

const mq = breakpoints.map(
    bp => `@media (min-width: ${bp}px)`
)

const TabsContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
`

const Tabs = styled.div`
  display: flex;
  height: 100%;
  width: 343px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  background-color: #fff;
  margin-top: -30px;
  margin-bottom: 20px;
  z-index: 80;
  ${mq[1]} {
    width: 472px;
  }
  ${mq[3]} {
    margin-top: -36px;
    width: 670px;
  }
`

const TabItem = styled.div`
  display: flex;
  flex: 1;
  padding: 20px 0;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  line-height: 20px;
  color: #4F5450;
  cursor: pointer;
  ${mq[3]} {
    font-size: 24px;
    line-height: 32px;
  }
`

export interface MyComponentProps {
    cate: string;
    id: string;
    title: string;
    rawHTML?: string;
}

const ProductCate = () => {
    const [autoData, setAutoData] = useState<MyComponentProps[]>([]);
    const [industData, setIndustData] = useState<MyComponentProps[]>([]);
    const [tabs, setActiveTabs] = useState<string>('1');
    useEffect(() => {
        if (productData) {
            setAutoData(productData.automotive);
            setIndustData(productData.industrial);
            console.log(autoData)
        }
    }, [autoData]);

    const handleActiveTabs = (tab: string) => {
        setActiveTabs(tab);
    }
    return (
        <TabsContainer>
            <Tabs>
                <TabItem onClick={() => handleActiveTabs('1')}>Automotive Belt</TabItem>
                <TabItem onClick={() => handleActiveTabs('2')}>Industrial Belt</TabItem>
            </Tabs>
            <div className="row">
                {tabs === '1' ?
                    autoData?.map((item: any) => (
                        <div className="col-12 col-md-6 col-xl-3" key={item.id}>
                            <Card
                                id={item.id}
                                characteristics={item.Characteristics}
                                title={item.title}
                                cate={item.cate}
                                type="Automotive Belt"
                                rawHTML={item.rawHTML}
                            />
                        </div>
                    ))
                    :
                    industData?.map((item: any) => (
                        <div className="col-12 col-md-6 col-xl-3" key={item.id}>
                            <Card
                                id={item.id}
                                characteristics={item.Characteristics}
                                title={item.title}
                                cate={item.cate}
                                type="Industrial Belt"
                                rawHTML={item.rawHTML}
                            />
                        </div>
                    ))
                }
            </div>
        </TabsContainer>
    );
}

export default memo(ProductCate);