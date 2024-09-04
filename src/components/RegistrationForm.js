import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from './auth';
import { EmailCheck, PasswordCheck, regexPassword} from './utility';
import './style.css';
import axios from 'axios';

const API_URL = 'http://localhost:3001/api/v1/users/create';

function RegistrationForm() {

    const navigate = useNavigate();
    const auth = useAuth();
    const initialValues = {
      firstName: '', lastName: '', email: '', password: '', confirmPassword: '',
    };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);
    let user;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
      console.log(formValues);
      e.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmit(true);
    };

    function createUser() {
      axios.post(API_URL, {
        first_name: formValues.firstName,  
        last_name: formValues.lastName,
        email: formValues.email,
        password: formValues.password
      })

      .then((response) => { 
        console.log('All Good');
        console.log(response.data);
        user=response.data;
        sessionStorage.setItem('user',JSON.stringify(user));
        setSuccessMessage('Successfully Registred!');
        setErrorMessage('');
        auth.login('Valid');
        navigate('/profile', { replace: true });
        return ('Data Saved');        
      })

      .catch((err) => {
        console.log('Email has already been taken');
        console.log(err.message);
        setSuccessMessage('');
        setErrorMessage('Email has already been taken');
        return ('Email has already been taken');
      });
    }

    useEffect(() => {
        console.log(formErrors);

        if (Object.keys(formErrors).length !== 0 && isSubmit) {
          setSuccessMessage('');
          setErrorMessage(null);
        }

        // Entering data into data base

        if (Object.keys(formErrors).length === 0 && isSubmit) {
          setErrorMessage(null);
          createUser();       
        }
    }, [formErrors]);
        
    const validate = (values) => {
        const errors = {};
        const regexName = /^[a-zA-Z ]{1,}$/; // Name Validation

        if (!values.firstName) {
          errors.firstName = "FirstName is required!";
        } else if (!regexName.test(values.firstName)) {
            errors.firstName = 'This is not a valid First Name!';
        }

        if (!values.lastName) {
            errors.lastName = 'LastName is required!';
        } else if (!regexName.test(values.lastName)) {
            errors.lastName = 'This is not a valid Last Name!';
        }

        errors.email = EmailCheck(values.email);
        errors.password = PasswordCheck(values.password);

        if (!values.confirmPassword) {
            errors.confirmPassword = 'Confirm Password is required!';
        } else if (values.confirmPassword.length < 8) {
            errors.confirmPassword = 'Confirm Password must be atleast 8 characters';
        } else if (values.confirmPassword.length > 16) {
            errors.confirmPassword = 'Confirm Password cannot exceed more than 16 characters';
        } else if (!regexPassword.test(values.confirmPassword)) {
          errors.confirmPassword = 'Confirm Password should be combination of Captial and Small Alphabets and Numbers combination';
        } else if (values.password !== values.confirmPassword) {
            errors.confirmPassword = 'Password and Conformation Password should match';
        }

      return errors;
    };
    
    return (
        <div className="container">
          <form onSubmit={handleSubmit}>

                <pre>
                  {successMessage}
                </pre>

                <div className="error">
                  {errorMessage}
                </div>

                <h1><center>
                  Registration Form</center>
                </h1>

                <div className="ui form">

                  <div className="field">
                    <label>First Name</label>
                    <p />
                    <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formValues.firstName}
                    onChange={handleChange}
                    />
                  </div>
                  <div className="error">
                    {formErrors.firstName}
                  </div>
                  <p />

                  <div className="field">
                    <label>Last Name</label>
                    <p />
                    <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formValues.lastName}
                    onChange={handleChange}
                    />
                  </div>
                  <div className="error">
                    {formErrors.lastName}
                  </div>
                  <p />

                  <div className="field">
                    <label>Email</label>
                    <p />
                    <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={formValues.email}
                    onChange={handleChange}
                    />
                  </div>
                  <div className="error">
                    {formErrors.email}
                  </div>
                  <p />

                  <div className="field">
                    <label>Password</label>
                    <h6>Password should have atleast Number,Captial and Small letter </h6>
                    <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formValues.password}
                    onChange={handleChange}
                    />
                  </div>
                  <div className="error">
                    {formErrors.password}
                  </div>
                  <p />

                  <div className="field">
                    <label>Confirm Password</label>
                    <p />
                    <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formValues.confirmPassword}
                    onChange={handleChange}
                    />
                  </div>
                  <div className="error">
                    {formErrors.confirmPassword}
                  </div>
                  <p />
            
                  <button className="light button blue">Submit</button>

                  <div>
                    <h4>
                      Already have an account?
                    </h4>
                    <Link to="/login" >
                      Log In
                    </Link>
                  </div>
                </div>
          </form>
        </div>

    );
}
export default RegistrationForm;
