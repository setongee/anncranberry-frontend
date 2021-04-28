import React from 'react'
import './level.scss'
import Basic from '../../assests/img/basic.png'
import Advanced from '../../assests/img/advanced.png'
import Bridal from '../../assests/img/bridal.png'
import { addItem } from '../../redux/academy/academy-actions'
import {connect} from 'react-redux'

const ChooseLevel = ({ history, match, addProgram }) => {

    return (
   
        
        <div className="level_page">
            
            <div className="level_head">choose your programme</div>

            <div className="card_level_flex">
            
                <div className="card_levels">

                    <div className="icon"><img src= {Basic} alt="Basic Level" /></div>
                    
                    <div className="detail_holder">

                        <div className="level_title">Basic</div>
                        
                        <div className="level_description"> The basic training course is designed for students who have little or no knowledge of dress making and fashion design.  </div> 
                        
                        <button onClick = { () => { 

                            history.push(`${match.path}/basic`);
                            addProgram('basic')

                        } } >get started</button>
                    </div>

                </div>

                <div className="card_levels">

                    <div className="icon"><img src= {Advanced} alt="Advanced Level" /></div>                   
                    <div className="detail_holder">
                        
                        <div className="level_title">Advanced</div>
                        <div className="level_description"> The  advanced training course is designed for students with basic level knowledge of dress making and fashion design.</div> 
                        
                        <button onClick = {()=> {

                            history.push(`${match.path}/advanced`);
                            addProgram('advanced')

                        }} >get started</button>
                    </div>

                </div>

                <div className="card_levels">
                    
                    <div className="icon"><img src= {Bridal} alt="Bridal Level" /></div>
                    
                    <div className="detail_holder">
                        
                        <div className="level_title">Bridal</div>
                        <div className="level_description"> The bridal course is designed for students who have gone through basic and intermediate training in fashion design.</div> 
                        
                        <button onClick = {()=> {

                            history.push(`${match.path}/bridal`);
                            addProgram('bridal')

                        }} >get started</button>

                    </div>
                    
                </div>

            </div>

        </div>


    
)}

const dispatchStateToProps = dispatch => ({

    addProgram : program => dispatch(addItem(program))

})


export default connect(null, dispatchStateToProps)(ChooseLevel);