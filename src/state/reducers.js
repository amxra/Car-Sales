import * as types from './actionTypes';

const initialCarData = {
    price: 26395,
    name: '2019 Ford Mustang',
    image:
      'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: []
}

const initialStoreData = [
    { id: 1, name: 'V-6 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 }
]

const initialAddPrice = 0

function findElement(arr, id){
    return arr.filter(item => {
        return item.id === id;
    })
}

// console.log(findElement(initialStoreData, 4))


export function carReducer(state = initialCarData, action){
    switch(action.type){
        case types.ADD_FEATURE:
            if((findElement(state.features, action.payload.id)).length > 0){
                return state;
            }
            return {
                ...state, features: state.features.concat(action.payload)
            };
            
        case types.REMOVE_FEATURE:
            return {
                ...state, features: state.features.filter(item => item.id !== action.payload.id)
            }
        default:
            return state;
    }
}

export function storeReducer(state = initialStoreData, action){
    switch(action.type){
        case types.ADD_FEATURE:
            return state.filter(item => item.id !== action.payload.id)
        case types.REMOVE_FEATURE:
            return state.concat(action.payload)
        default:
            return state;
    }
}

export function additionalPriceReducer(state = initialAddPrice,action){
    switch(action.type){
        case types.ADD_FEATURE:
            return state + action.payload.price;
        case types.REMOVE_FEATURE:
            return state - action.payload.price;
        default:
            return state;
    }
}