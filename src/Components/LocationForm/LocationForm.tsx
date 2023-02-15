import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import './LocationForm.css';
import { countryList } from './countryList';

  /*
    This sets the properties for the LocationForm component

    Properties: OnFormSubmit (function with 2 args)
f
  */
export interface locationFormProps {
    onFormSubmit: (zipCode: string, countryCode: string) => void;
}

  /*
    The LocationForm component uses the Function component
    from react-bootstrap. 

    It renders a form for the user to input a specific
    zip code and country code.

    Upon submit, props.OnFormSubmit is called, passing the
    inputted zipCode and countryCode to the parent component. 

    Properties are defined in locationFormProps interface.
  */
const LocationForm = (props:locationFormProps) => {

    const [zipCode, setZipCode] = useState<string>("");
    const [countryCode, setCountryCode] = useState<string>("");
    const [validated, setValidated] = useState(false);



    /*
    handleSubmit is called when the user presses the submit button.

    It calls props.onFormSubmit, which passes the inputted zipCode 
    and countryCode to the parent component.

    Arguments: event: React.FormEvent<HTMLFormElement>
    */
    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
            const form = event.currentTarget;
            event.preventDefault();
            event.stopPropagation();
            if (form.checkValidity() === false) {
                setValidated(true);
            } else {
                props.onFormSubmit(zipCode, countryCode);
                setZipCode("");
                setCountryCode("");
                setValidated(false);
            }
    };

    /*
    onZipCodeChange is called when the zipCode Form.Control value is edited.

    It sets the state for zipCode.
    */
    const onZipCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setZipCode(event.target.value);
    };

    /*
    onCountryCodeChange is called when the countryCode Form.Control value is edited.

    It sets the state for countryCode.
    */
    const onCountryCodeChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
        setCountryCode(event.target.value);
    };

    return (
        <div className="LocationForm" >
            <Form data-testid="location-form" noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group as={Row} className="LocationForm-Group" controlId="formZipCode">
                    <Form.Label  data-testid="location-form-zipcode-label" className="LocationForm-Label" column sm={6}>Zip Code</Form.Label>
                    <Col sm={6}>
                        <Form.Control data-testid="location-form-zipcode-value" required value={zipCode} onChange={onZipCodeChange} type="text" placeholder="Enter zip code" />
                        <Form.Control.Feedback data-testid="location-form-zipcode-feedback" className="LocationForm-Validation" type="invalid">
                            Please input a zip code.
                        </Form.Control.Feedback>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="LocationForm-Group" controlId="formCountryCode">
                    <Form.Label data-testid="location-form-countrycode-label" className="LocationForm-Label" column sm={6}>Country Code</Form.Label>
                    <Col sm={6}>
                        {/* <Form.Control value={countryCode} onChange={onCountryCodeChange} type="text" placeholder="Enter country code" /> */}
                        <Form.Select data-testid="location-form-countrycode-value" required value={countryCode} onChange={onCountryCodeChange} >
                            <option value="" disabled>Select country</option>
                            {countryList.map((country) => <option key={country.name} value={country.code}>{country.name}</option>)}
                            {/* <option value="US">United States</option>
                            <option value="UK">United Kingdom</option>                         */}
                        </Form.Select>
                        <Form.Control.Feedback data-testid="location-form-countrycode-feedback" className="LocationForm-Validation" type="invalid">
                            Please input a country code.
                        </Form.Control.Feedback>
                    </Col>
                </Form.Group>
                <Button data-testid="location-form-submit-button" className="LocationForm-Button" variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}
export default LocationForm;