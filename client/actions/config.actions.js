'use strict';

var fetch = require('isomorphic-fetch');

var config = function() {
    return function(dispatch) {
        var url = '/';
        return fetch(url, {
            method: 'GET',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },    
        }).then(function(response) {
            if (response.status < 200 || response.status >= 300) {
                var error = new Error(response.statusText)
                error.response = response
                throw error;
            }
            return response;
        })
        .then(function(data) {
            return dispatch(configSuccess());
        })
        .catch(function(error) {
            return dispatch(configError(error));
        });
    }
};

var CONFIG_SUCCESS = 'CONFIG_SUCCESS';
var configSuccess = function(data) {
    return {
        type: CONFIG_SUCCESS
    };
};

var CONFIG_ERROR = 'CONFIG_ERROR';
var configError = function(error) {
    return {
        type: CONFIG_ERROR,
        error: error
    };
};

var UPDATEFIELD = 'UPDATEFIELD';
var updateField = function(field, name, location) {
    return {
        type: UPDATEFIELD,
        field: field,
        name: name,
        location: location,
    };
};


exports.config = config;
exports.CONFIG_SUCCESS = CONFIG_SUCCESS;
exports.configSuccess = configSuccess;
exports.CONFIG_ERROR = CONFIG_ERROR;
exports.configError = configError;
exports.UPDATEFIELD = UPDATEFIELD;
exports.updateField = updateField;