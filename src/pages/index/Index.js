import React from 'react';
import { Animated } from "react-animated-css";
import loginLogo from '../../assets/images/login-logo.png';
const Index = props => {
    return (
        <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
            <h1>Hello!</h1>
            <Animated className="w-25" animationIn="flipInY" animationInDuration={2500} isVisible={true}>
                <img alt="" className="img-fluid" src={loginLogo}></img>
            </Animated>
        </div>
    )
}

export default Index;