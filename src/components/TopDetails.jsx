import React from 'react'

function TopDetails() {

    const style = {
        details: {
            display: "inline-block",
            margin: '5px 15px 5px 0px'
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
            <p style={{ ...style.pstyle, ...style.boldtext}}>Title</p>
            <p style={style.pstyle}>Name</p>

            <div style={style.details}>
                <p style={{ ...style.pstyle, ...style.boldtext}}>Email</p>
                <p style={style.pstyle}>Email Address</p>
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