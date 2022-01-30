import { useState } from "react";
import Sidenav from "./sidenav";
import "bootstrap/dist/css/bootstrap.min.css";
import ReimburseTicket from "./reimburseTicket";
import EmployeeHistTbl from "./employeeHistTbl";
import "../App.css";
import { Button } from "react-bootstrap";
export default function EmployeeHomePage() {

  function logout(){
    sessionStorage.clear()
    window.location.reload()
  }
  
  return (
    <>

      <Sidenav />
      <Button onClick={logout} variant="danger" type="submit">
        Logout
      </Button>
      <div className="center-div">   
      <div className="component-space">
         <EmployeeHistTbl />
      </div>
      </div>
      <div className="center-div">    
      <div className="component-space">     
         <ReimburseTicket />
      </div>
      </div>
    </>
  );
}
