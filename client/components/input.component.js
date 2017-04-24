'use strict';

var React = require('react'),
	connect = require('react-redux').connect,
	Link = require('react-router').Link,
	configActions = require('../actions/config.actions');


var Input = React.createClass({
	getInitialState: function() {
		return {
			input: this.props.input
		};
	},
	handleChange: function(e) {
		var _state = this.state;
		_state.input = e.target.value;
		this.setState(_state);
	},
	submitUpdate: function(e) {
		if (e) {e.preventDefault();}
		this.props.dispatch(configActions.updateField(this.state.input, this.props.name, 'input'));
		if (this.props.forward) {
			location.hash = '#'+ this.props.forward;
		} else {
			location.hash = '#'+ this.props.back;
		}
	},
	render: function() {
		return (
			<form id='paxform' onSubmit={this.submitUpdate} >
		    	<input id='paxinput' onFocus={this.handleChange} autoComplete="off" value={this.state.input} onChange={this.handleChange} autoFocus='true' />
			</form>
		);
	}
});

var mapStateToProps = function(state, props) {
	var _props = {
    	input: state.config[props.name].input,
    	back: state.config[props.name].back,
    	forward: state.config[props.name].forward 
    };
	return _props;
};

var Container = connect(mapStateToProps, null, null, { withRef: true })(Input);

module.exports = Container;