import React from 'react'

function TopDetails(){

    const style = {
        details: {
            display: "inline-block",
            margin: '5px'
        },
        pstyle: {
            margin: "0"
        }
    }

    return(
        <>
        <p style={style.pstyle}>Title</p>
        <p style={style.pstyle}>Name</p>

        <div style={style.details}>
        <p style={style.pstyle}>Email</p>
        <p style={style.pstyle}>Email Address</p>
        </div>
        <div style={style.details}>
        <p style={style.pstyle}>Phone</p>
        <p style={style.pstyle}>123-456-7890</p>
        </div>
        <div style={style.details}>
        <p style={style.pstyle}>Last Login</p>
        <p style={style.pstyle}>Never</p>
        </div>
        <div style={style.details}>
        <p style={style.pstyle}>Login Count</p>
        <p style={style.pstyle}>0</p>
        </div>
        </>
    )
}

export default TopDetails;