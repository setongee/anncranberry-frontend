import React from 'react';
import './menu.styles.scss'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import FeatherIcon from 'feather-icons-react';
import {auth} from '../../../../firebase/firebase.utils'

const MenuOffline = ({currentUser, history}) => {
    return (

        <div className="menu-holder">

            <div className="identity">
                <div className="ann_logo"></div>
                <div className="greeting"> Welcome Back {<br></br>} <p><strong>{ `${currentUser.firstname} ${currentUser.lastname}` } </strong></p></div>
            </div>

            <div className="offline-links">
                
                <Link to = '/' className = 'offline_menu_links active' > <FeatherIcon icon="box" size = {20} className = 'offline_menu_icon' /> Overview</Link>
                <Link to = { currentUser.course.offline.length ? '/courses/enrolled/offline' : '/academy' } className = 'offline_menu_links' > <FeatherIcon icon="book-open" size = {20} className = 'offline_menu_icon' /> Academy</Link>
                <Link to = '/' className = 'offline_menu_links' > <FeatherIcon icon="shopping-bag" size = {20} className = 'offline_menu_icon' /> Shop</Link>
                <Link to = '/' className = 'offline_menu_links' > <FeatherIcon icon="credit-card" size = {20} className = 'offline_menu_icon' /> Payments</Link>
                <Link to = '/' className = 'offline_menu_links' > <FeatherIcon icon="user" size = {20} className = 'offline_menu_icon' /> Contact</Link>

            </div>

            <div className="action_areas">
                <div onClick = { async () => {

                    await auth.signOut(); 
                    await history.push('/');

                }} className="signout" style = { {color : '#9a0c79' } }>Sign Out <FeatherIcon icon = "arrow-right" size = {20} className = 'offline_menu_icon' /> </div>

                <Link to = '/home' className="signout">Visit Main Site <FeatherIcon icon = "arrow-right" size = {20} className = 'offline_menu_icon' /> </Link>
            </div>

        </div>

    );
}

const mapsStateToProps = (state) => ({

    currentUser : state.user.currentUser

})

export default connect(mapsStateToProps)(MenuOffline);
