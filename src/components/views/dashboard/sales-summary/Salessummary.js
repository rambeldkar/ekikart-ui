import React, { useEffect } from 'react';
import { Line } from '@ant-design/charts';
import { Column } from '@ant-design/charts';
import Pagetitle from '../../../layout/Pagetitle.js'
import Salessummarylist from './Salessummarylist.js'
import Paymentcollected from './Paymentcollected.js'
import Rangepicker from '../../../layout/filter/Rangepicker.js'
import Selectsummary from '../../../layout/filter/Selectsummary.js'
import Allday from '../../../layout/filter/Allday.js'
import Location from '../../../layout/filter/Location.js'
import Exportbutton from '../../../layout/Exportbutton.js'
import { Layout, Row, Col, Skeleton } from 'antd';
import './salessummary.less'

const { Content } = Layout;
const title = "Sales Summary";

const monthData = [
  { month: 'May1', value: 300 },
  { month: 'May2', value: 400 },
  { month: 'May3', value: 315 },
  { month: 'May4', value: 50 },
  { month: 'May5', value: 409 },
  { month: 'May6', value: 64 },
  { month: 'May7', value: 17 },
  { month: 'May8', value: 92 },
  { month: 'May9', value: 132 },
  { month: 'May10', value: 344 },
  { month: 'May11', value: 475 },
  { month: 'May12', value: 315 },
  { month: 'May13', value: 55 },
  { month: 'May14', value: 14 },
  { month: 'May15', value: 10 },
  { month: 'May16', value: 7 },
  { month: 'May17', value: 9 },
  { month: 'May18', value: 13 },
  { month: 'May19', value: 3 },
  { month: 'May20', value: 4 },
  { month: 'May21', value: 35 },
  { month: 'May22', value: 5 },
  { month: 'May23', value: 49 },
  { month: 'May24', value: 63 },
  { month: 'May25', value: 711 },
  { month: 'May26', value: 9 },
  { month: 'May27', value: 13 },
  { month: 'May28', value: 3 },
  { month: 'May29', value: 4 },
  { month: 'May30', value: 35 },
];
const monthConfig = {
  data: monthData,
  height: 180,
  autoFit: true,
  xField: 'month',
  yField: 'value',
  yAxis: {
    label: {
      formatter: function formatter(v) {
        return '$'.concat(v).replace(/\d{1,3}(?=(\d{3})+$)/g, function (s) {
          return ''.concat(s, ',');
        });
      },
    },
  },

  point: {
    size: 4,
    shape: 'diamond',
    style: {
      fill: 'white',
      stroke: '#30649B',
      lineWidth: 2,
    },
  },
  tooltip: { showMarkers: false },
  state: {
    active: {
      style: {
        shadowColor: 'yellow',
        shadowBlur: 4,
        stroke: 'transparent',
        fill: 'red',
      },
    },
  },
  meta: {
    month: { alias: 'Month' },
    value: { alias: 'Sales' },
  },
  theme: {
    geometries: {
      point: {
        diamond: {
          active: {
            style: {
              shadowColor: '#FCEBB9',
              shadowBlur: 2,
              stroke: '#F6BD16',
            },
          },
        },
      },
    },
  },
  interactions: [{ type: 'marker-active' }],
};

var weekData = [
  {
    type: 'Sun',
    sales: 3800,
  },
  {
    type: 'Mon',
    sales: 5200,
  },
  {
    type: 'Tue',
    sales: 641,
  },
  {
    type: 'Wed',
    sales: 1545,
  },
  {
    type: 'Thu',
    sales: 480,
  },
  {
    type: 'Fri',
    sales: 590,
  },
  {
    type: 'Sat',
    sales: 380,
  }
];
var weekConfig = {
  data: weekData,
  height: 180,
  autoFit: true,
  xField: 'type',
  yField: 'sales',
  color: '#30649B',
  yAxis: {
    label: {
      formatter: function formatter(v) {
        return '$'.concat(v).replace(/\d{1,3}(?=(\d{3})+$)/g, function (s) {
          return ''.concat(s, ',');
        });
      },
    },

  },
  meta: {
    type: { alias: 'Category' },
    sales: { alias: 'Sales' },
  },
};

