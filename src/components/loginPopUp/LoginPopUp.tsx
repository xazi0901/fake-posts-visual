import React from "react";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

interface ILoginPopUp {
  isShowLogin: boolean;
  setShowLogin: (arg0: boolean) => void;
}
const LogInPopUp: React.FC<ILoginPopUp> = ({
  isShowLogin,
  setShowLogin,
}: ILoginPopUp) => {
  return (
    <Modal show={isShowLogin} onHide={() => setShowLogin(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};

export default LogInPopUp;
