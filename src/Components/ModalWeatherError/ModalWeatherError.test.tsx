import { render, fireEvent } from '@testing-library/react';

import ModalWeatherError, {ModalWeatherErrorProps} from './ModalWeatherError';


function renderModal(props: Partial<ModalWeatherErrorProps> = {}) {
    const defaultProps: ModalWeatherErrorProps = {
        triggerShow: true,
        handleClose: () => {
        }
    };
    return render(<ModalWeatherError {...defaultProps} {...props} />);
  }

  describe(ModalWeatherError, () => {
    test('Test 1: Render Weather Error Modal', () => {
        const {getByTestId, queryByText} = renderModal();

        const modalTitle = getByTestId("modal-weather-error-title").textContent;
        const modalBody = getByTestId("modal-weather-error-body").textContent;
        const modalButton = getByTestId("modal-weather-error-button");


        expect(modalTitle).toEqual("Error getting current weather");
        expect(modalBody).toEqual("There was an error getting the current weather for the provided location. Please try again later.");
        expect(modalButton.textContent).toEqual("Close");
    });

    test('Test 2: Close Location Error Modal', () => {
        const handleClose = jest.fn()
        const {getByTestId, queryByTestId} = render(<ModalWeatherError 
                                                        triggerShow={true}
                                                        handleClose={handleClose}
                                                        />);
        const modalButton = getByTestId("modal-weather-error-button");
        const modalBeforeClose = queryByTestId("modal-weather-error");

        fireEvent.click(modalButton);

        expect(handleClose).toHaveBeenCalledTimes(1);

    });
});
