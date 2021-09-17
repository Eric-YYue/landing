import { Card, Avatar } from 'antd';
import { EditOutlined, LinkOutlined } from '@ant-design/icons';

import React from 'react';

const { Meta } = Card;

function CardTmp(props) {
    return (
        <a href="http://10.124.81.138:3000/index_main" target="_blank" rel="noopener noreferrer">
            <Card
                style={{ width: (document.body.clientWidth / 5.5) - 20 }}
                cover={
                    <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                }
            >
                <Meta
                    // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title="Card title"
                    description="Detailed Information"
                />
            </Card>
        </a>
    )
}

export default CardTmp