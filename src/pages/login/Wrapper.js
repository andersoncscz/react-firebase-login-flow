import React from 'react';
import { withRouter } from "react-router-dom";
import { Animated } from "react-animated-css";

import backgroundImage from '../../assets/images/login-bg.jpg';
import loginLogo from '../../assets/images/login-logo.png';


const Wrapper = props => {

    return (
        <div className="vh-100 vw-100 overflow-hidden">
            <div className="d-flex justify-content-center h-100 align-items-start p-5" style={{backgroundImage:`url(${backgroundImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                <Animated animationIn="flipInY" animationInDuration={1000} isVisible={true}>
                    <div style={{minHeight: 520, maxHeight: 550, width: 310}}>
                        <div className="h-100 align-items-stretch shadow-lg p-1 bg-white rounded">
                            <div className="d-flex flex-column h-100 p-4">
                                <Animated className="flex-fill h-25 pt-1 pb-4" animationIn="zoomIn" animationInDuration={1700} isVisible={true}>
                                    <img alt="" className="img-fluid" src={loginLogo}></img>
                                </Animated>
                                <div className="flex-fill h-75 pb-4">
                                    <Animated animationIn="zoomIn" animationInDelay={100} animationInDuration={700} isVisible={true}>
                                        { props.children }
                                    </Animated>
                                </div>                    
                            </div>
                        </div>
                    </div>
                </Animated>
            </div>            
        </div>
    )
}

export default withRouter(Wrapper);
