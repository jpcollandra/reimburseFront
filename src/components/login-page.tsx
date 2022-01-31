import { useRef } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import logo from "./walmartLogo.svg";

export default function LoginPage(props: { updateUser: Function }) {
  const usernameInput = useRef(null);
  const passwordInput = useRef(null);

  async function login() {
    const loginPayload = {
      username: usernameInput.current.value,
      password: passwordInput.current.value,
    };

    const response = await fetch("https://onewalmart.azurewebsites.net/login", {
      method: "PATCH",
      body: JSON.stringify(loginPayload),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const employee = await response.json();
    props.updateUser({
      username: employee.username,
      isAuthorized: employee.isAuthorized,
      isAdmin: employee.isAdmin,
    });

    sessionStorage.setItem("username", employee.username);
    sessionStorage.setItem("id", employee.id);
    sessionStorage.setItem("isEmployee", `${employee.isAuthorized}`);
    sessionStorage.setItem("isAdmin", `${employee.isAdmin}`);
  }

  return (
    <>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form>
          <img src={logo}
          width="200"
          height="100"
          alt="Logo" />

            <div className="form-group">
              <label htmlFor="usernameInput">Username</label>
              <input
                ref={usernameInput}
                className="form-control"
                type="text"
                id="usernameInput"
                placeholder="employee_username"
              />
            </div>

            <div className="form-group">
              <label htmlFor="passwordInput">Password</label>
              <input
                ref={passwordInput}
                className="form-control"
                type="password"
                id="passwordInput"
                placeholder="password"
              />
            </div>

            <div className="form-group">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>

            <Button onClick={login} className="btn btn-primary btn-block">
              Submit
            </Button>

          </form>
        </div>
      </div>
    </>
  );
}
