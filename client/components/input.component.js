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
	sumbitUpdate: function(e) {
		e.preventDefault();
		this.props.dispatch(configActions.updateField(this.state.input, this.props.name, 'input'));
		console.log(this.props)
		location.hash = '#'+ this.props.back;
	},
	render: function() {
		return (
			<form onSubmit={this.sumbitUpdate} >
		    	<input value={this.state.input} onChange={this.handleChange} autoFocus='true' />
			</form>
		);
	}
});

var mapStateToProps = function(state, props) {
    return {
    	input: state.config[props.name].input,
    	back: state.config[props.name].back,
    };
};

var Container = connect(mapStateToProps)(Input);

module.exports = Container;