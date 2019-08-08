import React, { useState } from 'react';
import { Animated } from "react-animated-css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Formik, Form as FormikForm, Field } from 'formik';
import { string, object } from 'yup'; // for only what you need

import {signIn} from '../../services/auth';


const animationDuration = 1200;
/*    

*/
const LoginForm = ({ history } ) => {
    
    //Hooks
    const [submitState, setSubmitState] = useState({
        isSubmitting: false,
        loginFailed: false,
    });

    
    //Validations
    const validations = object().shape({
        email: string().email().required(),
        password: string().min(6).required()
    })


    const handleSubmit = async ({ email, password }) => {
        
        try {
            setSubmitState({ isSubmitting: true })
            const user = await signIn(email, password)
            if (user) {
                setSubmitState({ isSubmitting: false })
                history.push("/index");
            }
        } catch (error) {
            console.log(error);
            setSubmitState({ loginFailed: true, isSubmitting: false })
        }
    }

    return (
        <Formik initialValues={{ email: '', password: ''}} onSubmit={handleSubmit} validationSchema={validations} >
            {({ errors, touched }) => 
                <FormikForm>
                    <div className="form-group">
                        <label className="font-weight-bold text-info" htmlFor="email">Email</label>
                        <Field type="email" name="email" className="form-control" aria-describedby="emailHelp" placeholder="Email" />
                        {errors.email && touched.email ? <span className="text-danger">{errors.email}</span> : null}
                    </div>
                    <div className="form-group">
                        <label className="font-weight-bold text-info" htmlFor="password">Password</label>
                        <Field type="password" name="password" className="form-control" placeholder="Password" />
                        {errors.password && touched.password ? <span className="text-danger">{errors.password}</span> : null}
                    </div>
                    <div className="d-flex mt-5">
                        {
                            !submitState.isSubmitting ?
                                <div className="flex-fill d-flex flex-column justify-content-center align-items-stretch">
                                    <Animated className="flex-fill d-flex mt-2" animationIn="bounceIn" animationOut="bounceOut" animationInDuration={animationDuration} animationOutDuration={animationDuration} isVisible={!submitState.isSubmitting}>
                                        <button disabled={submitState.isSubmitting} type="submit" className="flex-fill font-weight-bold btn btn-info"><FontAwesomeIcon icon="lock-open" /> LOGIN</button> 
                                    </Animated>
                                    {
                                        submitState.loginFailed &&
                                        <Animated className="flex-fill d-flex mt-2" animationIn="tada" animationOut="fadeOut" animationInDuration={animationDuration} animationOutDuration={animationDuration} isVisible={!submitState.isSubmitting}>
                                            <small className="d-flex flex-fill form-text text-muted mt-2">
                                                <span className="flex-fill text-center text-danger font-weight-bold"><FontAwesomeIcon icon="lock" /> Wrong email or password.</span>
                                            </small>
                                        </Animated>
                                    }
                                </div>
                            :
                            <Animated className="flex-fill d-flex mt-2" animationIn="bounceIn" animationOut="bounceOut" animationInDuration={animationDuration} animationOutDuration={animationDuration} isVisible={submitState.isSubmitting}>
                                <div className="flex-fill d-flex flex-column justify-content-center align-items-center">
                                    <span className="flex-fill h-100 text-info"><FontAwesomeIcon icon="spinner" size="3x" spin /></span>
                                    <small className="flex-fill form-text font-weight-bold text-muted">Please wait.</small>
                                </div>
                            </Animated>
                        }
                    </div>
                </FormikForm>
            }
        </Formik>
    );
}

export default LoginForm