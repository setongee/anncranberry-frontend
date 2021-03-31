import React from 'react';
import MenuOffline from '../menu_bar/menu_offline'
import Dashboard from './dashboard'
import {withRouter} from 'react-router-dom'
import './overview.scss'

class Combine extends React.Component {

    constructor ({history}) {
        super();
        this.state = {
            history : history
        }
    }

    render() {

        return (
    
           <div className="body-holder">
    
               <MenuOffline history = {this.state.history}/>
            
                <Dashboard />
    
           </div>
    
        );
    }
}

export default withRouter(Combine);
