import React from 'react'

import { Card, Avatar, Col, Row, Space, Carousel, Divider } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined, LinkOutlined } from '@ant-design/icons';
import './index.css'

import CardTmp from '../../components/CardTmp'
import SizeContext from 'antd/lib/config-provider/SizeContext';

// const { Meta } = Card;

const contentStyle = {
    // height: '100%',
    color: '#FFFFFF',
    // lineHeight: '100px',
    textAlign: 'left',
    // background: '#EAEAEA',
    paddingLeft: 40,
    paddingTop: 20
};


function index() {
    const carousel_height = document.body.clientHeight / 2.5;
    const carousel_tmp_width =  2 * document.body.clientWidth / 3
    return (
        <div>
            <Carousel dots="false" style={{ background: "#6A6A6A", height: carousel_height }}>
                <div>
                    <Row>
                        <Col flex="250px" style={{position:'relative'}}>
                            <a style={{paddingTop:200}}>
                                <h1 style={contentStyle}> Welcome </h1>
                                <br />
                                <h3 style={contentStyle}> Detailed and ordered website asdfasdfasdfa sdfadsfsddsfsdfsdfdsfsdfsddsfagfsdfsdfasd fasdfsadsasdfas dfasdfsadfsadf sdafsdfasdf fdsafasdf advsda</h3>

                            </a>
                        </Col>
                        <Col flex="auto">
                            <div class="container" style={{
                                // width: 50vw,
                                height: carousel_height,
                                width: carousel_tmp_width - 300,
                                // display: 'block',
                                // objectFit:'cover'
                                float:'right'
                            }}>
                                <img
                                    float='right'
                                    src="https://pic2.zhimg.com/v2-f513c036d798cc94cb00dae1ac703205_r.jpg?source=1940ef5c"
                                    // height={carousel_height}
                                    object-fit='cover'
                                    width="carousel_tmp_width"
                                    height="auto"

                                />
                            </div>
                        </Col>
                    </Row>


                    {/* <div>
                        <CardTmp />
                    </div> */}

                    {/* <h3 style={contentStyle}>1</h3> */}

                    {/* <h3 style={contentStyle}>2dasfsdfasdfasdfsdafasdf</h3> */}
                </div>
                <div>
                    {/* <h2 style={contentStyle}>2dasfsdfasdfasdfsdafasdf</h2>
                    <h2 style={contentStyle}>2dasfsdfasdfasdfsdafasdf</h2>

                    <h2 style={contentStyle}>2dasfsdfasdfasdfsdafasdf</h2> */}

                </div>
                <div>
                    {/* <h3 style={contentStyle}>3</h3> */}
                </div>
            </Carousel>

            <br />
            <Divider orientation="left">
                {/* <p style={{ fontFamily:"Trebuchet MS"}}> */}
                <h1 style={{ fontFamily: "Lucida Sans Unicode" }}>
                    <b>
                        Websites Below
                    </b>
                </h1>
                {/* </p> */}
            </Divider>

            <br />

            {/* <Space size={[70, 20]} wrap> */}
            <Row justify="space-around">
                {new Array(15).fill(null).map((_, index) => (
                    <Col span={4} style={{ paddingLeft: 20, padding: 20 }}>
                        <CardTmp />
                    </Col>
                ))}
            </Row>
            {/* </Space> */}
        </div>
    )
}

export default index
