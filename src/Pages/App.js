import React, { useState } from 'react';
import AppComponent from "../Component/AppComponent";
import { Col, Row } from "react-bootstrap";
const App=()=> {
   const [customerList,setCostomerList] = useState([]);
  const addList =(data)=>{
      setCostomerList([...customerList,data])
  }
  return (
    <div className="container">
      <Row>
        <Col lg={3} md={3} sm={3} xs={3} />
        <Col lg={6} md={6} sm={6} xs={6}>
          <AppComponent addList={addList} customerList={customerList}/>
        </Col>
      </Row>
    </div>
  );
}

export default App;
