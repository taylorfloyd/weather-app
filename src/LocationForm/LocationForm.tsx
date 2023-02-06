import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import './LocationForm.css';
import FormControlElement from 'react-bootstrap/Form'

  /*
    This sets the properties for the LocationForm component

    Properties: OnFormSubmit (function with 2 args)
  */
interface locationFormProps {
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
function LocationForm(props:locationFormProps) {

    const [zipCode, setZipCode] = useState<string>("");
    const [countryCode, setCountryCode] = useState<string>("");


    /*
    handleSubmit is called when the user presses the submit button.

    It calls props.onFormSubmit, which passes the inputted zipCode 
    and countryCode to the parent component.

    Arguments: event: React.FormEvent<HTMLFormElement>
    */
    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
            event.preventDefault();
            props.onFormSubmit(zipCode, countryCode);
            setZipCode("");
            setCountryCode("");
    };

    /*
    onZipCodeChange is called when the zipCode Form.Control value is edited.

    It sets the state for zipCode.
    */
    const onZipCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setZipCode(event.target.value);
        console.log("zip", event.target.value);
    };

    /*
    onCountryCodeChange is called when the countryCode Form.Control value is edited.

    It sets the state for countryCode.
    */
    const onCountryCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCountryCode(event.target.value);
        console.log("cc", event.target.value);
    };

    return (
        <div className="LocationForm">
            <Form onSubmit={handleSubmit}>
                <Form.Group as={Row} className="LocationForm-Group" controlId="formZipCode">
                    <Form.Label  className="LocationForm-Label" column sm={6}>Zip Code</Form.Label>
                    <Col sm={6}>
                        <Form.Control value={zipCode} onChange={onZipCodeChange} type="text" placeholder="Enter zip code" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="LocationForm-Group" controlId="formCountryCode">
                    <Form.Label className="LocationForm-Label" column sm={6}>Country Code</Form.Label>
                    <Col sm={6}>
                        <Form.Control value={countryCode} onChange={onCountryCodeChange} type="text" placeholder="Enter country code" />
                    </Col>
                </Form.Group>
                <Button className="LocationForm-Button" variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}
export default LocationForm;