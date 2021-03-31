import React from 'react';
import './header-card.scss'
import CardPreview from '../card-preview/cardPreview'
import {cardDetails} from './cardDetails'

class HeaderCards extends React.Component {
    constructor () {
        super()
        this.state = {
            data : {cardDetails}
        }

    }

    render () {

        const {cardDetails} = this.state.data
        
        return (

            <div className="card-preview-body">
                {
                    cardDetails.map(card => <CardPreview key = {card.id} data = {card}/>)
                }
            </div>
        )
    }
}

export default HeaderCards;
