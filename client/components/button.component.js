'use strict';

var React = require('react'),
	connect = require('react-redux').connect,
	Link = require('react-router').Link;


var Button = React.createClass({
	componentDidMount() {
		window.addEventListener('keydown', this.handleKeyDown.bind(this)); //notice .bind
	},
	componentWillUnmount() {
		window.removeEventListener('keydown', this.handleKeyDown.bind(this));
	},
	handleKeyDown: function(e) {
		console.log(e)
		if (e.key == this.props.number) {
			location.hash = '#'+ this.props.link;
		}
	},
	render: function() {
		return (
		    <Link to={this.props.link} className="button" >
		  		{this.props.number}. {this.props.name}
		    </Link>
		);
	}
});

var mapStateToProps = function(state, props) {
    return {
    	link: state.config[props.name].link,
    };
};

var Container = connect(mapStateToProps)(Button);

module.exports = Container;