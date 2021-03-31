import React from 'react';
import Container from '../../../../components/container/container.component'
import HeaderCards from '../../components/headerCards/header-cards'
import QuickShopping from '../../components/quickShopping/QuickShopping'
import FavoritePanel from '../../components/favorites-panel/favoritePanel'
import './dashboard.scss';

import {ReactComponent as BgdLeft} from '../../../../assests/background-designs/bg-design-left.svg'
import {ReactComponent as BgdRight} from '../../../../assests/background-designs/bg-design-right.svg'

const Dashboard = () => (

    <Container>

        <div className="dashboard">
            <div className="dashboard-left panel">                
                <HeaderCards/>
                <QuickShopping/>
            </div>
            <div className="dashboard-right panel">
                <FavoritePanel/>
            </div>

            <BgdLeft className='left-design'/>
            <BgdRight className='right-design'/>
            

        </div>
        
    </Container>

)

export default Dashboard;
