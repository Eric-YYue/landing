import React from 'react'

import { Card, Avatar, Col, Row, Carousel, Divider, Space } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined, LinkOutlined } from '@ant-design/icons';
import './index.css'

import CardTmp from '../../components/CardTmp'
import SizeContext from 'antd/lib/config-provider/SizeContext';
import { List } from 'rc-field-form';

// const { Meta } = Card;

// fetchSelData = () => {
//     fetch('../data/selectData.json')
//         .then((res) => {return res.json(); })
//         .then((data) => {alert(JSON.stringify(data));this.setState({selV:data.obj});})
//         .catch((e) => {console.log(e.message); });
// }

const mapper = (item) => {
    return (
        <Col span={4} style={{ paddingLeft: 20, padding: 20 }}>
            <CardTmp />
        </Col>
    )
}


const contentStyle = {
    // height: '100%',
    color: '#FFFFFF',
    // lineHeight: '100px',
    textAlign: 'left',
    // background: '#EAEAEA',
    paddingLeft: 40,
    paddingTop: 20
};

const statusObj = {
    developing: 'Developing',
    implemented: 'Implemented',
    auditClean: 'Audit Clean',
    deprecation: 'Deprecated',
    unknown: 'Unknown',
}

const style = { padding: '8px 0' };

function index() {
    const carousel_height = document.body.clientHeight / 2.5;
    const carousel_tmp_width = 2 * document.body.clientWidth / 3
    return (
        <div>
            <Carousel autoplay dots="false" style={{ background: "#6A6A6A", height: carousel_height }}>
                <div>
                    <Row>
                        <Col flex="250px" style={{ position: 'relative' }}>
                            <a style={{ paddingTop: 200 }}>
                                <h1 style={contentStyle}> Welcome </h1>
                                <br />
                                <h3 style={contentStyle}> Detailed and ordered website asdfasdfasdfa sdfadsfsddsfsdfsdfdsfsdfsddsfagfsdfsdfasd fasdfsadsasdfas dfasdfsadfsadf sdafsdfasdf fdsafasdf advsda</h3>

                            </a>
                        </Col>
                        <Col flex="auto">
                            <div class="container" style={{
                                // width: 50vw,
                                height: carousel_height,
                                width: carousel_tmp_width,
                                // display: 'block',
                                // objectFit:'cover',
                                float: 'right'
                            }}>
                                <img
                                    float='right'
                                    src="https://ask.qcloudimg.com/http-save/yehe-7694870/psyadnsqc.png?imageView2/2/w/1620"
                                    // height={carousel_height}
                                    object-fit='cover'
                                // style={{
                                //     width:"carousel_tmp_width",
                                //     height:"carousel_height",
                                // }}
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
            <Divider />
            <br />

            <Row justify="space-around">
                {/* <script type="text/javascript">

                    a =  $.ajax({
                        url: "a123.json",//json文件位置，文件名
                    type: "GET",//请求方式为get
                    dataType: "json", //返回数据格式为json
                    async: false,
                    success: function(data) {//请求成功完成后要执行的方法 
                    }
                    });

                </script> */}
                <div>
                    {/* {Object.keys(statusObj).map((obj, idx) => (
                        <li key={idx} className={classes.li}>{obj} : {statusObj[obj]}</li>
                    ))} */}

                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        {new Array(15).fill(null).map((_, index) => (
                            <Col className="gutter-row" span={6}>
                                <div style={style} align="middle" >
                                    <CardTmp />
                                </div>
                            </Col>
                        ))}
                    </Row>


                </div>
            </Row>
        </div>
    )
}

export default index
