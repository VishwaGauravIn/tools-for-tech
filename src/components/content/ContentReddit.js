import Card from "../Card";

export default function ContentReddit(params) {
    return(
    <div>
    <center>
        <img className="headingLogo" src="https://img.shields.io/badge/Reddit-FF4500?style=for-the-badge&logo=reddit&logoColor=white" width="200px" alt="Twitter Logo"/>
    </center>
    <div className="big-box grid2">
    <Card 
            color="bg-gradient-3"
            title="Infinity"
            description="Infinity is a beautiful, feature-rich app that offers a smooth Reddit browsing experience. It is completely free and ad-less; you can browse Reddit without interruptions or distractions. Built by a passionate university student, Infinity is open source."
            urlLink="https://play.google.com/store/apps/details?id=ml.docilealligator.infinityforreddit"
            logo="https://play-lh.googleusercontent.com/m6jSo9ki-Vga40SDj0bJrZHW7ma0h56EtNPfoNqYjzW_ehlrXodWpBsK8f_IH1p3VA=s180-rw"
        />
        <Card 
            color="bg-gradient-9"
            title="Viddit"
            description="Viddit offers a quick and easy way to download videos from Reddit. Viddit will download videos from Reddit with audio. Features: Easily download videos with audio from Reddit. Share the videos to any app directly from the Viddit app. Access all your downloaded videos right inside the app. Play downloaded videos right from the app."
            urlLink="https://play.google.com/store/apps/details?id=aculix.viddit.downloader"
            logo="https://play-lh.googleusercontent.com/8bxhG087U3uW-30ea01ZIC5pmDnzTFebYNRWWVkCbYOMJjOdzNW28PEvGTxhzR5gzyw=s180-rw"
        />
        <Card 
            color="bg-gradient-11"
            title="Offline Reader for Reddit"
            description="Everything in this app was designed with offline in mind. Being able to use this app when there's no internet is the top priority when making decisions. It currently pre-downloads text posts, images (including gifs, videos, and imgur albums), and reddit comments, for offline use. You can also schedule the app at specified times during the day."
            urlLink="https://play.google.com/store/apps/details?id=yy.offlinereader"
            logo="https://play-lh.googleusercontent.com/_coOn-3X_ccAVJcEYahxALDA5j8PSrfcsdH1QlI3nZBjIxX73avY7Z0MwMawrujdTjs=s180-rw"
        />
        <Card 
            color="bg-gradient-12"
            title="Wallpaper Changer for Reddit"
            description="Your lockscreen and homescreen deserve some variety. This app uses pictures from Reddit to provide an unlimited source of high resolution wallpapers based on your favorite subreddits and categories. The app runs in the background and manages your wallpapers for you. With custom schedules from hourly to daily, you can have an automatic slideshow on your homescreen or lockscreen. The settings are heavily customizable, with tons of options such as post filtering, rank sorting, image effects, and preset categories"
            urlLink="https://play.google.com/store/apps/details?id=com.bryanwalsh.redditwallpaper2"
            logo="https://play-lh.googleusercontent.com/Ea8usQOYsWN2_igG9IZ9sCSqctTJlqiOP4Qe8EjT6QqdcUuAeDb97L1MN4Q9oafxRQ=s180-rw"
        />
    </div>
        </div>
    );
};
