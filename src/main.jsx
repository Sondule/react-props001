import React from "react";
import './main.css';
function main({color,code,name}) {
    return(
        <>
        <div className="mainContain">
          <div style={{background:color}} className="color"></div>
          <div className="colorCode">
            <h2>{code}</h2>
            <p style={{color:color}}>{name}</p>
          </div>
        </div>
        </>
    );
}

export default main;