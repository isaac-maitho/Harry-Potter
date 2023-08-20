import { legacy_createStore as createStore, combineReducers, applyMiddleware, legacy_createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
   harryPotterReducer
} from './contexts/charactersReducer'


const reducer = combineReducers({
    fetchCharacters: harryPotterReducer,
   
})



const middleware = [thunk]



const store = legacy_createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)





export default store