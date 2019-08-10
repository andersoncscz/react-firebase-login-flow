import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Animated } from "react-animated-css";

import { signOut } from '../../services/auth';
import { signOut as signOutAction } from '../../store/actions';

import loginLogo from '../../assets/images/login-logo.png';

const Home = ({ history }) => {

    const user = useSelector(state => state.user);
    const dispatch = useDispatch()

    const handleSignOut = async () => {
        await signOut()
        dispatch(signOutAction())
        history.push("/login");
    }

    return (
        <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
            <h1>Hello {user&&user.email}</h1>
            <Animated className="w-25" animationIn="flipInY" animationInDuration={2500} isVisible={true}>
                <img alt="" className="img-fluid" src={loginLogo}></img>
            </Animated>
            <div>
                <button onClick={handleSignOut} type="button" className="flex-fill font-weight-bold btn btn-info">SIGN OUT</button>
            </div>
        </div>
    )
}

export default Home;