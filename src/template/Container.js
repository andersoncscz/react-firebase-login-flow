import * as React from 'react';

const Container = props => {
    return (
        <div className="container-fluid bg-light p-0 w-100 h-100">
            { props.children }
        </div>
    )
}
export default Container;