import React from "react";
 
function ButtonComponent(props){
      return(
            <button data-testid={props.testid} onClick={props.handleClick} className="btn btn-primary">{props.BtnText}</button>
       );
}
export default ButtonComponent;