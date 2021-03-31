import {createSelector} from 'reselect';

const selectCourse = state => state.academy;

export const selectAcademyCourse = createSelector(
    selectCourse,
    academy => academy.courses
)

export const selectEnrolledCourse = createSelector(
    selectCourse,
    academy => academy.program
)

export const selectedItem = collectionParamsUrl => createSelector(
    selectCourse,
    itemSelect => itemSelect.courses.find(course => course.uid === collectionParamsUrl)
)