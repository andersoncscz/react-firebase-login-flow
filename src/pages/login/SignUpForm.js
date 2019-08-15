import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { Animated } from "react-animated-css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Formik, Form as FormikForm, Field } from 'formik';
import * as yup from 'yup'; // for only what you need

import { signUp } from '../../services/auth';
import { signUpSuccess } from '../../store/actions'

const animationDuration = 1000;
//Validations
const validations = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
    passwordConfirmation: yup.string().when("password", {
        is: val => (val && val.length > 0 ? true : false),
        then: yup.string().required('password confirmation is a required field').oneOf(
            [yup.ref("password")],
            "passwords must match"
        )
    })
});

const SignUpForm = ({ history } ) => {
    
    //Hooks
    const [submitState, setSubmitState] = useState({
        isSubmitting: false,
        signUpFailed: false,
        isLoading: false,
        signUpError: null
    });
    
    const dispatch = useDispatch();

    const handleSubmit = useCallback(
        async ({ email, password }) => {
        
            setSubmitState({ isSubmitting: true })
            
            await setTimeout(async () => {
                try {
                    setSubmitState({ isLoading: true })
                    const user = await signUp(email, password)
                    if (user) {
                        dispatch(signUpSuccess(user));
                        history.push("/home");
                    }
                } 
                catch (error) {
                    setSubmitState({ 
                        signUpFailed: true, 
                        isSubmitting: false,
                        signUpError: error
                    })
                }            
            }, animationDuration - 500)
        },
        [dispatch, history]
    );

    const handleSignIn = useCallback(
        () => history.push("/signin"),
        [history]
    );

    return (
        <Formik initialValues={{ email: '', password: '', passwordConfirmation: ''}} onSubmit={handleSubmit} validationSchema={validations} >
            {({ errors, touched }) => 
                <FormikForm>
                    <div className="form-group">
                        <label className="font-weight-bold text-secondary" htmlFor="email">Email</label>
                        <Field type="email" name="email" className="form-control form-control-sm" aria-describedby="emailHelp" placeholder="email@example.com" />
                        {
                            errors.email && touched.email && 
                            <Animated animationIn="slideInUp" animationInDuration={700} isVisible={true}>
                                <span className="font-weight-bold text-danger" style={styles.formError}>{errors.email}</span>
                            </Animated>
                        }
                    </div>
                    <div className="form-group">
                        <label className="font-weight-bold text-secondary" htmlFor="password">Password</label>
                        <Field type="password" name="password" className="form-control form-control-sm" placeholder="******" />
                        {
                            errors.password && touched.password && 
                            <Animated animationIn="slideInUp" animationInDuration={700} isVisible={true}>
                                <span className="font-weight-bold text-danger" style={styles.formError}>{errors.password}</span>
                            </Animated>
                        }
                    </div>
                    <div className="form-group">
                        <label className="font-weight-bold text-secondary" htmlFor="passwordConfirmation">Password Confirmation</label>
                        <Field type="password" name="passwordConfirmation" className="form-control form-control-sm" placeholder="******" />
                        {
                            errors.passwordConfirmation && touched.passwordConfirmation && 
                            <Animated animationIn="slideInUp" animationInDuration={700} isVisible={true}>
                                <span className="font-weight-bold text-danger" style={styles.formError}>{errors.passwordConfirmation}</span>
                            </Animated>
                        }
                    </div>                    
                    <div className="d-flex flex-column mt-0">
                        <div className={`flex-fill flex-column justify-content-center align-items-stretch ${!submitState.isLoading ? 'd-flex' : 'd-none'}`}>
                            <Animated className="flex-fill d-flex mb-1" animationIn="zoomIn" animationOut="zoomOut" animationInDuration={animationDuration} animationOutDuration={animationDuration} isVisible={!submitState.isSubmitting}>
                                <div className="flex-fill d-flex flex-column">
                                    <button onClick={handleSignIn} type="button" className="flex-fill font-weight-bold btn btn-white shadow-none text-secondary">Sign In</button>
                                </div>
                            </Animated>                            
                            <Animated className="flex-fill d-flex mt-1" animationIn="zoomIn" animationInDelay={100} animationOut="zoomOut" animationInDuration={animationDuration} animationOutDuration={animationDuration} isVisible={!submitState.isSubmitting}>
                                <div className="flex-fill d-flex flex-column">
                                    <button disabled={submitState.isSubmitting} type="submit" className="flex-fill font-weight-bold btn btn-secondary">Sign Up</button>
                                </div>
                            </Animated>
                            {
                                submitState.signUpFailed && submitState.signUpError.message &&
                                <Animated className="flex-fill d-flex mt-2" animationIn="fadeIn" animationInDelay={400} animationOut="fadeOut" animationInDuration={animationDuration} animationOutDuration={animationDuration} isVisible={!submitState.isSubmitting}>
                                    <small className="d-flex flex-fill form-text text-muted mt-2">
                                        <span className="flex-fill text-center text-danger font-weight-bold">{submitState.signUpError.message}</span>
                                    </small>
                                </Animated>
                            }
                        </div>
                        <div style={{display: submitState.isLoading ? 'inline' : 'none'}}>
                            <Animated className="flex-fill d-flex mt-2" animationIn="bounceIn" animationInDuration={animationDuration} animationOutDuration={animationDuration} isVisible={submitState.isLoading}>
                                <div className="flex-fill d-flex flex-column justify-content-center align-items-center">
                                    <span className="flex-fill h-100 text-info"><FontAwesomeIcon icon="spinner" size="3x" spin /></span>
                                    <small className="flex-fill form-text font-weight-bold text-muted">Please wait.</small>
                                </div>
                            </Animated>                                                    
                        </div>
                    </div>
                </FormikForm>
            }
        </Formik>
    );
}

const styles = {
    formError: {
        fontSize: 12
    }
}

export default SignUpForm;