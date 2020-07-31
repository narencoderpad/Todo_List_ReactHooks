import React,{useState } from 'react';
import LabelComponent from "./LabelComponent";
import InputComponent from "./InputComponent";
import ButtonComponent from "./ButtonComponent";
import ListComponent from "./ListComponent";

const AppComponent=(props)=> {
  const [listName,setlistName] = useState("");

  const handleNameChange =(data)=>{
   setlistName(data);
  }
  
  const handleClick=()=>{
     if(listName){
      props.addList(listName)
     }
     setlistName("")
  }
  
  return (
    <div className="App">
         <div className="pad15">
            <LabelComponent className = "pad15" textName={"Customer"} testid="app-title"/><br/>
            <InputComponent className="form-control" testid="app-input" type="text" placeholder="Enter customer name" value={listName} handleChange={handleNameChange} />
         </div>
         <div>
           <ButtonComponent testid="submit-button" handleClick={handleClick} BtnText="Add Customer"/>
         </div>
         <div className="pad15">
              <ListComponent cutomerList={props.customerList}/>
         </div>
    </div>
  );
}

export default AppComponent;
