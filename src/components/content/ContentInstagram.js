import React from 'react'
import Card from '../Card';


function ContentInstagram(){
    return(
        <>
        <div>
        <center>
            <img className="headingLogo" src="https://img.shields.io/badge/Instagram-%23E4405F.svg?style=for-the-badge&logo=Instagram&logoColor=white" width="200px" alt="Instagram Logo"/>
        </center>
        <div className="big-box grid2">
        <Card 
            title="Gbox"
            description="Toolkit for Instagram. We bring you, the world's first toolbox, that has multiple tools to help you level up your Instagram game. Loaded with Tons of features"
            urlLink="https://play.google.com/store/apps/details?id=com.dageek.socialtoolbox_android"
            logo="https://play-lh.googleusercontent.com/FehqWqTrWpgZoDNMmwBHM16E-CEdBlpgGSEDGFWizRGpR4JIi13cuTab8NtC6w6dS-o=s180-rw" 
        />
        <Card 
            title="InMyStalker"
            description="The most real follower analysis program. Be notified instantly who left the tracking. If you are wondering who looked at my Instagram Profile, this app is for you. Ease of use with the most real results and easy interface."
            urlLink="https://play.google.com/store/apps/details?id=com.mystalker.profile"
            logo="https://play-lh.googleusercontent.com/xvQ8p8NaKwR7qeGN6RM9GCUacbaDKXnltodG87_n2Q4YSz-z33wGtbMGnX2050Z6pPM=s180-rw" 
        />
        <Card 
            title="FastSave"
            description="FastSave helps to Browse, save photos and videos to your device for free with more than 10 Million users."
            urlLink="https://play.google.com/store/apps/details?id=photo.video.instasaveapp"
            logo="https://play-lh.googleusercontent.com/MzMHneIi9V4WxBt3sHPxyMOJHGkV4AwiqptPPCKLM8f5pYWdRQm1D3lIAnHRQk1rkA=s180-rw" 
        />
        <Card 
            title="Story Saver"
            description="Story Saver for Instagram and video downloader help you to save and download Video / Photo / Story / Reels /Highlight from Instagram and IGTV to your phone."
            urlLink="https://play.google.com/store/apps/details?id=com.storysaver.instagramdownloader"
            logo="https://play-lh.googleusercontent.com/qAUMF76maTaY6PbR4T6cVi8epvFfh6Cmc-RaMlJp_eDn9-5VxIgMFt7dVFulNTCBT6lJ=s180-rw" 
        />
            <Card
                title="Canva"
                description="All in One Designing Tool. Create Posts, Banners, Videos, Presentations and many more !"
                urlLink="https://www.canva.com/"
                logo="https://static.canva.com/static/images/apple-touch-120x120-1.png" 
            />
        <Card 
            title="Unfollow"
            description="Instagram Account Management Tool to help you unfollow users who do not follow you and follow back users who follow you."
            urlLink="https://play.google.com/store/apps/details?id=com.follow.unfollow"
            logo="https://play-lh.googleusercontent.com/5JUAFgq-W1-9YgOi_SL3jBES4qaxXrBCJNPNJH4PDferj4iFASaUbU0PE83YaolwZDeu=s180-rw" 
        /> 
        <Card 
            title="Hootsuite"
            description="Schedule Posts for Instagram. Create, Edit, Publish your Content. Engage with your audience like never before."
            urlLink="https://play.google.com/store/apps/details?id=com.hootsuite.droid.full"
            logo="https://play-lh.googleusercontent.com/kgaj85DdhTfGNw-gyX3Mgbmu5FIdiwbvZA0ub-_7TUsrffrADsPyZrb5W-UIBIYKTw=s180-rw" 
        />
        </div>
        </div>              
        </>
    );
}


export default ContentInstagram;