import React from 'react';
import './container.scss'

const Container = ({children, backgroundColor}) => {
    return (
        <div className='container' style = {{backgroundColor : `${backgroundColor}`}}>
            {children}
        </div>
    );
}

export default Container;
