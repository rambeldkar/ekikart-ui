import React, { useEffect } from 'react';
import Pagetitle from '../../../layout/Pagetitle.js'
import Itemschart from './Itemschart.js'
import Itemsummarylist from './Itemsummary.js'
import Rangepicker from '../../../layout/filter/Rangepicker.js'
import Selectsummary from '../../../layout/filter/Selectsummary.js'
import Allday from '../../../layout/filter/Allday.js'
import Location from '../../../layout/filter/Location.js'
import Selectitemsrank from '../../../layout/filter/Itemsrank.js'
import Selectitemssummary from '../../../layout/filter/Itemssummary.js'
import Exportbuttonwithoutdropdown from '../../../layout/Exportbuttonwithoutdropdown'
import { Layout, Row, Col, Skeleton} from 'antd';

const { Content } = Layout;
const title = "Item Sales";

const Itemsales = () => {
  const [loading, setLoading] = React.useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, [])
  return (
    <>
      <Pagetitle title={title} />
      <Row className="filterBox" style={{ padding: '0 14px 14px 14px', margin: '0px' }} gutter={{ xs: 12, lg: 6 }}>
        <Col className="pl-0">
          <Rangepicker />
        </Col>
        <Col>
          <Allday selectvalue="Allday" />
        </Col>
        <Col>
          <Selectsummary selectvalue="Summary" />
        </Col>
        <Col>
          <Location />
        </Col>
        <Col className="pr-0 ml-auto" >
          <Exportbuttonwithoutdropdown />
        </Col>
      </Row>
      <Content className="content-body" style={{ minHeight: 200 }}>
        <Row>
          <Col lg={24} xs={24}>
            <div className="bg-white" style={{ margin: '0px 14px 14px 14px', padding: '14px 14px 0 14px', minHeight: 200 }}>
              <Skeleton paragraph={{ rows: 7 }} loading={loading} active >
                  <div className="left-heading-right-button">
                    <h4 className="text-uppercase">Jan 1, 2021–Dec 31, 2021</h4>
                    <span><Selectitemsrank selectvalue="top5items" /></span>
                    <span className="space-ml-8"><Selectitemssummary selectvalue="amount" /></span>
                  </div>
                <Itemschart/>
              </Skeleton>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={24} xs={24}>
            <div className="bg-white" style={{ margin: '0px 14px 14px 14px', padding: 14 }}>
              <Skeleton paragraph={{ rows: 4 }} loading={loading} active >
                <h4 className="mb-1 text-uppercase">Summary Report</h4>
                <Itemsummarylist />
              </Skeleton>
            </div>
          </Col>
        </Row>
      </Content>
    </>
  );
}
export default Itemsales;
