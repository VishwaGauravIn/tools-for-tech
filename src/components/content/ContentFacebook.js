import React from 'react'
import Card from '../Card';


export default function ContentYoutube(params) {
    return(
        <>
        <div>
        <center>
            <img className="headingLogo" src="https://img.shields.io/badge/Facebook-%231877F2.svg?style=for-the-badge&logo=Facebook&logoColor=white" width="200px" alt="Facebook Logo"/>
        </center>
        <div className="big-box grid2">
        <Card 
            color="bg-gradient-12"
            title="FDown"
            description="Facebook Video Downloader"
            urlLink="https://fdown.net/"
            logo="https://fdown.net/img/apple-touch-icon-144-precomposed.png" 
        />

        <Card 
            color="bg-gradient-12"
            title=""
            description=""
            urlLink=""
            logo="" 
        />

        <Card 
            color="bg-gradient-12"
            title=""
            description=""
            urlLink=""
            logo="" 
        />

        <Card 
            color="bg-gradient-12"
            title=""
            description=""
            urlLink=""
            logo="" 
        />
        </div>
        </div>
        </>
    );
};
