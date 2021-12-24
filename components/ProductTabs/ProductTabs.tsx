import { memo, useEffect, useState } from "react";
import styled from '@emotion/styled';
import { css, jsx } from '@emotion/react'
import productData from '../../data/product.json';
import { Card } from "../Card";
import { useRouter } from "next/router";
import en from '../../public/locales/en';
import th from '../../public/locales/th';

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

const Vi = styled.div`
  border-left: 1px solid #D3D4D3;
  height: 40px;
`

const ViContainer = styled.div`
  border-left: 1px solid #FFF;
  height: 60px;
`

export interface IimageProps {
    src: string;
    name: string;
}

export interface MyComponentProps {
    cate: string;
    id: string;
    img: IimageProps[];
    title: string;
    titleTH: string;
    subtitle: string;
    rawHTML?: string;
    rawHTMLth?: string;
}

const ProductCate = () => {
    const [autoData, setAutoData] = useState<MyComponentProps[]>([]);
    const [industData, setIndustData] = useState<MyComponentProps[]>([]);
    const [tabs, setActiveTabs] = useState<string>('1');
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : th;
    useEffect(() => {
        if (productData) {
            setAutoData(productData.automotive);
            setIndustData(productData.industrial);
        }
    }, [autoData]);

    const handleActiveTabs = (tab: string) => {
        setActiveTabs(tab);
    }
    return (
        <TabsContainer>
            <Tabs>
                <TabItem className={tabs === '1' ? 'active' : ''} onClick={() => handleActiveTabs('1')}>{t.product.autoBelt}</TabItem>
                <div className="d-flex align-items-center">
                    <Vi />
                </div>
                <TabItem className={tabs === '2' ? 'active' : ''} onClick={() => handleActiveTabs('2')}>{t.product.industBelt}</TabItem>
            </Tabs>
            <div className="row">
                {tabs === '1' ?
                    autoData?.map((item: any) => (
                        <div className="col-12 col-md-6 col-xl-3" key={item.id}>
                            <Card
                                id={item.id}
                                subtitle={item.subtitle}
                                img={item.img}
                                title={locale === 'en' ? item.title : item.titleTH}
                                cate={item.cate}
                                type={t.product.autoBelt2}
                                rawHTML={locale === 'en' ? item.rawHTML : item.rawHTMLth}
                            />
                        </div>
                    ))
                    :
                    industData?.map((item: any) => (
                        <div className="col-12 col-md-6 col-xl-3" key={item.id}>
                            <Card
                                id={item.id}
                                subtitle={item.subtitle}
                                img={item.img}
                                title={locale === 'en' ? item.title : item.titleTH}
                                cate={item.cate}
                                type={t.product.industBelt2}
                                rawHTML={locale === 'en' ? item.rawHTML : item.rawHTMLth}
                            />
                        </div>
                    ))
                }
            </div>
        </TabsContainer>
    );
}

export default memo(ProductCate);