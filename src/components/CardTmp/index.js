import { Card, Avatar } from 'antd';
import { EditOutlined, LinkOutlined } from '@ant-design/icons';

import React from 'react';

const { Meta } = Card;

function CardTmp(props) {
    return (
        <a href="http://10.124.81.138:3000/index_main" target="_blank" rel="noopener noreferrer">
            <Card
                style={{ width: (document.body.clientWidth / 5) - 25 }}
                cover={
                    <img
                        alt="website_image"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                }
            >
                <Meta align="start"
                    title="Card title"
                    description="Detailed Information"
                />
            </Card>
        </a>


        // <a href={this.props.weblink} target="_blank" rel="noopener noreferrer">
        // <Card
        //     style={{ width: (document.body.clientWidth / 5) - 25 }}
        //     cover={
        //         <img
        //             alt="website_image"
        //             src={this.props.imglink}
        //         />
        //     }
        // >
        //     <Meta align="start"
        //         title={this.props.name}
        //         description={this.props.description}
        //     />
        // </Card>
        // </a>
    )
}

export default CardTmp