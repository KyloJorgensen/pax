'use strict';

var React = require('react'),
	connect = require('react-redux').connect,
	Link = require('react-router').Link,
	configActions = require('../actions/config.actions');


var Input = React.createClass({
	getInitialState: function() {
		return {
			address: this.props.address
		};
	},
	handleChange: function(e) {
		var _address = e.target.value;
		if (_address.length > this.props.address.length) {
			_address = this.state.address;
		}		
		if (_address.length != this.props.address.length && _address.length%4 == 3) {
			if (_address.length < this.state.address.length) {
				_address = _address.slice(0, _address.length - 1);
			} else if (_address.length > this.state.address.length) {
				_address = _address + '.';
			}
		}

		var splitAddress = _address.split("");
		for (var i = 0; i < splitAddress.length; i++) {
			var number = parseInt(splitAddress[i]);
			if ((i+1)%4 == 0) {
				if (splitAddress[i] != '.') {
					_address = this.state.address;
				}
			} else if (!(number >= 0 || number <= 9)) {
				_address = this.state.address;
			}
		}

		var _state = this.state;
		_state.address = _address;
		this.setState(_state);
	},
	submitUpdate: function(e) {
		if (e) {e.preventDefault();}
		if (this.state.address.length != this.props.address.length) {
			return;
		}
		this.props.dispatch(configActions.updateField(this.state.address, this.props.name, 'address'));
		location.hash = '#'+ this.props.back;
	},
	render: function() {
		return (
			<form onSubmit={this.submitUpdate} >
		    	<input id='paxinput' onFocus={this.handleChange} autoComplete="off" value={this.state.address} onChange={this.handleChange} autoFocus='true' />
			</form>
		);
	},
});

var mapStateToProps = function(state, props) {
    return {
    	address: state.config[props.name].address,
    	back: state.config[props.name].back,
    };
};

var Container = connect(mapStateToProps, null, null, { withRef: true })(Input);

module.exports = Container;