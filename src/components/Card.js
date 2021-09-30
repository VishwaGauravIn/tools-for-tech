// Copyright github.com/VishwaGauravIn - Reuse Allowed

import React from 'react'
/*
required Params-
color:
title:
description:
urlLink:
image:
*/
/*
This card component needs Bootstrap css, App.css and colors.css to work properly; either use them or copy that code and paste in a single css file and then import/attach it
*/

export default function Card(params) {
    return(
        <>
        <div className="main grid-item">
            <a href={params.urlLink} className="urlLinkCard">
        <div className="card">
            
        <div className={params.color}>
        
        <div className="card-body">
            <img src="https://lh3.googleusercontent.com/DUDj_0JiJZ1TFiUuiIVGUY0jTK3aCpdHjAZncoN1sPsTabo2WcCXnXtaG56wRImGiLM8xppnyzpzNNyy5d-6IK4R=w128-h128-e365-rj-sc0x00ffffff" alt="" className="card-image" width="50px"/>
            <h5 className="card-title">{params.title}</h5>
            <p className="card-text">{params.description}</p>
        
        </div>
        </div>
        </div>
        </a>
        </div>
        </>
    );
}