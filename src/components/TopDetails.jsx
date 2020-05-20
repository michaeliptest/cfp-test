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
        },
        titlefont: {
            fontFamily: 'Helvetica',
            fontSize: '16px'
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

            <p style={{ ...style.pstyle, ...style.boldtext,...style.titlefont}}>Investor</p>
            <p style={{...style.pstyle, ...style.titlefont}}>Jim Jones</p>

            <div style={style.details}>
                <p style={{ ...style.pstyle, ...style.boldtext,...style.titlefont}}>Email</p>
                <p style={{...style.pstyle, ...style.titlefont}}>jim.jones@yahoo.com</p>
            </div>

            <div style={style.details}>
                <p style={{ ...style.pstyle, ...style.boldtext,...style.titlefont}}>Phone</p>
                <p style={{...style.pstyle, ...style.titlefont}}>123-456-7890</p>
            </div>

            <div style={style.details}>
                <p style={{ ...style.pstyle, ...style.boldtext,...style.titlefont}}>Last Login</p>
                <p style={{...style.pstyle, ...style.titlefont}}>Never</p>
            </div>

            <div style={style.details}>
                <p style={{ ...style.pstyle, ...style.boldtext,...style.titlefont}}>Login Count</p>
                <p style={{...style.pstyle, ...style.titlefont}}>0</p>
            </div>
        </>
    )
}

export default TopDetails;