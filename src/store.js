import { createStore, combineReducers, applyMiddleware } from 'redux'
import projectReducer from './reducers/projectReducer'
import priceReducer from './reducers/priceReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

export const store = createStore(combineReducers({ 
    project: projectReducer, 
    price: priceReducer 
}), composeWithDevTools(applyMiddleware(thunk)))