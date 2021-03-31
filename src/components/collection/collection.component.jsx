import React from 'react'
import './collection.styles.scss'

import ItemComponent from './item.collection.component'

const Collections = ({title, items}) => (
    
    <div className="collection">
        <div className="title">{title.toUpperCase()}</div>
        <div className="list-items">
            {
                items.filter( (item, idx) => idx < 1 ).map( item => (
                    <ItemComponent key={item.id} item={item} />
                ))
            }
        </div>
    </div>
    
)

export default Collections