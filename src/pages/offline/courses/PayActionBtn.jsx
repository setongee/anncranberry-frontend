import React from 'react';
import {ReactComponent as BankCard} from '../../../assests/icons/bank-card.svg'
import {ReactComponent as ArrowRight} from '../../../assests/icons/arrow-right.svg'

const PayActionBtn = () => {
    return (
        <div className="pay_for_course">
            <BankCard/>
            <button>Course Paid</button>
            <ArrowRight/>
        </div> 
    );
}

export default PayActionBtn;
