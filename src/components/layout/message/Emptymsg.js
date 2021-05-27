import React from 'react';
import { Empty } from 'antd';
import Nodata from '../../../assets/images/no-data.png'

const Emptymsg = (props) => {
    return (
        <Empty className="emptyMessageBox" style={{ margin: '70px 0px' }}
            image={Nodata}
            imageStyle={{
                height: 100,
                width: 100,
                borderRadius: '50%',
                margin: 'auto',
                marginBottom: '15px',
                //border: '2px solid #ddd',
                //padding: 15,
            }}
            description={
                <span>
                    <h3>{props.emptytitle}</h3>
                    <p>{props.emptydescription}</p>
                </span>
            }
        />
    )
}

export default Emptymsg