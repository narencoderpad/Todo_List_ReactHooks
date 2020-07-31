import React from "react";

function InputComponent(props){
    return(
        <input type={props.type} data-testid={props.testid} className={props.className} placeholder={props.placeholder} id={props.id} onChange={(event)=>{props.handleChange(event.target.value)}} value={props.value}/>
    )
}

export default InputComponent;