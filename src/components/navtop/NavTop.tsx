import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import LoginPopUp from "../loginPopUp/LoginPopUp";

const NavTop = () => {
  const [isShowLogin, setIsShowLogin] = useState(false);
  const handleOnClickIsOpenLoginPopup = useCallback(() => {
    setIsShowLogin((prev) => !prev);
  }, [setIsShowLogin]);
  return (
    <Navbar sticky="top" expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Link to="/">Fake-Posts</Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to="/">Strona główna</Link>
            <Link to="products">Produkty</Link>
            <Link to="posts">Posty</Link>
            <Button variant="primary" onClick={handleOnClickIsOpenLoginPopup}>
              Launch demo modal
            </Button>

            <LoginPopUp
              isShowLogin={isShowLogin}
              setShowLogin={handleOnClickIsOpenLoginPopup}
            />

            <Link to="login">Zaloguj</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavTop;
