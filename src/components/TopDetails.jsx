import React from 'react';
import 'antd/dist/antd.css';
import {Descriptions} from 'antd';

function TopDetails() {

    const style = {
        details: {
            display: "inline-block",
            margin: '5px 50px 5px 0px'
        },
        pstyle: {
            margin: "0"
        },
        boldtext: {
            fontWeight: "bold"
        }
    }

    return (
        <>
            {/* <Descriptions title="User Profile" >
                <Descriptions.Item label="Email">this@that.com</Descriptions.Item>
                <Descriptions.Item label="Phone">555-555-1234</Descriptions.Item>
                <Descriptions.Item label="Last Login">Never</Descriptions.Item>
                <Descriptions.Item label="Login Count">0</Descriptions.Item>
            </Descriptions> */}

            <p style={{ ...style.pstyle, ...style.boldtext}}>Investor</p>
            <p style={style.pstyle}>Jim Jones</p>

            <div style={style.details}>
                <p style={{ ...style.pstyle, ...style.boldtext}}>Email</p>
                <p style={style.pstyle}>jim.jones@yahoo.com</p>
            </div>

            <div style={style.details}>
                <p style={{ ...style.pstyle, ...style.boldtext}}>Phone</p>
                <p style={style.pstyle}>123-456-7890</p>
            </div>

            <div style={style.details}>
                <p style={{ ...style.pstyle, ...style.boldtext}}>Last Login</p>
                <p style={style.pstyle}>Never</p>
            </div>

            <div style={style.details}>
                <p style={{ ...style.pstyle, ...style.boldtext}}>Login Count</p>
                <p style={style.pstyle}>0</p>
            </div>
        </>
    )
}

export default TopDetails;