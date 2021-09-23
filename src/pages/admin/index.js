import { Button } from 'antd';
import React, {useState} from 'react';

import { Table } from 'antd';
import { sortableContainer, sortableElement, sortableHandle } from 'react-sortable-hoc';
import { MenuOutlined } from '@ant-design/icons';
import { arrayMoveImmutable } from 'array-move';
import { arrayMove } from 'react-sortable-hoc';

const DragHandle = sortableHandle(() => <MenuOutlined style={{ cursor: 'grab', color: '#999' }} />);

const columns = [
    {
        title: 'Sort',
        dataIndex: 'sort',
        width: 50,
        className: 'drag-visible',
        render: () => <DragHandle />,
    },
    {
        title: 'Name',
        dataIndex: 'name',
        className: 'drag-visible',
    },
    {
        title: 'Link',
        dataIndex: 'link',
    },
    {
        title: 'Description',
        dataIndex: 'description',
    },
];

const data = [
    {
        key: '1',
        name: 'Youtube',
        link: 'www.youtube.com',
        description: 'Video website',
        index: 0,
    },
    {
        key: '2',
        name: 'BaiDu',
        link: 'www.baidu.com',
        description: 'Search engine',
        index: 1,
    },
    {
        key: '3',
        name: 'ZhiHu',
        link: 'www.zhihu.com',
        description: 'Piazza engine',
        index: 2,
    },
];

const SortableItem = sortableElement(props => <tr {...props} />);
const SortableContainer = sortableContainer(props => <tbody {...props} />);


function Admin() {
    const state = {
        dataSource: data,
    };

    const onSortEnd = ({ oldIndex, newIndex }) => {
        const { dataSource } = state;
        if (oldIndex !== newIndex) {
            const newData = arrayMove([].concat(dataSource), oldIndex, newIndex).filter(el => !!el);
            console.log('Sorted items: ', newData);
            useState({ dataSource: newData });
        }
    };

    const DraggableContainer = props => (
        <SortableContainer
            useDragHandle
            disableAutoscroll
            helperClass="row-dragging"
            onSortEnd={onSortEnd}
            {...props}
        />
    );

    const DraggableBodyRow = ({ className, style, ...restProps }) => {
        const { dataSource } = state;
        // function findIndex base on Table rowKey props and should always be a right array index
        const index = dataSource.findIndex(x => x.index === restProps['data-row-key']);
        return <SortableItem index={index} {...restProps} />;
    };

    // render() {
    const { dataSource } = state;

    return (
        <Table
            pagination={false}
            dataSource={dataSource}
            columns={columns}
            rowKey="index"
            components={{
                body: {
                    wrapper: DraggableContainer,
                    row: DraggableBodyRow,
                },
            }}
        />
    );
    // }
}

export default Admin
