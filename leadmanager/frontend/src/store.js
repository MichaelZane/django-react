import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const iniitialState = {}

const middleware = [thunk]

const store = createStore(
    rootReducer,
    iniitialState,
    composeWithDevTools(applyMiddleware(...middleware
        ))//...middleware
)

export default store