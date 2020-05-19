import React from 'react';
import 'antd/dist/antd.css';
import {Row, Col} from 'antd';

function TopMenu () {
    const style = {
        spanstyle: {
            backgroundColor: "lightBlue",
            display: "block",
            padding: "10px",
            marginBottom: "4px",
            textAlign: "center",
            borderBottom: "0"
        }
    }

    const mouseOverBorder = (e) => {
        e.target.style.borderBottom="2px solid blue"
    }

    const mouseOutBorder = (e) => {
        e.target.style.borderBottom="0"
    }

    return (
        <>
            <Row>
                <Col span={4} style={style.spanstyle} onMouseOver={mouseOverBorder} onMouseOut={mouseOutBorder}>Profile</Col>
                <Col span={4} style={style.spanstyle} onMouseOver={mouseOverBorder} onMouseOut={mouseOutBorder}>Investments</Col>
                <Col span={4} style={style.spanstyle} onMouseOver={mouseOverBorder} onMouseOut={mouseOutBorder}>Communication</Col>
                <Col span={4} style={style.spanstyle} onMouseOver={mouseOverBorder} onMouseOut={mouseOutBorder}>Activity Log</Col>
                <Col span={4} style={style.spanstyle} onMouseOver={mouseOverBorder} onMouseOut={mouseOutBorder}>Bank Accounts</Col>
                <Col span={4} style={style.spanstyle} onMouseOver={mouseOverBorder} onMouseOut={mouseOutBorder}>Connections</Col>
            </Row>
        </>
    )
}

export default TopMenu;