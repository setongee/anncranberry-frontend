import {createSelector} from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collection
)

export const selectedItem = collectionParamsUrl => createSelector(
    selectCollections,
    itemSelect => itemSelect[collectionParamsUrl]
)