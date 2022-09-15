import React from "react";
import emailBtn from "./email.svg";
import linkedinBtn from "./linkedin.svg";

export default function Button (){
    return(
        <div className="btnContainer">
            <div className="btn-email">
                <a href="http://" target="_blank" rel="noopener noreferrer">
                    <img src={emailBtn} alt="" />
                </a>
            </div>
            <div className="btn-linkedin">
                <a href="http://" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinBtn} alt="" />
                </a>
            </div>
        </div>
    )
}