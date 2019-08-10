import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Animated } from "react-animated-css";

import { signOut } from '../../services/auth';
import { signOut as signOutAction } from '../../store/actions';


const Home = ({ history }) => {

    const [isSignOutVisible, setSignOutVisible] = useState(true)
    const user = useSelector(state => state.user);
    const dispatch = useDispatch()


    const handleSignOut = async () => {
        
        setSignOutVisible(false)

        setTimeout(() => {
            signOut()
            dispatch(signOutAction())
            history.push("/login");            
        }, 1200)
    }

    return (
        <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
            <Animated animationIn="zoomIn" animationInDuration={600} isVisible={true}>
                <h1>Hello</h1>
            </Animated>
            <Animated className="mb-4" animationIn="slideInDown" animationInDuration={1000} isVisible={true}>
                <span>{user&&user.displayName}</span>
            </Animated>                
            {
                user && user.photoURL &&
                <Animated animationIn="bounceIn" animationInDuration={2200} isVisible={true}>
                    <img alt="" style={{height: 100, width: 100}} className="rounded-circle" src={user.photoURL}></img>
                </Animated>
            }
            <Animated animationInDelay={900} animationIn="fadeInUp" animationOut="bounceOut" animationInDuration={600} isVisible={isSignOutVisible}>
                <div className="mt-4">
                    <button onClick={handleSignOut} type="button" className="font-weight-bold btn btn-danger">SIGN OUT</button>
                </div>
            </Animated>
        </div>
    )
}

export default Home;