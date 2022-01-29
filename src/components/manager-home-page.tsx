import { useState } from "react";
import LoginPage from "./login-page";
import Sidenav from "./sidenav";
import "bootstrap/dist/css/bootstrap.min.css";
import ReimburseTicket from "./reimburseTicket";
import EmployeeHistTbl from "./employeeHistTbl";
import MgmtAllPending from "./mgmtAllPending";
import "../App.css";
import MgmtStats from "./mgmtStats";
import { Button } from "react-bootstrap";

export default function ManagerHomePage() {


    
    function logout(){
        sessionStorage.clear()
        window.location.reload()
      }

    return(<>

        <Sidenav />
    <Button onClick={logout} variant="danger" type="submit">
        Logout
      </Button>
        <div className="center-div">   
        <div className="component-space">
          <MgmtAllPending /> 
        </div>
        </div>
        <div className="center-div">    
        <div className="component-space">     
            <MgmtStats/>
        </div>
        </div>
        </>
    )
}