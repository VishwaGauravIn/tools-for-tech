import React from 'react'
import Card from './Card';
/*
Params-
color:
title:
description:
urlLink:
*/

// Twitter Tools

export default function ContentTwitter(params) {
    return(
        <>
        <center>
            <img className="headingLogo" src="https://img.shields.io/badge/Twitter-%231DA1F2.svg?style=for-the-badge&logo=Twitter&logoColor=white" width="200px" alt="Twitter Logo"/>
        </center>
        <div className="big-box grid">
                <Card color="bg-gradient-1" title="BlackMagic.so" description="It is a Twitter growth tool using forbidden magic and Twitter API. Create dynamic banners, profile pic and many more." urlLink="https://blackmagic.so/"></Card>
                <Card color="bg-gradient-2" title="Poet.so" description="Capture and share twitter posts as beautiful images." urlLink="https://poet.so/"></Card>
                <Card color="bg-gradient-3" title="What to Tweet" description="Never again run out of tweet ideas. Get personalized Tweet inspirations." urlLink="https://whattotweet.com/"></Card>
                <Card color="bg-gradient-4" title="Twitter Threads" description="Browse and Learn From The Best Twitter Threads. Find, Discover and Read from 500+ best Twitter Threads by your favorite creators across 25+ categories." urlLink="https://twittrgems.upskillindia.org/"></Card>
                <Card color="bg-gradient-5" title="listr" description="Discover the best of Twitter lists. 100+ most interesting lists curated across trending domain. Dedicated timelines,Focus only on content & people that matter, ignore the unpleasant side." urlLink="https://www.listr.pro/"></Card>
                <Card color="bg-gradient-6" title="Epic Jobs" description="Epic Jobs helps you find job opportunities and helps you learn more about the people behind them via curated tweets, video introductions, interviews, and office tours." urllink="https://epicjobs.co/" ></Card>
                <Card color="bg-gradient-7" title="Typefully" description="Typefully is a distraction-free editor to write and publish condensed ideas. See a live-preview of your thread while you write it, save multiple drafts, schedule, and publish in a focused environment." urlLink="https://typefully.app/"></Card>
            

        </div>
        </> 
    );
}
