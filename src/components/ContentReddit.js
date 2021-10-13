import Card from "./Card";

export default function ContentReddit(params) {
    return(
    <div>
    <center>
        <img className="headingLogo" src="https://img.shields.io/badge/Reddit-FF4500?style=for-the-badge&logo=reddit&logoColor=white" width="200px" alt="Twitter Logo"/>
    </center>
    <div className="big-box grid2">
    <Card 
            color="bg-gradient-3"
            title=""
            description=""
            urlLink=""
            logo=""
        />
        <Card 
            color="bg-gradient-9"
            title=""
            description=""
            urlLink=""
            logo=""
        />
    </div>
        </div>
    );
};
