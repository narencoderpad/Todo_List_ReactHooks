import React from "react";

function LabelComponent(props){
   return(
       <label className={props.className} data-testid={props.testid}>{props.textName}</label>
   )
}

export default LabelComponent;