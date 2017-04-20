'use strict';

var actions = require('../actions/config.actions'),
	configInitialState = require('../pages');

var configReducer = function(state, action) {
    state = state || configInitialState;
    var _state = state;
    if (actions.UPDATEFIELD === action.type) {
    	_state[action.name][action.location] = action.field;
    }
    return _state;
};

module.exports = configReducer;