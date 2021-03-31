import React, { Component } from 'react';
import Container from '../../components/container/container.component'
import CollectionsData from '../../redux/collectionData/collections'
import Collections from '../../components/collections/collections.component'

class CollectionsPage extends Component {

    constructor() {
        super()
        this.state = {
            data : CollectionsData
        }
    }

    render() {
       return (

           <Container>

               <div className="title">
                   <h1 style={{fontSize : '28px', marginLeft : '20px'}}>Collections</h1>
               </div>

               <Collections collection_items = {this.state.data} />
               
           </Container>

       )
    }
    
}

export default CollectionsPage
