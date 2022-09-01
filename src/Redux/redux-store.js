import {
	applyMiddleware,
	combineReducers,
	compose,
	legacy_createStore as createStore,
} from 'redux'
import authreducer from './auth-reducer'
import messagereducer from './message-reducer'
import profilereducer from './profile-reducer'
import sidebarreducer from './sidebar-reducer'
import Usersreducer from './Users-reducer'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import appreducer from './App-reducer'
let reducers = combineReducers({
	profilePage: profilereducer,
	messagesPage: messagereducer,
	sidebar: sidebarreducer,
	UsersPage: Usersreducer,
	auth: authreducer,
	form: formReducer,
	app: appreducer,
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const Store = createStore(
	reducers,
	composeEnhancers(applyMiddleware(thunkMiddleware))
)
/* let Store = createStore(reducers, applyMiddleware(thunkMiddleware)) */
export default Store
