'use strict';

var React = require('react'),
	connect = require('react-redux').connect,
	Link = require('react-router').Link,
	configActions = require('../actions/config.actions');


var Button = React.createClass({
	componentDidMount() {
		window.addEventListener('keydown', this.handleKeyDown.bind(this));
	},
	componentWillUnmount() {
		window.removeEventListener('keydown', this.handleKeyDown.bind(this));
	},
	handleKeyDown: function(e) {
		console.log(e)
		if (e.key == this.props.number) {
			this.updateVar();
			location.hash = '#'+ this.props.forward ? this.props.forward : this.props.back;
		}
	},
	updateVar: function() {
		this.props.dispatch(configActions.updateField(this.props.number, this.props.name, 'titleVar'));
	},
	render: function() {
		return (
		    <Link to={this.props.forward ? this.props.forward : this.props.back} className="button" onClick={this.updateVar} >
		  		{this.props.number}. {this.props.buttonName}
		    </Link>
		);
	}
});

var mapStateToProps = function(state, props) {
    return {};
};

var Container = connect(mapStateToProps, null, null, { withRef: true })(Button);

module.exports = Container;