import { combineReducers } from 'redux'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'; 

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import menuReducer from './menu/menu.reducer';
import shopReducer from './shop/shop-reducer';
import AcademyReducer from './academy/academy-reducer';
import paidReducer from './coursePaid/paid.reducer'

const persistConfig = {
    key : 'root',
    storage, 
    whitelist : ['user', 'paid']
}

const rootReducer = combineReducers ({
    user: userReducer,
    cart : cartReducer,
    menu : menuReducer,
    shop : shopReducer,
    academy : AcademyReducer,
    paid : paidReducer
})

export default persistReducer(persistConfig, rootReducer)