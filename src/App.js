//dependencies
import React from 'react';
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom'
import { connect } from 'react-redux'

//Pages
import HomePage from './pages/homepage/homepage.component'
import Shop from './pages/shop/shop.component'
import CheckoutPage from './pages/checkout/checkout.component';
import AboutPage from './pages/about/about.page';
import CollectionsPage from './pages/collections/collections.page'
import Academy from './pages/academy/academy'

//academy pages
import CourseView from './components/academy_components/academy_course'

//offline account
import EnrolledPage from './pages/offline/courses/enrolledPage'
import Combine from './pages/offline/account/views/overview'

//Static Components
import Header from './components/header/header.component'
import Footer from './components/footer/footer.component'
import PageNotFound from './404'

//firebase setups import
import {auth, createUserProfile} from './firebase/firebase.utils'

//Redux imports
import { setCurrentUser } from './redux/user/user.actions'
import {createStructuredSelector} from 'reselect'
import {selectCurrentUser, selectNewUser} from './redux/user/user.selector'

//auth

import Auth from './pages/offline/auth/auth'


class App extends React.Component {
  
  componentDidMount() {

    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged( async user => {
      
      if (user) {
        
        const anything = await createUserProfile(user);
     
        anything.onSnapshot( async snap => {
          
          await setCurrentUser ({
            id : snap.id,
            ...snap.data()
          })

           });
                
      } else {

        setCurrentUser(user);

      }
    })
    
  }
  
  
  render () {

      const {currentUser} = this.props

    return (


      <div>
        

        <Header/>
        
          <Switch>
  
            <Route exact path='/' render = { () => currentUser ? (<Redirect to = '/account/offline/dashboard' />) : (<HomePage/>) } />
            <Route exact path='/home' render = { () => (<HomePage/>) } />
            <Route path='/shop' component = {Shop} />
            <Route exact path='/signin' render = { () => currentUser ? (<Redirect to = '/account/offline/dashboard' />) : (<Auth/>) }/>
            <Route exact path = '/checkout' component = {CheckoutPage} />
            <Route exact path = '/about' component = {AboutPage} />
            <Route exact path = '/collections' component = {CollectionsPage} />
           
            <Route exact path = '/academy' component = {Academy} />
            <Route path = '/academy/offline/courses' component = {CourseView} />

            <Route exact path = '/courses/enrolled/offline' render = { () => currentUser ? (<EnrolledPage user = {currentUser} />) : (<Auth />) } />

            <Route exact path = '/courses/enrolled/offline/paySuccess' render = { () => currentUser ? (<Redirect to = '/courses/enrolled/offline' />) : (<Auth />) } />

            <Route exact path = '/account/offline/dashboard' render = { () => currentUser ? (<Combine/>) : (<Auth/>) } />

            <Route component = {PageNotFound} />

          </Switch>

          { currentUser === null ? <Footer/> : currentUser.role !== 'Administrator' ? <Footer/>  :  null }
        
      </div>

    );
  }
}

const mapStateToProps = createStructuredSelector ({
  currentUser : selectCurrentUser,
  newUser : selectNewUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps )(App);
