import React from "react";
import { useSelector } from "react-redux";
import {
  Tabs,
  Tab,
  Form,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaSearch } from "react-icons/fa";
import "./index.scss";
import ManageShipments from "../Manage Shipments/ManageShipments";
import ShipmentInformation from "../ShipmentInformation/ShipmentInformation";
import Shipments from "../Shipments/Shipments";

const index = () => {
  const toggle = useSelector((state) => state.topBar.toggle);
  return (
    <div className="content">
      <div className=" container-fluid d-flex index justify-content-center">
        <div className="row">
            <ShipmentInformation/>
          <div>
            <ManageShipments/>
          </div>
          <div>
            <Shipments/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
