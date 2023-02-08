import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export interface ModalLocationErrorInterface {
    triggerShow: boolean;
    handleClose: () => void;
}

const ModalLocationError = (props: ModalLocationErrorInterface) => {

    return(
        <Modal show={props.triggerShow} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Error with location</Modal.Title>
        </Modal.Header>
        <Modal.Body>There was an error with the provided zip code and country code. Please verify the location information and try again.</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
}
export default ModalLocationError;