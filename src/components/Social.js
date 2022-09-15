import React from "react";
import fbSVG from './fb.svg';
import twitSVG from './twitter.svg';
import instaSVG from './insta.svg';
import gitSVG from './github.svg';

export default function Socials(){
    return(
        <div className="socialsContainer">
            <div className="twitter"><img src={fbSVG} alt="" /></div>
            <div className="facebook"><img src={twitSVG} alt="" /></div>
            <div className="instagram"><img src={instaSVG} alt="" /></div>
            <div className="github"><img src={gitSVG} alt="" /></div>
        </div>
    )
}