import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from './auth';
import './style.css';
import axios from 'axios';
import { EmailCheck, PasswordCheck} from './utility';

const API_URL = 'http://localhost:3001/api/v1/sessions';

function LogIn(){
    const navigate = useNavigate();
    const auth = useAuth();
    
    const initialValues = {
        email: '', password: ''
      };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    let user={};

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

    function logInUser() {
        axios.post(API_URL, {
          email: formValues.email,
          password: formValues.password
        })
  
        .then((response) => { 
          console.log(response.data);
          if (response.data.status === 401) {
            console.warn('Invalid Login Details');
            setErrorMessage('Invalid Login Details');
          } 
            else {
                setErrorMessage('');
                user=response.data;
                console.log(user.id);
                sessionStorage.setItem('user',JSON.stringify(user));
                auth.login('Valid');
                               
                navigate('/profile',{ replace: true });
                
                console.log('Valid details')
            }      
        })

    }

    useEffect(() => {
        console.log(formErrors);

        if (Object.keys(formErrors).length === 0 && isSubmit) {
            logInUser();   
        }

    }, [formErrors]);

    const validate = (values) =>{
        const errors = {}; 
        errors.email = EmailCheck(values.email)
        errors.password= PasswordCheck(values.password)
        return errors;
    }
    return(
        <div className="container">
          <form onSubmit={handleSubmit}>
                
                <h2><center>
                Log in to Social Media App</center>
                </h2>

                <div className="error">
                        {errorMessage}
                </div>

                <div className="ui form">
                    
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
                        <p />
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
                    
                    <button className="light button blue">Submit</button>
                    <p />

                    <div>
                        <h4>
                            Don't have an account?
                        </h4>
                        <Link to="/" >
                            Sign up
                        </Link>
                    </div>
                  
                </div>
          </form>
        </div>
    );
}
export default LogIn;