import {courses} from './courses'

const INITIAL_STATE = {

    courses : courses,
    program : '',
    payCourse : ''

}

const AcademyReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case 'ENROLL_COURSE' : 
        return {
            ...state,
            program : action.payload
        }

        default : 
            return state
    }
}


export default AcademyReducer