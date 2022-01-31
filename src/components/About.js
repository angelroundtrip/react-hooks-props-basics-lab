import React from "react";
import Links from "./Links"

// function Bio(props){
//   return <p>{props.bio}</p>;
// }

// function BioIsAvailable(props) {
//    const bio = props.bio
//     if (bio) { 
//      return <Bio />
//   }

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
    
      {props.bio ? <p>{props.bio}</p> : null}
      {/* <BioIsAvailable /> */}

      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />

      <Links />
    </div>
  );
}

export default About;
