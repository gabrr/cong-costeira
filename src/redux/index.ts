import ReduxThunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import appointments from './reducers/appointments'

const reducers = combineReducers({
    appointments 
})

export default createStore(reducers, composeWithDevTools(applyMiddleware(ReduxThunk)))