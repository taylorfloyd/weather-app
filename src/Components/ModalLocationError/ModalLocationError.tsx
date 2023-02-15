import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export interface ModalLocationErrorProps {
    triggerShow: boolean;
    handleClose: () => void;
}

const ModalLocationError = (props: ModalLocationErrorProps) => {

    return(
        <Modal data-testid="modal-location-error" show={props.triggerShow} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title data-testid="modal-location-error-title">Error with location</Modal.Title>
        </Modal.Header>
        <Modal.Body data-testid="modal-location-error-body">There was an error with the provided zip code and country code. Please verify the location information and try again.</Modal.Body>
        <Modal.Footer>
          <Button data-testid="modal-location-error-button" variant="primary" onClick={props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
}
export default ModalLocationError;