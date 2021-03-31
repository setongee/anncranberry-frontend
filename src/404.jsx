import React from 'react';
import {ReactComponent as NotFound} from './assests/illustration/404.svg'

const PageNotFound = () => {
    
    return (
        <div className="404" style = { {overflow : 'hidden', height : '100vh', backgroundColor : '#F8F3F6', position : 'relative'} }>
            <NotFound style = { {position : 'absolute', top : 0, left : 0, width : '100%', height : '100%'} }/>
        </div>
    );
}

export default PageNotFound;
