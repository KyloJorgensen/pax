'use strict';

var React = require('react'),
	connect = require('react-redux').connect,
	Page = require('../components/page.component');

var mapStateToProps = function(state, props) {
    return {
    	buttons: state.config.home.buttons,
    	title: state.config.home.title,
    };
};

var Container = connect(mapStateToProps)(Page);

module.exports = Container;