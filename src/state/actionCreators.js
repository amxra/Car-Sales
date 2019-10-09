import * as types from './actionTypes';

export function addFeature(item){
    return {
        type: types.ADD_FEATURE,
        payload: item
    }
}

export function removeFeature(item){
    return {
        type: types.REMOVE_FEATURE,
        payload: item
    }
}