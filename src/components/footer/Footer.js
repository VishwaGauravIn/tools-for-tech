import React from 'react'
import './footer.css'

const codeText = "</>";
// const pseudoText1 = "<<<<<<<";
// const pseudoText2 = ">>>>>>>";

// function JustAnimate(){
//   var style = document.createElement('style');
//   style.innerHTML = `
//   .pseudo-ele {
//     color: blueviolet;
//     animation: animate 10s;
//   }
//   `;
//   document.head.appendChild(style);   
// }


function Footer(){
    return(
        <>
        <center>
            {/* <div className="pseudo-ele">{pseudoText1}</div> */}
            <div className="foo" /*onClick={JustAnimate}*/ >
                <h2 className="foo">
                    {codeText} with 💛 by
                <h2 className="footer-text">
                    Vishwa Gaurav 
                </h2>
                </h2>
            </div>
            {/* <div className="pseudo-ele">{pseudoText2}</div> */}
        </center>
        </>
    );
}

export default Footer;