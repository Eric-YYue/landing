import React, { useState } from 'react';

import { Table, Tooltip, Modal, Button, Divider, Input, InputNumber, Popconfirm, Form, Typography } from 'antd';
import { EditOutlined, CloseOutlined, ExclamationCircleOutlined, UpOutlined, DownOutlined } from '@ant-design/icons'
import { accountRoutes } from '../../routes';

// Test data
const originData = [
    {
        key: '1',
        name: 'Youtube',
        link: 'www.youtube.com',
        description: 'Video websitet test message test messagetest message test message test message test message test message test message test message test message test message',
        index: 0,
    },
    {
        key: '2',
        name: 'BaiDu',
        link: 'www.baidu.com',
        description: 'Search engine test message test message test message test message test message test message test message test message test message',
        index: 1,
    },
    {
        key: '3',
        name: 'ZhiHu',
        link: 'www.zhihu.com',
        description: 'Piazza engine test message test message test message test message test message test message test message test message test message test message test message test message test message test message',
        index: 2,
    },
];


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
                        // rules={[
                        //     {
                        //         required: true,
                        //         message: `Please Input ${title}!`,
                        //     },
                        // ]}
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
    const [data, setData] = useState(originData);
    const [editingKey, setEditingKey] = useState('');

    const isEditing = (record) => record.key === editingKey;

    const edit = (record) => {
        form.setFieldsValue({
            name: '',
            age: '',
            address: '',
            ...record,
        });
        setEditingKey(record.key);
    };

    const cancel = () => {
        setEditingKey('');
    };

    const save = async (key) => {
        try {
            const row = await form.validateFields();
            const newData = [...data];
            const index = newData.findIndex((item) => key === item.key);

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
            title: 'Website Name',
            dataIndex: 'name',
            width: '12.5%',
            editable: true,
            initialValue:'Tom',
            render: name => (
                <Tooltip placement="topLeft" title={name} key="test">
                    {name}
                </Tooltip>
            ),
        },
        {
            title: 'Website Link',
            dataIndex: 'link',
            width: '15%',
            editable: true,
            initialValue:'Tom',
            render: link => (
                <Tooltip placement="topLeft" title={link} key="test">
                    {link}
                </Tooltip>
            ),
        },
        {
            title: 'Description',
            dataIndex: 'description',
            editable: true,
            initialValue:'Tom',
            ellipsis: {
                showTitle: false,
            },
            render: description => (
                <Tooltip placement="topLeft" title={description} key="test">
                    {description}
                </Tooltip>
            ),
        },
        {
            title: 'Image Link',
            dataIndex: 'image',
            width: '15%',
            editable: true,
            initialValue:'Tom',
            render: image => (
                <Tooltip placement="topLeft" title={image} key="test">
                    {image}
                </Tooltip>
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
                            onClick={() => save(record.key)}
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
            title: 'Sort',
            dataIndex: 'sort',
            width: 200,
            render: sort => (
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
                inputType: col.dataIndex,
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            }),
        };
    });
    return (
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
                rowClassName="editable-row"
                pagination={{
                    onChange: cancel,
                }}
            />
        </Form>
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