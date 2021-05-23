/****************
 * App reducers *
 ****************/
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import authUserReducer from './auth';
import overloading from './overloading';
import exchange from './exchange';
import header from './header';
const reducers = history => combineReducers({
  router: connectRouter(history),
  authUser: authUserReducer,
  overloading,
  exchange,
  header
});

export default reducers;