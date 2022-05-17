import React from "react";
import { useSelector } from "react-redux";
import { Row } from "react-bootstrap";
import "./navBar.scss";

const navBar = () => {
  const toggle = useSelector((state) => state.topBar.toggle);
  console.log(localStorage);

  return (
    <div className={!toggle ? "nav-bar-closed navi-bar" : "nav-bar navi-bar"}>
      <span>Filters</span>
      <div className="">
        <div className={!toggle ? "d-none" : ""}>
          <h1>Shipment Search</h1>
        </div>
        <div className={!toggle ? "d-none" : ""}>
          <span>Shipment number</span>
        </div>
      </div>
      <textarea rows="7" cols="25" className={!toggle ? "d-none" : "m-auto"} style={{overflowY: "scroll", resize: "none"}}></textarea>
      <h2 className={!toggle ? "d-none" : ""}>Status</h2>
      <Row className={!toggle ? "d-none" : ""}>
          <div className='col-1'>
              <input type="checkbox" className='mt-2' name=" Auto Tendered" id="AutoTendered" />
          </div>
          <div className='col'>
              <label htmlFor="AutoTendered">AutoTendered</label>
          </div>
      </Row>
      <Row className={!toggle ? "d-none" : ""}>
          <div className='col-1'>
              <input type="checkbox" className='mt-2' name="Closed" id="Closed" />
          </div>
          <div className='col'>
              <label htmlFor="Closed">Closed</label>
          </div>
      </Row>
      <Row className={!toggle ? "d-none" : ""}>
          <div className='col-1'>
              <input type="checkbox" className='mt-2 mb-3' name="BOL" id="BOL"/>
          </div>
          <div className='col'>
              <label htmlFor="BOL">BOL</label>
          </div>
      </Row>

      <label htmlFor="ShipDate" className={!toggle ? "d-none" : ""}>Ship Date</label>
      <input type="text" name="ShipDate" id="ShipDate" className={!toggle ? "d-none" : ""}/>

      <label htmlFor="CreatedDate" className={!toggle ? "d-none" : ""}>Created Date</label>
      <input type="text" name="CreatedDate" id="CreatedDate" className={!toggle ? "d-none" : ""}/>

      <label htmlFor="ShipmentTerms" className={!toggle ? "d-none" : ""}>Shipment Terms</label>
      <select name="ShipmentTerms" id="ShipmentTerms" className={!toggle ? "d-none" : ""}>
          <option value=""></option>
      </select>
    </div>
  );
};

export default navBar;
