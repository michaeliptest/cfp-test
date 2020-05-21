import React from 'react';
import 'antd/dist/antd.css';
import {Row, Col, Menu, Dropdown} from 'antd';

function TopMenu () {
    const style = {
        spanstyle: {
            backgroundColor: "white",
            display: "block",
            padding: "10px",
            marginBottom: "4px",
            textAlign: "center",
            borderTop: "1px solid lightGray",
            borderBottom: "1px solid lightGray"
        },
        topdiv: {
            margin: "25px 0 0 0"
        }
    }

    const menu = (
        <Menu>
            <Menu.Item>
                Person 1
            </Menu.Item>
            <Menu.Item>
                Person 2
            </Menu.Item>
            <Menu.Item>
                Person 3
            </Menu.Item>
        </Menu>
    );

    const mouseOverBorder = (e) => {
        e.target.style.borderBottom="2px solid blue";

    }

    const mouseOutBorder = (e) => {
        e.target.style.borderBottom="1px solid lightGray"
    }

    return (
        <div style={style.topdiv}>
  
            <Row>
                <Col span={4} style={style.spanstyle} onMouseOver={mouseOverBorder} onMouseOut={mouseOutBorder}>
                <Dropdown overlay={menu}><a href=" " style={{textDecoration: "none", color: "black"}}>Profile</a></Dropdown></Col>
                <Col span={4} style={style.spanstyle} onMouseOver={mouseOverBorder} onMouseOut={mouseOutBorder}>Investor Info</Col>
                <Col span={4} style={style.spanstyle} onMouseOver={mouseOverBorder} onMouseOut={mouseOutBorder}>Investments</Col>
                <Col span={4} style={style.spanstyle} onMouseOver={mouseOverBorder} onMouseOut={mouseOutBorder}>Communication</Col>
                <Col span={4} style={style.spanstyle} onMouseOver={mouseOverBorder} onMouseOut={mouseOutBorder}>Activity Log</Col>
                <Col span={4} style={style.spanstyle} onMouseOver={mouseOverBorder} onMouseOut={mouseOutBorder}>Bank Accounts</Col>
                {/* <Col span={4} style={style.spanstyle} onMouseOver={mouseOverBorder} onMouseOut={mouseOutBorder}>Connections</Col> */}
            </Row>
        </div>
    )
}

export default TopMenu;