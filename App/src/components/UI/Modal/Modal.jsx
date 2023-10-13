import { Fragment } from "react";
import ReactDOM from "react-dom";
import "./Modal.scss";

const Backdrop = ({ onClose }) => {
  return <div className="backdrop" onClick={onClose}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className="modal">
      <div className="content">{props.children}</div>
    </div>
  );
};

const portalElement = () => {
  return document.getElementById("overlays");
};

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement()
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement()
      )}
    </Fragment>
  );
};

export default Modal;
