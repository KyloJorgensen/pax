'use strict';

var React = require('react'),
	connect = require('react-redux').connect,
	Link = require('react-router').Link,
	configActions = require('../actions/config.actions');


var Password = React.createClass({
	getInitialState: function() {
		return {
			password: '',
			tries: 0,
		};
	},
	handleChange: function(e) {
		var _state = this.state;
		_state.password = e.target.value;
		this.setState(_state);
	},
	submitUpdate: function(e) {
		if (e) {e.preventDefault();}
		if (this.state.password.length == this.props.password.length) {
			location.hash = '#'+ this.props.forward;
		} else if (this.state.tries > 3) {
			location.hash = '#'+ this.props.back;
		} 
		var _state = this.state;
		_state.password = '';
		this.setState(_state);
	},
	render: function() {
		return (
			<form onSubmit={this.submitUpdate} >
		    	<input id='paxinput' onFocus={this.handleChange} autoComplete="off" value={this.state.password} onChange={this.handleChange} autoFocus='true' />
			</form>
		);
	}
});

var mapStateToProps = function(state, props) {
    return {
    	password: state.config[props.name].password,
    	back: state.config[props.name].back,
    	forward: state.config[props.name].forward,
    };
};

var Container = connect(mapStateToProps, null, null, { withRef: true })(Password);

module.exports = Container;