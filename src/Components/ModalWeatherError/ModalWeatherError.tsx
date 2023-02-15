import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export interface ModalWeatherErrorProps {
    triggerShow: boolean;
    handleClose: () => void;
}

const ModalWeatherError = (props: ModalWeatherErrorProps) => {

    return(
        <Modal data-testid="modal-weather-error" show={props.triggerShow} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title data-testid="modal-weather-error-title">Error getting current weather</Modal.Title>
        </Modal.Header>
        <Modal.Body data-testid="modal-weather-error-body">There was an error getting the current weather for the provided location. Please try again later.</Modal.Body>
        <Modal.Footer>
          <Button data-testid="modal-weather-error-button" variant="primary" onClick={props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
}
export default ModalWeatherError;