'use strict';

var React = require('react'),
	connect = require('react-redux').connect,
	Page = require('../components/page.component');

var mapStateToProps = function(state, props) {
	console.log(state, props)
    return {
    	buttons: state.config.Communication.buttons,
    	title: state.config.Communication.title,
    };
};

var Container = connect(mapStateToProps)(Page);

module.exports = Container;