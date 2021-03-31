import {createSelector} from 'reselect';

const selectMenu = state => state.menu;

export const selectMenuView = createSelector(
    selectMenu,
    menu => menu.hidden
)