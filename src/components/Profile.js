import React,{ useState, useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import {useAuth} from './auth'

function Profile() {
    const navigate = useNavigate();
    const auth = useAuth();
    const [isSubmit, setIsSubmit] = useState(false);
    let user;

    user= JSON.parse(sessionStorage.getItem('user'))
    

    const handleClick = (e) => {
        setIsSubmit(true);
      };

    useEffect((e) =>{

        if (isSubmit){
            sessionStorage.clear()
            auth.logout()
            navigate('/login', { replace: true });
        }

    },[isSubmit])

    
        return (
            <div className="container">
                <div className="profileUI">
                    <div>Welcome {user.first_name} {user.last_name}</div>
                    <div>Your Email <email>{user.email} </email> </div>
                    <button className="light button blue" onClick={handleClick}>Log Out</button>
                </div>
            </div>   
        );
    
    
}

export default Profile;
