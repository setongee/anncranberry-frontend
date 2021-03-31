const INITIAL_STATE = {
    paid : []
}

const paidReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_PAID_COURSE' :
            return {
                ...state,
                paid : [...state.paid, action.payload]
            }

        default :
        return state
    }
}

export default paidReducer