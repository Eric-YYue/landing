import React, { useContext, useState, useEffect, useRef } from 'react';

import { Table, Tooltip, Modal, Button, Divider, Input, InputNumber, Popconfirm, Form, Typography, Row, Col } from 'antd';
import { EditOutlined, CloseOutlined, ExclamationCircleOutlined, UpOutlined, DownOutlined, PlusOutlined } from '@ant-design/icons'
import { accountRoutes } from '../../routes';


import webData from "../../data/websiteInfo.json";
import "./admin.css"


function Admin() {
    // var myObj = JSON.parse(webData)

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };





    const EditableCell = ({
        editing,
        dataIndex,
        title,
        inputType,
        record,
        index,
        children,
        ...restProps
    }) => {
        const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
        return (
            <td {...restProps}>
                {editing ? (
                    <Form.Item
                        name={dataIndex}
                        style={{
                            margin: 0,
                        }}
                        rules={[
                            {
                                required: true,
                                message: `Please Input ${title}!`,
                            },
                        ]}
                    >
                        {inputNode}
                    </Form.Item>
                ) : (
                    children
                )}
            </td>
        );
    };

    const [form] = Form.useForm();
    const [data, setData] = useState(webData);
    const [editingKey, setEditingKey] = useState('');

    const isEditing = (record) => record.key === editingKey;

    const edit = (record) => {
        form.setFieldsValue({
            web_id: '',
            name: '',
            weblink: '',
            description: '',
            imglink: '',
            ...record,
        });
        setEditingKey(record.web_id);
        // console.log(data);
    };

    const cancel = () => {
        setEditingKey('');
    };

    const fs = require("fs");

    const save = async (key) => {
        try {
            const row = await form.validateFields();
            const newData = [...data];
            const index = newData.findIndex((item) => key === item.key);
            fs.writeFileSync("../../data/websiteInfo.json", newData);

            // data == newData
            // console.log(newData)

            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, { ...item, ...row });
                setData(newData);
                setEditingKey('');
            } else {
                newData.push(row);
                setData(newData);
                setEditingKey('');
            }
        } catch (errInfo) {
            console.log('Validate Failed:', errInfo);
        }
    };

    const columns = [
        {
            title: 'Index',
            dataIndex: 'web_id',
            key: 'web_id',
            classname: 'tableFormat',
            width: '5%',
            render: (txt, record, index) => index + 1,
        },
        {
            title: 'Website Name',
            dataIndex: 'name',
            // classname: 'tableFormat',
            margin: '0px auto',
            width: '12.5%',
            editable: true,
            ellipsis: {
                showTitle: false,
            },
            render: name => (
                <Tooltip placement="topLeft" title={name}>
                    {name}
                </Tooltip>
            ),
        },
        {
            title: 'Website Link',
            dataIndex: 'weblink',
            width: '15%',
            editable: true,
            ellipsis: {
                showTitle: false,
            },
            render: weblink => (
                <a href={weblink} target="_blank" rel="noopener noreferrer">
                    <Tooltip placement="topLeft" title={weblink}>
                        {weblink}
                    </Tooltip>
                </a>
            ),
        },
        {
            title: 'Description',
            dataIndex: 'description',
            editable: true,
            ellipsis: {
                showTitle: false,
            },
            render: description => (
                <Tooltip placement="topLeft" title={description}>
                    {description}
                </Tooltip>
            ),
        },
        {
            title: 'Image Link',
            dataIndex: 'imglink',
            width: '15%',
            editable: true,
            ellipsis: {
                showTitle: false,
            },
            render: imglink => (
                <a href={imglink} target="_blank" rel="noopener noreferrer">
                    <Tooltip placement="topLeft" title={imglink}>
                        {imglink}
                    </Tooltip>
                </a>
            ),
        },
        {
            title: 'Detail Operation',
            dataIndex: 'info',
            width: 250,
            align: 'center',
            render: (_, record) => {
                const editable = isEditing(record);
                return editable ? (
                    <span>
                        <a
                            href="javascript:;"
                            onClick={() => save(record.index)}
                            style={{
                                marginRight: 8,
                            }}
                        >
                            Save
                        </a>
                        <Popconfirm title="Sure to delete?" onConfirm={cancel}>
                            <a> Delete </a>
                        </Popconfirm>
                        <Divider type="vertical" />
                        <Button onClick={cancel}>
                            <a> Cancel </a>
                        </Button>
                    </span>
                ) : (
                    <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
                        Edit
                    </Typography.Link>
                );
            },
        },
        {
            title: 'Order',
            dataIndex: 'order',
            width: 200,
            align: 'center',
            render: order => (
                <span>
                    <Button shape="circle" icon={<UpOutlined />} />
                    <Divider type="vertical" />
                    <Button shape="circle" icon={<DownOutlined />} />
                </span>
            ),
        },
    ];


    const formItemLayout = {
        labelCol: {
            xs: { span: 16 },
            sm: { span: 6 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 18 },
        },
    };

    const mergedColumns = columns.map((col) => {
        if (!col.editable) {
            return col;
        }

        return {
            ...col,
            onCell: (record) => ({
                record,
                // inputType: col.dataIndex === 'age' ? 'number' : 'text',
                key: 'web_id',
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            }),
        };
    });
    return (
        <a>
            <Row>
                <Col span={2} offset={22}>
                    <Button type="primary" shape="round" icon={<PlusOutlined />} onClick={showModal}>
                        Add
                    </Button>
                    <Modal title="New Website" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                        <Form
                            {...formItemLayout}
                        >
                            <Form.Item
                                name="web_name"
                                label="Website"
                                rules={[{ required: true, message: 'Please enter the website name' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                name="web_link"
                                label="Link"
                                rules={[{ required: true, message: 'Please enter the website address' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                name="description"
                                label="Description"
                                rules={[{ required: true, message: 'What do you want to say about this website' }]}
                                // preserve= "What do you want to say about this website"
                                style={{ width: '100%', borderRadius: "5px" }}
                            >
                                <Input.TextArea rows={3} />
                            </Form.Item>

                            <Form.Item
                                name="img_link"
                                label="Image Source"
                                rules={[{ required: true, message: 'Please enter the image website address' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Form>
                    </Modal>
                </Col>
            </Row>

            <br></br>

            <Form form={form} component={false}>
                <Table
                    components={{
                        body: {
                            cell: EditableCell,
                        },
                    }}
                    bordered
                    dataSource={data}
                    columns={mergedColumns}
                    rowKey="web_id"
                    rowClassName="editable-row"
                    pagination={{
                        onChange: cancel,
                        defaultPageSize: 10,
                    }}
                />
            </Form>
        </a>

    );
}

export default Admin
