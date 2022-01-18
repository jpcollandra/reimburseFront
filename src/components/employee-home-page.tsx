import { useState } from "react";
import Sidenav  from "./sidenav";
import 'bootstrap/dist/css/bootstrap.min.css'
import ReimburseTicket from "./reimburseTicket";
import EmployeeHistTbl from "./employeeHistTbl";
import MgmtAllPending from "./mgmtAllPending";
import "../App.css"


export default function EmployeeHomePage(){

    const [user, setUser] = useState({
        username:sessionStorage.getItem('username'), 
        isAuthorized:Boolean(sessionStorage.getItem("isAuthorized")),
        status:sessionStorage.getItem('status'),
        isAdmin:Boolean(sessionStorage.getItem("isAdmin"))
      })



    return(<>
        <Sidenav/>|
        <MgmtAllPending />
    </>)
}