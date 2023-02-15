import { render, fireEvent } from '@testing-library/react';

import LocationForm, {locationFormProps} from './LocationForm';

function renderLocationForm(props: Partial<locationFormProps> = {}) {
    const defaultProps: locationFormProps = {
      onFormSubmit(zipCode: string, countryCode: string) {}
    };
    return render(<LocationForm {...defaultProps} {...props} />);
  }

describe(LocationForm, () => {
    it("Test 1: Render Blank Location Form", async () => {
        const {getByTestId} = renderLocationForm();
        const locationFormZipCodeLabel = getByTestId("location-form-zipcode-label").textContent;
        const locationFormZipCodeValue = getByTestId("location-form-zipcode-value");
        const locationFormCountryCodeLabel = getByTestId("location-form-countrycode-label").textContent;
        const locationFormCountryCodeValue = getByTestId("location-form-countrycode-value");


        expect(locationFormZipCodeLabel).toEqual("Zip Code");
        expect(locationFormZipCodeValue).toHaveValue("");
        expect(locationFormCountryCodeLabel).toEqual("Country Code");
        expect(locationFormCountryCodeValue).toHaveValue("");
    });

    it("Test 2: Input Valid Valid Zip Code and Blank Country Code (No Submit)", async () => {
        const {getByTestId} = renderLocationForm();
        const locationFormZipCodeValue = getByTestId("location-form-zipcode-value");
        const locationFormCountryCodeValue = getByTestId("location-form-countrycode-value");

        fireEvent.change(locationFormZipCodeValue, { target: { value: "28645" } });
        fireEvent.change(locationFormCountryCodeValue, { target: { value: "US" } });

        expect(locationFormZipCodeValue).toHaveValue("28645");
        expect(locationFormCountryCodeValue).toHaveValue("US");
    });

    it("Test 3: Input and Submit Valid Zip Code and Valid Country Code", async () => {
        const {getByTestId} = renderLocationForm();
        const locationFormZipCodeValue = getByTestId("location-form-zipcode-value");
        const locationFormCountryCodeValue = getByTestId("location-form-countrycode-value");
        const locationFormSubmitButton = getByTestId("location-form-submit-button");

        // Set valid values
        fireEvent.change(locationFormZipCodeValue, { target: { value: "28645" } });
        fireEvent.change(locationFormCountryCodeValue, { target: { value: "US" } });

        // Submit values
        fireEvent.click(locationFormSubmitButton);

        // Values reset after submission
        expect(locationFormZipCodeValue).toHaveValue("");
        expect(locationFormCountryCodeValue).toHaveValue("");


    });

    // NOTE: TEST IN DEVELOPMENT
    it("Test 4: (IN DEVELOPMENT) Input and Submit Blank Zip Code and Country Code", async () => {
        const {getByTestId} = renderLocationForm();
        const locationFormZipCodeValue = getByTestId("location-form-zipcode-value");
        const locationFormCountryCodeValue = getByTestId("location-form-countrycode-value");
        const locationFormZipCodeValidation = getByTestId("location-form-zipcode-feedback");
        const locationForm = getByTestId("location-form");
        const locationFormCountryCodeValidation = getByTestId("location-form-countrycode-feedback");
        const locationFormSubmitButton = getByTestId("location-form-submit-button");


        // Verify validation information is blank (display: none and visibility: undefined)
        // expect(locationFormZipCodeValidation).toHaveStyle({visibility: undefined})


        // Submit blank form

        fireEvent.click(locationFormSubmitButton);

        // Verify validation information is shown (display: block and visibility: visible)
        // expect(locationFormZipCodeValidation).toHaveStyle({visibility: "visible"})


        // An alternte way to get current style
        // const styles = getComputedStyle(locationFormZipCodeValidation);
        // console.log(styles);


        // Invalid form feedback displays
        // expect(locationFormZipCodeValidation).toHaveStyle({visibility: undefined})
        // expect(locationFormZipCodeValue).toHaveValue("");
        // expect(locationFormCountryCodeValue).toHaveValue("");

    });

        // NOTE: TEST IN DEVELOPMENT
        it("Test 5: (IN DEVELOPMENT) Input and Submit Blank Zip Code and Valid Country Code", async () => {

    
        });

        // NOTE: TEST IN DEVELOPMENT
        it("Test 6: (IN DEVELOPMENT) Input and Submit Valid Zip Code and Blank Country Code", async () => {


        });

        // NOTE: TEST IN DEVELOPMENT
        it("Test 6: (IN DEVELOPMENT) Input and Submit Invalid Zip Code (Not Blank) and Valid Country Code", async () => {
            // Error Modal should display for invalid location
            // This should be a Modal test or an App.tsx test

        });


  });

  