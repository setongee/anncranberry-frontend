import {createSelector} from 'reselect';

const paidSelector = state => state.coursePaid

export const selectCurrentUser = createSelector(
    paidSelector,
    (course) => course.paid
)