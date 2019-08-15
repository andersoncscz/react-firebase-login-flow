import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { onAuthStateChanged } from '../../services/auth';
import { signInSuccess } from '../../store/actions';

const Splash = ({ history }) => {
    
    const dispatch = useDispatch()

    useEffect(() => {
        try {
            const handleAuthStateChanged = user => {
                if (user) {
                    dispatch(signInSuccess(user))
                    history.push("/home");
                }
                else {
                    history.push("/signin");
                }
            }
            
            setTimeout(() => onAuthStateChanged(handleAuthStateChanged), 500)
        } 
        catch (error) {
            console.log(error)
        }
    }, [history, dispatch])


    return (
        <div className="vh-100 vw-100">
            <div className="d-flex justify-content-center align-items-center vh-100 vw-100 text-info">
                <FontAwesomeIcon icon="spinner" spin size="2x" />
            </div>            
        </div>
    )
}

export default withRouter(Splash);
