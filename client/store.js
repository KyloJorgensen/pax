'use strict';

var redux = require('redux'),
	createStore = redux.createStore,
	applyMiddleware = redux.applyMiddleware,
	thunk = require('redux-thunk').default,
	ConfigReducer = require('./reducer/config.reducer');

var initialState = {};

var reducers = function(state, action) {
    state = state || initialState;
    var _state = {};
	_state.config = ConfigReducer(state.config, action);
    return _state;
};

var store = createStore(reducers, applyMiddleware(thunk));

module.exports  = store;