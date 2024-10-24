import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { thunk } from 'redux-thunk';

import initialStore from './store.initials';
import customer from './reducers/customerReducer';

const rootReducer = combineReducers({
	customer
});

export default () =>
	createStore(
		rootReducer,
		initialStore.loadInitials(),
		composeWithDevTools(applyMiddleware(thunk))
	);