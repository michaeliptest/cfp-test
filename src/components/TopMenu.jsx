import React from 'react';
import 'antd/dist/antd.css';
import {Row, Col} from 'antd';

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

    const mouseOverBorder = (e) => {
        e.target.style.borderBottom="2px solid blue"
    }

    const mouseOutBorder = (e) => {
        e.target.style.borderBottom="1px solid lightGray"
    }

    return (
        <div style={style.topdiv}>
            <Row>
                <Col span={4} style={style.spanstyle} onMouseOver={mouseOverBorder} onMouseOut={mouseOutBorder}>Profile</Col>
                <Col span={4} style={style.spanstyle} onMouseOver={mouseOverBorder} onMouseOut={mouseOutBorder}>Investments</Col>
                <Col span={4} style={style.spanstyle} onMouseOver={mouseOverBorder} onMouseOut={mouseOutBorder}>Communication</Col>
                <Col span={4} style={style.spanstyle} onMouseOver={mouseOverBorder} onMouseOut={mouseOutBorder}>Activity Log</Col>
                <Col span={4} style={style.spanstyle} onMouseOver={mouseOverBorder} onMouseOut={mouseOutBorder}>Bank Accounts</Col>
                <Col span={4} style={style.spanstyle} onMouseOver={mouseOverBorder} onMouseOut={mouseOutBorder}>Connections</Col>
            </Row>
        </div>
    )
}

export default TopMenu;