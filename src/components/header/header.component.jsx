import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {auth} from '../../firebase/firebase.utils';
import './header.styles.scss';
import {selectCurrentUser} from '../../redux/user/user.selector';
import {selectCartView} from '../../redux/cart/cart.selectors';
import Menu from '../menu/menu.component';
import MenuUser from '../menu/menu.component.user';
import { selectMenuView } from '../../redux/menu/menu.selectors';
import BurgerMenu from '../menu/burger-menu/burgerMenu.component';
import {withRouter} from 'react-router-dom';


const Header = ({ currentUser, view, hidden, history }) => {

  const currentPath = history.location.pathname;
  
  //currentPath === '/academy' ? console.log('it is in academy bro') : console.log('bro forget it didnt work')

  if (currentPath.match('account/offline') !== null ) {

    return null

  }


  return (
    
    <div className={`title-bar ${currentPath === '/academy' ? 'loggedIn' : '' }`}>
      
      <div className="area area-1">

        <div className='title-name'>
          {
            currentUser ? (<Link to='/' className="logo">Ann Cranberry</Link>) : (<Link to='/' className="logo">ann cranberry</Link>)
          }

        </div>

        <BurgerMenu/>

      </div>

      <div className="area area-2">

        <div className="search"></div>

        <div className="login-area">
          {
            currentUser ? 
            (<div className='logged-in'>
              <div className='user'>Welcome, {`${currentUser.firstname} ${currentUser.lastname}`}</div>
              <div className='sign' onClick = { async () => {
                
                await auth.signOut(); 
                await history.push('/');
                

              } } >sign out</div>
              
            </div> ) 
            : 
            (<Link className='sign' to ='/signin'>sign in</Link>)
          }
          
        </div>

      </div>

      <div className="area area-3">
        <CartIcon/>
        {
          view ? null : <CartDropdown/>
        }
      </div>

        {
          currentUser ? ( <MenuUser hide = {hidden} cartOpen = {view}/> ) : (<Menu hide = {hidden} cartOpen = {view}/>)
        }
      
    </div>
  )
}
  
  const mapStateToProps = createStructuredSelector({

    currentUser : selectCurrentUser,
    view : selectCartView,
    hidden : selectMenuView
    
  });
  
  export default withRouter(connect(mapStateToProps)(Header));