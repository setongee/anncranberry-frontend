import React from 'react';
import {withRouter} from 'react-router-dom';
import ChooseType from '../../components/academy_components/chooseType'

import './academyNew.scss'

class Academy extends React.Component {

    constructor ({match, history}) {
        super ()
        this.state = {
            hide : true,
            match : match,
            history : history
        }
    }

    closeModal = () => {
        this.setState({hide : true})
    }

    render () {

        return (


            <div className= 'academy_body'>
    
               <div className="academy_img"></div>
    
               <div className="academy_content">
    
                   <div className="title">ann cranberry | <strong>academy</strong> </div>
                   
                   <div className="main_text"> 
                    
                    <h1>founded to Educate, Empower and Equip you to become your own Fashion Business Owner...</h1> 
                    <p>At Ann Cranberry, our aim is to provide the access to fashion design via the classroom experience and the digital system of introducing learning.</p>
                   
                   </div>

                   <button onClick = {() => this.setState({ hide : false }) }> Continue </button>
    
               </div>


               <div className={`choose_type ${this.state.hide ? "hide" : '' }`}>
                   
                   <ChooseType closeModal = {this.closeModal} close = {true} state = {this.state} title = 'offline' subtitle = 'All courses will be done onsite in a physical venue with close monitoring and active mentorship of a tutor.' />
                   <ChooseType closeModal = {this.closeModal} close = {false} state = {this.state} title = 'online' subtitle = 'All courses will be done virtually via a closed WhatsApp group. All participants will have direct access to tutors to enable close monitoring and mentorship.' />

               </div>
            
            </div>
            
    
        );

    }
    
}

export default withRouter(Academy);
