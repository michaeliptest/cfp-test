// list all the profiles

import React from 'react';
import { Tree } from 'antd';
import TestData from '../data/TestData.json'

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

// let testData = TestData;

const style = {
    titlefont: {
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        fontSize: '16px'
    }
}

const nodeClick = (e) => {
    console.log(`Navigates to user page of ${e}`)
}

const dropItem = (e) => {
    console.log(e)
// append to dropped position

}

function Profiles() {
    return (
        <>
            <Tree
                draggable
                treeData={profileNames}
                style={style.titlefont}
                onSelect={nodeClick}
                onDrop={dropItem}
            />
            {/* <h1>{testData.data[0].FirstName}</h1> */}
        </>
    )
}

export default Profiles;