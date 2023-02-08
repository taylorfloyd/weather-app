import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export interface ModalWeatherErrorInterface {
    triggerShow: boolean;
    handleClose: () => void;
}

const ModalWeatherError = (props: ModalWeatherErrorInterface) => {

    return(
        <Modal show={props.triggerShow} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Error getting current weather</Modal.Title>
        </Modal.Header>
        <Modal.Body>There was an error getting the current weather for the provided location. Please try again later.</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
}
export default ModalWeatherError;