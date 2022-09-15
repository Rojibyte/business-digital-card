import React from "react";

export default function Title(props){
    return(        
        <div className="titleContainer">
          <h1>{props.name}</h1>
          <h2>{props.title}</h2>
          <p>{props.website}</p>
        </div>
    )
}