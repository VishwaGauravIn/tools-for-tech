// Copyright github.com/VishwaGauravIn - Reuse Allowed

import React from "react";
import { db } from "./modal/form/firebase";
import firebase from '@firebase/app-compat';
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
  
  const increment = firebase.firestore.FieldValue.increment(1);
  const ToolName = params.title
  const ToolClickVal = db.collection('ToolsAnalytics').doc('Tools');
  const clickFun = () => {
    ToolClickVal.update({ [ToolName]:increment })
    window.open(params.urlLink,"_blank")
  }
  // const randomNum = Math.floor(Math.random() * (10 - 1) + 1); // generate random number from 10 to 1
  // const color = "bg-gradient-"+ Math.floor(Math.random() * (13 - 1 + 1) + 1);
  return (
    <>
      <div className="main grid-item" onClick={clickFun}>
        <a href={clickFun} className="urlLinkCard">
          {/* {params.urlLink} */}
          <div className="card">
            <div className={params.color}>
              <div className="card-body">
                <img
                  src={params.logo}
                  alt=""
                  className="card-image"
                  width="50px"
                />
                <h5 className="card-title"><strong>{params.title}</strong></h5>
                <p className="card-text">{params.description}</p>
                {/* <button class="btn btn-primary">Check it out</button> */}
              </div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}

/*-----------Buffer Template -----------
<Card 
    color="bg-gradient-12"
    title=""
    description=""
    urlLink=""
    logo="" 
/>
*/
