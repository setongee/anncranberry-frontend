import React from 'react';
import {ReactComponent as Love} from '../../../assests/icons/love.svg'
import './collection-item.scss'

const CollectionItem = ({collection}) => {
    
    const {title, subtitle, likes} = collection

    return (
        
        <div className="collection-item">
            
            <div className="imgHolder">
                <img src='https://picsum.photos/300' alt="item"/>
            </div>

            <div className="information">
                <div className="title">
                    <h1>{title}</h1>
                </div>
                <div className="likes">
                    <Love/> <span>{likes}</span>
                </div>
            </div>

            <div className="description">
                <p>{subtitle}</p>
            </div>

        </div>

    )
}

export default CollectionItem;
