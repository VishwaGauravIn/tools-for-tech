// Copyright github.com/VishwaGauravIn - Reuse Allowed

import React from 'react'
/*
required Params-
color:
title:
description:
urlLink:
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