import React from "react";
import Card from "../Card";

/*
Params-
color:
title:
description:
urlLink:
logo:
*/

// Twitter Tools

export default function ContentTwitter(params) {
  return (
    <div>
      <center>
        <img
          className="headingLogo"
          src="https://img.shields.io/badge/Twitter-%231DA1F2.svg?style=for-the-badge&logo=Twitter&logoColor=white"
          width="200px"
          alt="Twitter Logo"
        />
      </center>
      <div className="big-box grid2">
        <Card
          title="BlackMagic܁so"
          description="It is a Twitter growth tool using forbidden magic and Twitter API. Create dynamic banners, profile pic and many more."
          urlLink="https://blackmagic.so/"
          logo="https://blackmagic.so/apple-touch-icon.png"
        ></Card>
        <Card
          title="Poet܁so"
          description="Capture and share twitter posts as beautiful images."
          urlLink="https://poet.so/"
          logo="https://poet.so/favicon.ico"
        ></Card>
        <Card
          title="What to Tweet"
          description="Never again run out of tweet ideas. Get personalized Tweet inspirations."
          urlLink="https://whattotweet.com/"
          logo="https://tweethunter.io/assets/images/favicon.png?v=c99bed29"
        ></Card>
        <Card
          title="Twitter Threads"
          description="Browse and Learn From The Best Twitter Threads. Find, Discover and Read from 500+ best Twitter Threads by your favorite creators across 25+ categories."
          urlLink="https://twittrgems.upskillindia.org/"
          logo="https://twittrgems.upskillindia.org/gem.png"
        ></Card>
        <Card
          title="listr"
          description="Discover the best of Twitter lists. 100+ most interesting lists curated across trending domain. Dedicated timelines,Focus only on content & people that matter, ignore the unpleasant side."
          urlLink="https://www.listr.pro/"
          logo="https://softr-prod.imgix.net/applications/a91d0970-db80-4581-9b3f-2452fd2f0379/assets/f5475077-bf85-4164-adc3-b1c354c71490.png?rnd=1631429275652"
        ></Card>
        <Card
          title="Epic Jobs"
          description="Epic Jobs helps you find job opportunities and helps you learn more about the people behind them via curated tweets, video introductions, interviews, and office tours."
          urllink="https://epicjobs.co/"
          logo="https://epicjobs.co/wp/wp-content/themes/epicjobs/images/favicon.png"
        ></Card>
        <Card
            title="Canva"
            description="All in One Designing Tool. Create Posts, Banners, Videos, Presentations and many more !"
            urlLink="https://www.canva.com/"
            logo="https://static.canva.com/static/images/apple-touch-120x120-1.png" 
        />
        <Card
          title="Typefully"
          description="Typefully is a distraction-free editor to write and publish condensed ideas. See a live-preview of your thread while you write it, save multiple drafts, schedule, and publish in a focused environment."
          urlLink="https://typefully.app/"
          logo="https://typefully.app/_next/image?url=%2Fimages%2Flogo.svg&w=48&q=75"
        ></Card>
        <Card
          title="RevSync"
          description="RevSync syncs your Twitter newsletter subscribers to your existing newsletter tool. Your followers can easily subscribe on Twitter, and you can keep using the tools you love."
          urlLink="https://www.revsync.io/"
          logo="https://www.revsync.io/apple-touch-icon.png"
        ></Card>
        <Card
          title="RiteTag"
          description="No idea which hashtags to use? Get instant hashtag suggestions for images and texts on desktop and mobile. Based on real time hashtag engagement."
          urlLink="https://ritetag.com/"
          logo="https://cdn.ritekit.com/assets/img/ritetag/apple-icon-72x72.png"
        ></Card>
        logo=""
      </div>
    </div>
  );
}
