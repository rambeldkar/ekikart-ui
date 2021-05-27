import React, { useEffect } from 'react';
import { Layout, Row, Col, Skeleton } from 'antd';
import Pagetitle from '../../../layout/Pagetitle.js'
import Rangepicker from '../../../layout/filter/Rangepicker.js'
import Selectsummary from '../../../layout/filter/Selectsummary.js'
import Allday from '../../../layout/filter/Allday.js'
import Location from '../../../layout/filter/Location.js'
import Exportbutton from '../../../layout/Exportbutton.js'
import Emptymsg from '../../../layout/message/Emptymsg.js'
const { Content } = Layout;
const title = "Sales Summary";
const emptytitle = "No Sales in This Time Frame.";
const emptydescription = "No sales took place during the time frame you selected.";

const Salessummaryempty = () => {
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
                            <Skeleton paragraph={{ rows: 8 }} loading={loading} active >
                                <Emptymsg emptytitle={emptytitle} emptydescription={emptydescription} />
                            </Skeleton>
                        </div>
                    </Col>
                </Row>
            </Content>
        </>
    );
}
export default Salessummaryempty;