const timeData = [
  { month: '12am', value: 20 },
  { month: '1am', value: 420 },
  { month: '2am', value: 115 },
  { month: '3am', value: 50 },
  { month: '4am', value: 209 },
  { month: '5am', value: 64 },
  { month: '6am', value: 17 },
  { month: '7am', value: 92 },
  { month: '8am', value: 132 },
  { month: '9am', value: 244 },
  { month: '10am', value: 275 },
  { month: '11am', value: 315 },
  { month: '12pm', value: 55 },
  { month: '1pm', value: 14 },
  { month: '2pm', value: 10 },
  { month: '3pm', value: 7 },
  { month: '4pm', value: 9 },
  { month: '5pm', value: 13 },
  { month: '6pm', value: 3 },
  { month: '7pm', value: 4 },
  { month: '8pm', value: 35 },
  { month: '9pm', value: 5 },
  { month: '10pm', value: 49 },
  { month: '11pm', value: 63 }
];
const timeConfig = {
  data: timeData,
  height: 180,
  autoFit: true,
  xField: 'month',
  yField: 'value',
  yAxis: {
    label: {
      formatter: function formatter(v) {
        return '$'.concat(v).replace(/\d{1,3}(?=(\d{3})+$)/g, function (s) {
          return ''.concat(s, ',');
        });
      },
    },
  },

  point: {
    size: 4,
    shape: 'diamond',
    style: {
      fill: 'white',
      stroke: '#30649B',
      lineWidth: 2,
    },
  },
  tooltip: { showMarkers: false },
  state: {
    active: {
      style: {
        shadowColor: 'yellow',
        shadowBlur: 4,
        stroke: 'transparent',
        fill: 'red',
      },
    },
  },
  meta: {
    month: { alias: 'Month' },
    value: { alias: 'Sales' },
  },
  theme: {
    geometries: {
      point: {
        diamond: {
          active: {
            style: {
              shadowColor: '#FCEBB9',
              shadowBlur: 2,
              stroke: '#F6BD16',
            },
          },
        },
      },
    },
  },
  interactions: [{ type: 'marker-active' }],

};

const Salessummary = () => {
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
          <Selectsummary selectvalue="Daily" />
        </Col>
        <Col>
          <Location />
        </Col>
        <Col className="pr-0 ml-auto" >
          <Exportbutton />
        </Col>
      </Row>
      <Content className="content-body" style={{ minHeight: 200 }}>
        <Row>
          <Col lg={24} xs={24}>
            <div className="bg-white" style={{ margin: '0px 14px 0px 14px', padding: 14, minHeight: 200 }}>
              <Skeleton paragraph={{ rows: 5 }} loading={loading} active >
                <h4 className="mb-1 text-uppercase">May 1, 2021–May 31, 2021</h4>
                <Line {...monthConfig} />
              </Skeleton>
            </div>
          </Col>
          <Col lg={8} xs={24}>
            <div className="bg-white" style={{ margin: '14px 7px 14px 14px', padding: 14, minHeight: 200 }}>
              <Skeleton paragraph={{ rows: 5 }} loading={loading} active >
                <h4 className="mb-1 text-uppercase">Day of week</h4>
                <Column {...weekConfig} />
              </Skeleton>
            </div>
          </Col>
          <Col lg={16} xs={24}>
            <div className="bg-white" style={{ margin: '14px 14px 14px 7px', padding: 14, minHeight: 200 }}>
              <Skeleton paragraph={{ rows: 5 }} loading={loading} active >
                <h4 className="mb-1 text-uppercase">Time of day</h4>
                <Line {...timeConfig} />
              </Skeleton>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={24} xs={24}>
            <div className="bg-white" style={{ margin: '0px 14px 14px 14px', padding: 14 }}>
              <Skeleton paragraph={{ rows: 4 }} loading={loading} active >
                <h4 className="mb-1 text-uppercase">Summary Report</h4>
                <Salessummarylist />
              </Skeleton>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={24} xs={24}>
            <div className="bg-white" style={{ margin: '0px 14px 0px 14px', padding: 14 }}>
              <Skeleton paragraph={{ rows: 8 }} loading={loading} active >
                <h4 className="mb-1 text-uppercase">Payment Collected</h4>
                <Paymentcollected />
              </Skeleton>
            </div>
          </Col>
        </Row>
      </Content>
    </>
  );
}
export default Salessummary;
