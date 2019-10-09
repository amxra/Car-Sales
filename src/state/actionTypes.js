//STEP 2 - DESIGN  ALL ACTIONS THE STATE WILL SUFFER


export function newFeature(feature){
    return {
        type: ADD_FEATURE,
        payload: feature
    }
}

export function deleteFeature(feature){
    return {
        type: DELETE_FEATURE,
        payload: feature
    }
}