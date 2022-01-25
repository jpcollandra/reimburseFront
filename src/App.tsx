import React, { createContext, useEffect, useState } from 'react';
import LoginPage from './components/login-page';
import EmployeeHomePage from './components/employee-home-page';
import "./App.css";

export default function App() {

  const [user, setUser] = useState({
    username:sessionStorage.getItem('username'), 
    isAuthorized:Boolean(sessionStorage.getItem("isAuthorized"))
  })

  return (<>
    {
    !user.username ? <LoginPage updateUser={setUser}/>: 
    user.isAuthorized ? <EmployeeHomePage/>:<EmployeeHomePage/>
    } 
  </>);
}

