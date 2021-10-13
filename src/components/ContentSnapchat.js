import Card from "./Card";

export default function ContentSnapchat(params) {
    return(
        <>
        <div>
        <center>
            <img className="headingLogo" src="https://img.shields.io/badge/Snapchat-%23FFFC00.svg?style=for-the-badge&logo=Snapchat&logoColor=white" width="200px" alt="Snapchat Logo"/>
        </center>
        <div className="big-box grid2">
        <Card 
            color="bg-gradient-7"
            title="Bitmoji"
            description="Bitmoji is your own personal emoji.Create an expressive cartoon avatar, Choose from a huge library of stickers – all featuring YOU, Use Bitmoji in Snapchat and wherever else you chat"
            urlLink="https://play.google.com/store/apps/details?id=com.bitstrips.imoji"
            logo="https://play-lh.googleusercontent.com/TdM1HpnaHHY3MIGHt_gEzrP85nTdCcWxfqG4S5223aslDu8IzksaDOs72ISMyHRi6V8=s180-rw"
        />
        <Card 
            color="bg-gradient-4"
            title="Hoop"
            description="With Hoop, you can make new friends, discover new cultures, grow your Snapchat community, fill your Snap map and much more!"
            urlLink="https://play.google.com/store/apps/details?id=com.dazz.hoop"
            logo="https://play-lh.googleusercontent.com/V9hmtVI2-6ZUbpjTfJljdwF3LszxBxGsUZuhk2dc3Z2oLOnPz67bY7PSkIKd4CuUc0M=s180-rw"
        />
        <Card 
            color="bg-gradient-3"
            title="RPLY"
            description="Reply directly in your stories or in your snaps, Customize your questions,Anonyomus Q&A for Snapchat"
            urlLink="https://play.google.com/store/apps/details?id=com.ignates.snapreply"
            logo="https://play-lh.googleusercontent.com/g8F9IXW-Zn81IV8JXeK9ZgkU40cL3BO0QDoy9abymqkPC2PkQ4bSZc59m8hdqc1dVqY=s180-rw"
        />
        <Card 
            color="bg-gradient-8"
            title="Snap Kit"
            description="Grow and Monetize Your Products With Snapchat’s Best Features. Kits from Snapchat like: Creative kit, Login kit, Camera kit, Story kit and more."
            urlLink="https://kit.snapchat.com/"
            logo="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/f70w15zgvmrbjern9vax"
        />
        </div>
        </div>              
        </>   
    );
};
