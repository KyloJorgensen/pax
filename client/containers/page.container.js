'use strict';
module.exports = function(name) {
	var React = require('react'),
		connect = require('react-redux').connect,
		Page = require('../components/page.component');

	var mapStateToProps = function(state, props) {
		var _props = {};
		var _config = state.config[name];
		 
		_props.name = 'name' in _config ? _config.name : '';
		_props.title = 'title' in _config ? _config.title : '';
		'buttons' in _config ? _props.buttons = _config.buttons : '';
		'titleVar' in _config ? _props.titleVar = _config.titleVar : '';
		'back' in _config ? _props.back = _config.back : '';
		'input' in _config ? _props.input = _config.input : '';
		'varButtons' in _config ? _props.varButtons = _config.varButtons : '';
		'address' in _config ? _props.address = _config.address : '';


		console.log(_props);

	    return _props;
	};

	var Container = connect(mapStateToProps)(Page);

	return Container;
};
