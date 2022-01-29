import { useState } from "react";
import LoginPage from "./login-page";
import Sidenav from "./sidenav";
import "bootstrap/dist/css/bootstrap.min.css";
import ReimburseTicket from "./reimburseTicket";
import EmployeeHistTbl from "./employeeHistTbl";
import MgmtAllPending from "./mgmtAllPending";
import "../App.css";
import MgmtStats from "./mgmtStats";

export default function ManagerHomePage() {
    return(<>
        <Sidenav />
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