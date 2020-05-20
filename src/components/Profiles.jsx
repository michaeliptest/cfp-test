// list all the profiles

import React from 'react';
import { Tree } from 'antd';

const profileNames = [
    {
        title: "Michael Smith",
        key: '1',
        children: [
            {
                title: "Michael Smith Holdings",
                key: '1-1',
            },
            {
                title: "Michael Smith LLC",
                key: '1-2',
            }
        ]
    },
    {
        title: "Jonathan Davis",
        key: '2'
    },
    {
        title: "Earl Clarke",
        key: '3'
    },
    {
        title: "Jim Jones",
        key: '4',
        children: [
            {
                title: "Jim Jones Investments",
                key: '4-1',
            },
            {
                title: "Jim Jones LLC",
                key: '4-2',
            }
        ]
    },
    {
        title: "Thomas Edison",
        key: '5'
    }];

function Profiles() {
    return (
        <>
            <Tree
                treeData={profileNames}
            />
        </>
    )
}

export default Profiles;