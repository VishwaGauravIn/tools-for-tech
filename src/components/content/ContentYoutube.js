import React from 'react'
import Card from '../Card';


export default function ContentYoutube(params) {
    return(
        <>
        <div>
        <center>
            <img className="headingLogo" src="https://img.shields.io/badge/YouTube-%23FF0000.svg?style=for-the-badge&logo=YouTube&logoColor=white" width="200px" alt="YouTube Logo"/>
        </center>
        <div className="big-box grid2">
        <Card 
            color="bg-gradient-10"
            title="YouTube Vanced"
            description="YouTube with extra features. Blocks All videos ads and allows you to play videos in the background or in Picture in Picture, Swipe controls, Sponsor Block and tons of customisations."
            urlLink="https://vancedapp.com/"
            logo="https://vancedapp.com/static/media/logo.866a4e0b.svg" 
        />
        <Card 
            color="bg-gradient-1"
            title="YTplaylist-len"
            description="Find the length of any YouTube playlist"
            urlLink="https://ytplaylist-len.herokuapp.com/"
            logo="https://i.imgur.com/i3wOFEs.png" 
        />
        <Card 
            color="bg-gradient-12"
            title="YouTube Studio"
            description="Manage your YouTube channels on the go. Check out your latest stats, respond to comments, upload custom video thumbnail images, schedule videos, and get notifications so you can stay connected and productive from anywhere."
            urlLink="https://play.google.com/store/apps/details?id=com.google.android.apps.youtube.creator"
            logo="https://play-lh.googleusercontent.com/SM1nwJaePNm9Q6vVgU0CvvmR1uozbZYU8ohKfBCIndZy0sSGtwmObhpBcUkTOqcyYg=s180-rw" 
        />
        <Card 
            color="bg-gradient-7"
            title="y2mate"
            description="Download Video and Audio from YouTube"
            urlLink="https://www.y2mate.com/"
            logo="https://www.y2mate.com/themes/images/logo.png" 
        />
        <Card 
            color="bg-gradient-6"
            title="Intro Maker"
            description="Using this intro creator, you can easily create professional video intros and outros ending card (end screen) for your YT channel, no matter Gaming Stream or Social vlog."
            urlLink="https://play.google.com/store/apps/details?id=com.ryzenrise.intromaker"
            logo="https://play-lh.googleusercontent.com/N6SM2qvxBrxVyD-WGT6RxHY5WKslzGtIaSX96yqtuZ5MUkHxu_Y-rK536Wn-7LCgdw=s180-rw" 
        />
        <Card 
            color="bg-gradient-3"
            title="Thumbnail & Channel Art Maker"
            description="Create compelling thumbnail, channel art and banner of videos in thumbnail maker for FREE!"
            urlLink="https://play.google.com/store/apps/details?id=com.ryzenrise.thumbnailmaker"
            logo="https://play-lh.googleusercontent.com/W-z2puouUJ_ZDRiZxZ4NJl1Mi-TDJ9NVTz6XBbtO17po8Ave86MTPin_9NVm6_QF-V8=s180-rw" 
        />
        <Card 
            color="bg-gradient-4"
            title="NewPipe"
            description="An OpenSource project to get YouTube experience on your smartphone without annoying ads and questionable permissions. Download Videos, Background player, Pop-up Player, etc"
            urlLink="https://newpipe.net/"
            logo="https://newpipe.net/img/logo.svg" 
        />
        </div>
        </div>
        </>
    );
};
