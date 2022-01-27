import { useState } from "react";
import LoginPage from "./login-page";
import Sidenav from "./sidenav";
import "bootstrap/dist/css/bootstrap.min.css";
import ReimburseTicket from "./reimburseTicket";
import EmployeeHistTbl from "./employeeHistTbl";
import MgmtAllPending from "./mgmtAllPending";
import "../App.css";
import MgmtStats from "./mgmtStats";

export default function EmployeeHomePage() {
  
  const [user, setUser] = useState({
    username: sessionStorage.getItem("username"),
    isAuthorized: Boolean(sessionStorage.getItem("isAuthorized")),
    isAdmin: Boolean(sessionStorage.getItem("isAdmin") === "true" ? true : false) ,
    status: sessionStorage.getItem("status"),
  });
  

  console.log(user.isAdmin)
  
  
  return (
    <>
  
      <Sidenav />
      <div className="component-space">
        {user.isAdmin ? <MgmtAllPending /> : <EmployeeHistTbl />}
      </div>

      <div className="center-div">    
      <div className="component-space">     
          {user.isAdmin ? <MgmtStats/> : <ReimburseTicket />}
      </div>
      </div>
    </>
  );
}
