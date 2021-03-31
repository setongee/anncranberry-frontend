import React from 'react';
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';
import {connect} from 'react-redux'
import axios from 'axios'
import {ReactComponent as BankCard} from '../../../assests/icons/bank-card.svg'
import {ReactComponent as ArrowRight} from '../../../assests/icons/arrow-right.svg'
import {coursePaid} from '../../../db/db'



const PayButton = ({COURSE_DETAILS, currentUser, history}) => {

   

    const PayDetails = {

        price : COURSE_DETAILS.price.replace(",", ""),
        email : currentUser.email,
        firstname : currentUser.firstname,
        lastname : currentUser.lastname,
        courseName : COURSE_DETAILS.course,


    }

    const config = {

        public_key: 'FLWPUBK_TEST-be48dd849fe5c5ea6cf3fc53c49e0d1d-X',
        tx_ref: Date.now(),
        amount: PayDetails.price,
        currency: 'NGN',
        payment_options: 'card,mobilemoney,ussd',
        customer: 
            {
                email: PayDetails.email,
                phonenumber: '',
                name: `${PayDetails.firstname} ${PayDetails.lastname}`,
            },

        customizations: 
            {
                title: 'ANN CRANBERRY COURSE PAYMENT',
                description: `Payment for ${PayDetails.courseName} Course`,
                logo: 'https://anncranberry.com/img/ann-logo.png',
            },
    };

    const fwConfig = {
        
        ...config,

        text: 'Pay for course',

        callback: (response) => {

            console.log(response.status)

            const dataSubmit = {
                email : PayDetails.email,
                message : `dear ${PayDetails.firstname} congratulations on your payment of ${PayDetails.price} for anncranberry ${PayDetails.courseName}`
            }

            if (response.status === "successful" ) {

                axios.post('https://anncranberry-academy.herokuapp.com/api/sendmail', dataSubmit).then(() => console.log('Course Successfully paid for'))
                coursePaid(currentUser.id, PayDetails.courseName).then(() => history.push('/courses/enrolled/offline/paySuccess'))   
            
            }
    
            
            closePaymentModal() // this will close the modal programmatically

        },

        onClose: () => {},
    };


    return (

        <div className="pay_for_course">
            <BankCard/>
            <FlutterWaveButton {...fwConfig} />
            <ArrowRight/>
        </div> 

    );

}


const mapsStateToProps = (state) => ({

    currentUser : state.user.currentUser

})

export default connect(mapsStateToProps)(PayButton);
