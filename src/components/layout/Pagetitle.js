import React from 'react';
import { PageHeader } from 'antd';

const Pagetitle = (props) => {
    return (
        <PageHeader style={{ padding: 14 }}
            className="site-page-header"
            title={props.title}
            subTitle={props.subtitle}
        />
    );
}
export default Pagetitle;