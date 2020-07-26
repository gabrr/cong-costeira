import ReduxThunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import appointments from './reducers/appointments'
import user from './reducers/user';

const reducers = combineReducers({
    appointments,
    user
})

export default createStore(reducers, composeWithDevTools(applyMiddleware(ReduxThunk)))