import { createStore, combineReducers } from 'redux'
import projectReducer from './reducers/projectReducer'
import priceReducer from './reducers/priceReducer'
import { devToolsEnhancer } from 'redux-devtools-extension'

export const store = createStore(combineReducers({ 
    project: projectReducer, 
    price: priceReducer 
}), devToolsEnhancer())