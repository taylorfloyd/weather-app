import { render, fireEvent, waitForElementToBeRemoved, screen} from '@testing-library/react';
import App from './App';

function renderApp() {
    return render(<App />);
  }

describe(App, () => {
    test('Test 1: Render Application Initial State', () => {
        const {queryByTestId, queryByText, getByTestId} = renderApp();
        const appTitle = queryByText("Weather Application");
        const locationForm = queryByTestId("location-form");
        const weatherModal = queryByTestId("modal-weather-error");
        const locationModal = queryByTestId("modal-location-error");

        expect(appTitle).not.toBe(null);
        expect(locationForm).not.toBe(null);
        expect(weatherModal).toBe(null);
        expect(locationModal).toBe(null);
    });

    test('Test 2: Render Location Modal Error and close', async () => {
        const {queryByTestId, queryByText, getByTestId} = renderApp();
        const locationFormZipCodeValue = getByTestId("location-form-zipcode-value");
        const locationFormCountryCodeValue = getByTestId("location-form-countrycode-value");
        const locationFormSubmitButton = getByTestId("location-form-submit-button");


        // Set invalid values
        fireEvent.change(locationFormZipCodeValue, { target: { value: "28645" } });
        fireEvent.change(locationFormCountryCodeValue, { target: { value: "AR" } });

        // Submit values
        fireEvent.click(locationFormSubmitButton);

        // Await modal to be displayed
        await screen.findByTestId("modal-location-error");
        const locationModal = queryByTestId("modal-location-error");
        expect(locationModal).not.toBe(null);

        const locationModalSubmitButton = getByTestId("modal-location-error-button");

        // Close Modal
        fireEvent.click(locationModalSubmitButton);

        //Expect Modal to be removed
        await waitForElementToBeRemoved(locationModal);
        const locationModalClosed = queryByTestId("modal-location-error");
        expect(locationModalClosed).toBe(null);

    });

});
