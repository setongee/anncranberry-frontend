import React from 'react';
import './burgerMenu.styles.scss'
import {connect} from 'react-redux'
import {toggleViewMenu} from '../../../redux/menu/menu.actions'

const BurgerMenu = ({toggleView}) => (

    <div className="burger-menu" onClick={toggleView}>
        <div className="layer line-1"></div>
        <div className="layer line-2"></div>
        <div className="layer line-3"></div>
    </div>

)

const mapsDispatchToProps = dispatch => ({
    toggleView : () => dispatch(toggleViewMenu())
})

export default connect(null, mapsDispatchToProps)(BurgerMenu);
