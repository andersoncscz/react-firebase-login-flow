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
            history.push("/signin");            
        }, 1200)
    }


    const renderRoundedComponent = () => {
        if (user) {
            if (user.photoURL) {
                return <img alt="" style={{height: 100, width: 100}} className="rounded-circle" src={user.photoURL}></img>
            }
            return  (
                <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center" style={{height: 100, width: 100}}>
                    <span className="text-light display-4">{user.displayName ? user.displayName.toUpperCase().substring(0,1) : user.email.toUpperCase().substring(0,1)}</span>
                </div>
            )
        }
        return null
    }

    return (
        <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
            <Animated animationIn="zoomIn" animationInDuration={600} isVisible={true}>
                <h1>Hello</h1>
            </Animated>
            <Animated className="mb-4" animationIn="slideInDown" animationInDuration={1000} isVisible={true}>
                <span>{user&&user.displayName}</span>
            </Animated>
            <Animated animationIn="bounceIn" animationInDuration={2200} isVisible={true}>
                {renderRoundedComponent()}
            </Animated>
            <Animated className="mt-4" animationIn="slideInDown" animationInDuration={1000} isVisible={true}>
                <span>{user&&user.email}</span>
            </Animated>            
            <Animated animationInDelay={900} animationIn="fadeInUp" animationOut="bounceOut" animationInDuration={600} isVisible={isSignOutVisible}>
                <div className="mt-4">
                    <button onClick={handleSignOut} type="button" className="font-weight-bold btn btn-danger">SIGN OUT</button>
                </div>
            </Animated>
        </div>
    )
}

export default Home;