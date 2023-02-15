import { render, fireEvent } from '@testing-library/react';

import ModalLocationError, {ModalLocationErrorProps} from './ModalLocationError';


function renderModal(props: Partial<ModalLocationErrorProps> = {}) {
    const defaultProps: ModalLocationErrorProps = {
        triggerShow: true,
        handleClose: () => {
        }
    };
    return render(<ModalLocationError {...defaultProps} {...props} />);
  }

  describe(ModalLocationError, () => {
    test('Test 1: Render Location Error Modal', () => {
        const {getByTestId} = renderModal();

        const modalTitle = getByTestId("modal-location-error-title").textContent;
        const modalBody = getByTestId("modal-location-error-body").textContent;
        const modalButton = getByTestId("modal-location-error-button");


        expect(modalTitle).toEqual("Error with location");
        expect(modalBody).toEqual("There was an error with the provided zip code and country code. Please verify the location information and try again.");
        expect(modalButton.textContent).toEqual("Close");
    });

    test('Test 2: Close Location Error Modal', () => {
        const handleClose = jest.fn()
        const {getByTestId, queryByTestId} = render(<ModalLocationError 
                                                        triggerShow={true}
                                                        handleClose={handleClose}
                                                        />);
        const modalButton = getByTestId("modal-location-error-button");
        const modalBeforeClose = queryByTestId("modal-location-error");

        fireEvent.click(modalButton);

        expect(handleClose).toHaveBeenCalledTimes(1);

    });
});
