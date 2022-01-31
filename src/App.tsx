import { useState } from 'react';
import LoginPage from './components/login-page';
import EmployeeHomePage from './components/employee-home-page';
import "./App.css";
import ManagerHomePage from './components/manager-home-page';


export default function App() {


  const [user, setUser] = useState({
    username:sessionStorage.getItem('username'), 
    isAuthorized:Boolean(sessionStorage.getItem("isAuthorized") === "true" ? true : false),
    isAdmin: Boolean(sessionStorage.getItem("isAdmin") === "true" ? true : false) ,
  })

  return (<>
    {
    !user.username ? <LoginPage updateUser={setUser}/>: 
    user.isAdmin ? <ManagerHomePage/>:<EmployeeHomePage/>
    } 
  </>);
}

