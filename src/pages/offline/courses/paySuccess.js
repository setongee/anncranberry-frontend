import React from 'react';


const PaySuccess = ({history, match}) => {

    return (
        <div>
            {<br></br>} {<br></br>} {<br></br>} {<br></br>} {<br></br>} {<br></br>} {<br></br>}
            <h1>Pay Success Happened</h1>

            <button onClick = { () => history.push('/courses/enrolled/offline')} >Continue</button>
        </div>
    );
}

export default PaySuccess;
