import { createStore, combineReducers, applyMiddleware } from 'redux'
import projectReducer from './reducers/projectReducer'
import priceReducer from './reducers/priceReducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

export const store = createStore(combineReducers({ 
    project: projectReducer, 
    price: priceReducer 
}), composeWithDevTools(applyMiddleware(thunk)))