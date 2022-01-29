import Navbar from "react-bootstrap/Navbar";
import {
  Container,
  Offcanvas,
  NavDropdown,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap/";
import logo from "./walmartLogo.svg";


export default function Sidenav() {

  
  return (
    <Navbar bg="light">
    <Container>
    <Navbar.Brand href="#home">
      <img
        src={logo}
        width="200"
        height="40"
        className="d-inline-block align-top"
        alt=""
      /></Navbar.Brand>
    </Container>
  </Navbar>
  );
}
