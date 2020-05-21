import React from 'react';
import {Dropdown, Menu} from 'antd';
import 'antd/dist/antd.css';

function Test () {


    const menu = (
        <Menu>
            <Menu.Item>
                <a href=" ">Person 1</a>
            </Menu.Item>
            <Menu.Item>
                <a href=" ">Person 2</a>
            </Menu.Item>
            <Menu.Item>
                <a href=" ">Person 3</a>
            </Menu.Item>
        </Menu>
    );
    return (
        <div>
        <Dropdown overlay={menu}><a href=" ">Profile</a></Dropdown>
        </div>
    )
}

export default Test;