import React from "react";
 
const ListComponent = (props)=>{
      return(
            <div>
                {props.cutomerList && props.cutomerList.length !== 0 ? (<ul data-testid="customer-list">
                    {props.cutomerList.map((item,i)=>(
                            <li data-testid={"list-item"+i} key={i}>{item}</li>
                    ))}
                </ul>):""}
            </div>
       );
}
export default ListComponent;