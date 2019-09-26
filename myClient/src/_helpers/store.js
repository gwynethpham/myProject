import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../_reducers';

const loggerMiddleware = createLogger();
const composeEnhancers = (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'staging')
    ? (typeof window === 'object' &&  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        })
        : '')
    : (typeof window === 'object' && '')

export const store = createStore(
    rootReducer,
    composeEnhancers(
    	applyMiddleware(
		        thunkMiddleware,
		        loggerMiddleware
		    )
    )
   
);