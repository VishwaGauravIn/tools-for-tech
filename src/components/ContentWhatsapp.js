import React from 'react'
import Card from './Card';

function ContentWhatsapp(){
    return(
        <>
        <div>
        <center>
            <img className="headingLogo" src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" width="200px" alt="WhatsApp Logo"/>
        </center>
        <div className="big-box grid2">
                <Card color="bg-gradient-10" title="Bobble Indic Keyboard" description="Make your conversation interesting and fun. Bobble Keyboard has everything you ever wanted from your keyboard like: Live Cricket Score, POP Text, YouMoji, BigMoji, stickers, GIFs, Fonts, Themes,glide typing, voice typing and much more!" urlLink="https://play.google.com/store/apps/details?id=com.touchtalent.bobbleapp"></Card>
                <Card color="bg-gradient-7" title="Cooby" description="Sort your chats into tabs on WhatsApp. Find the chat thread you want faster, and never miss a message again! Cooby allows you to group your chats into tabs on WhatsApp. You won’t have to see all chats at once and scroll all over to find one chat." urlLink="https://chrome.google.com/webstore/detail/cooby-supercharge-whatsap"></Card>

        </div>
        </div> 
        </>
    );
}

export default ContentWhatsapp;

