import React from 'react';
import { withRouter } from "react-router-dom";

import SignUpForm from './SignUpForm';
import Wrapper from './Wrapper';

const SignUp = props => {

    return (
        <Wrapper>
            <SignUpForm {...props} />
        </Wrapper>
    )
}

export default withRouter(SignUp);
