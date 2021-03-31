import {menuType} from './menu.type'

const INITIAL_STATE = {
    hidden : true
};

const menuReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case menuType.MENU_HIDDEN : 
        return {

            ...state,
            hidden : !state.hidden
        
        }

        default : return state
    }

}

export default menuReducer;