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
            color="bg-gradient-13"
            title="NoSeen"
            description="A privacy-focused & dark themed Facebook client built from scratch. Super fast & lightweight! Block sponsored posts! Block user activity tracking! No bloated features! Enjoy a fast & pure private Facebook."
            urlLink="https://play.google.com/store/apps/details?id=com.stackwares.android.noseen.facebook"
            logo="https://play-lh.googleusercontent.com/Z_dOzRmJXcizOU9m9Q9_UWhNM6X1z5GGTLd5_jcPU0CNmWbVO_cl_c3GdXx7l6TsefLU=s180-rw" 
        />

        <Card 
            color="bg-gradient-2"
            title="Creator Studio"
            description="Tools designed to make scheduling, analyzing and monetizing your videos easier than ever, the Creator Studio app has something for anyone looking to bring the very best content to their audience."
            urlLink="https://play.google.com/store/apps/details?id=com.facebook.creatorstudio"
            logo="https://play-lh.googleusercontent.com/mkteeCLsz1KY6WBGus4gXZlSMLsjX_xPEaNzgIibFibgpD_nAmVacMTIFH8Sbft9sWU=s180-rw" 
        />

        <Card 
            color="bg-gradient-1"
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
