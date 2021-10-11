import React, { useState } from 'react';

import { Table, Tooltip, Modal, Button, Divider, Input, InputNumber, Popconfirm, Form, Typography, Row, Col } from 'antd';
import { EditOutlined, CloseOutlined, ExclamationCircleOutlined, UpOutlined, DownOutlined, PlusOutlined } from '@ant-design/icons'
import { accountRoutes } from '../../routes';
import webData from "../../data/websiteInfo.json";


function Admin() {
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
        console.log(record.key);
    };

    const cancel = () => {
        setEditingKey('');
    };

    const save = async (key) => {
        try {
            const row = await form.validateFields();
            const newData = [...data];
            const index = newData.findIndex((item) => key === item.key);
            console.log(key)

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
            key:'web_id',
            width: '5%',
            render: (txt, record, index) => index + 1,
        },
        {
            title: 'Website Name',
            dataIndex: 'name',
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
            render: order => (
                <span>
                    <Button shape="circle" icon={<UpOutlined />} />
                    <Divider type="vertical" />
                    <Button shape="circle" icon={<DownOutlined />} />
                </span>
            ),
        },
    ];
    const mergedColumns = columns.map((col) => {
        if (!col.editable) {
            return col;
        }

        return {
            ...col,
            onCell: (record) => ({
                record,
                inputType: col.dataIndex === 'age' ? 'number' : 'text',
                key:'web_id',
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
                    <Button type="primary" shape="round" icon={<PlusOutlined />}>
                        Add
                    </Button>
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
                    rowKey= "web_id"
                    rowClassName="editable-row"
                    pagination={{
                        onChange: cancel,
                    }}
                />
            </Form>
        </a>

    );
}

export default Admin




// import React, { useState } from 'react';

// import { Table, Tooltip, Modal, Button, Divider } from 'antd';
// import { EditOutlined, CloseOutlined, ExclamationCircleOutlined } from '@ant-design/icons'

// // Test data
// const data = [
//     {
//         key: '1',
//         name: 'Youtube',
//         link: 'www.youtube.com',
//         description: 'Video websitet test message test messagetest message test message test message test message test message test message test message test message test message',
//         index: 0,
//     },
//     {
//         key: '2',
//         name: 'BaiDu',
//         link: 'www.baidu.com',
//         description: 'Search engine test message test message test message test message test message test message test message test message test message',
//         index: 1,
//     },
//     {
//         key: '3',
//         name: 'ZhiHu',
//         link: 'www.zhihu.com',
//         description: 'Piazza engine test message test message test message test message test message test message test message test message test message test message test message test message test message test message',
//         index: 2,
//     },
// ];


// function Admin() {
//     // Website editing modal
//     const [isModalVisible, setIsModalVisible] = useState(false);

//     const showModal = () => {
//         setIsModalVisible(true);
//     };

//     const handleOk = () => {
//         setIsModalVisible(false);
//     };

//     const handleCancel = () => {
//         setIsModalVisible(false);
//     };

//     // Website delete modal
//     function confirm() {
//         Modal.confirm({
//             title: 'Confirm',
//             icon: <ExclamationCircleOutlined />,
//             content: 'Are you sure to delete this website item?',
//             okText: 'Confirm',
//             cancelText: 'Cancel',
//         });
//     }


//     // Website detailed information table
//     const columns = [
//         {
//             title: 'Website Name',
//             dataIndex: 'name',
//             width: '10%',
//             render: name => (
//                 <Tooltip placement="topLeft" title={name}>
//                     {name}
//                 </Tooltip>
//             ),
//         },
//         {
//             title: 'Website Link',
//             dataIndex: 'link',
//             width: '20%',
//             render: link => (
//                 <Tooltip placement="topLeft" title={link}>
//                     {link}
//                 </Tooltip>
//             ),
//         },
//         {
//             title: 'Description',
//             dataIndex: 'description',
//             ellipsis: {
//                 showTitle: false,
//             },
//             render: description => (
//                 <Tooltip placement="topLeft" title={description}>
//                     {description}
//                 </Tooltip>
//             ),
//         },
//         {
//             title: 'Image Link',
//             dataIndex: 'image',
//             width: '20%',
//             render: image => (
//                 <Tooltip placement="topLeft" title={image}>
//                     {image}
//                 </Tooltip>
//             ),
//         },
//         {
//             title: 'Operation',
//             dataIndex: 'operation',
//             width: 150,
//             render: (txt, record, index) => {
//                 return (
//                     <div>
//                         <Button type="primary" onClick={showModal}>
//                             <EditOutlined />
//                         </Button>
//                         <Modal title="Website Edit Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
//                             <p>Some contents...</p>
//                             <p>Some contents...</p>
//                             <p>Some contents...</p>
//                         </Modal>

//                         <Divider type="vertical" />

//                         <Button type="primary" onClick={confirm}>
//                             <CloseOutlined />
//                         </Button>
//                     </div>

//                 )
//             }
//         },
//     ];


//     return (
//         <Table
//             columns={columns}
//             dataSource={data}
//         />
//     );
//     // }
// }

// export default Admin