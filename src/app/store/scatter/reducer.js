//import { fromJS } from 'immutable';
import { LOAD_SCATTER, LOAD_CLIENT, SET_IDENTITY, SET_ACCOUNT, SET_STATUS, SET_TRANSACTION_ID } from './constants';

const initialState = {
  scatter: null,
  client: null,
  identity: null,
  account: null,
  status: null,
};

function ScatterReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_SCATTER:
      return Object.assign({},state,{scatter: action.scatter});
    case LOAD_CLIENT:
      return Object.assign({},state,{client: action.client});
    case SET_IDENTITY:
      return Object.assign({},state,{identity: action.identity});
    case SET_ACCOUNT:
      return Object.assign({},state,{account: action.account});
    case SET_STATUS:
      return Object.assign({},state,{status: action.status});
    case SET_TRANSACTION_ID:
      console.log("action", action);
      return Object.assign({},state,{transaction_id: action.transaction_id});
    default:
      return state;
  }
}

export default ScatterReducer;
