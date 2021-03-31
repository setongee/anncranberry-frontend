import React from 'react';
import CollectionItem from './collection-item/collectionItem'
import './collections.scss'

const Collections= ( { collection_items } ) => (

   <div className="collection-items">
       {
           collection_items.map( collection_item => (

               <CollectionItem key = { collection_item.id } collection = { collection_item } />

           ))
       }
   </div>

)

export default Collections;
