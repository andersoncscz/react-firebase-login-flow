import * as React from 'react';
import Login from '../pages/login/Login';

const Content = props => {
    return (
        <div className="h-100 w-100">
            { props.children }
        </div>
    )
}
export default Content;