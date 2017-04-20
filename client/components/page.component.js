'use strict';

var React = require('react'),
	connect = require('react-redux').connect,
	Button = require('./button.component'),
	NumberPad = require('./numberPad.component'),
	Input = require('./input.component'),
	Address = require('./address.component'),
	Link = require('react-router').Link;

var homePage = React.createClass({
	render: function() {
		
		var content;

		if ('buttons' in this.props) {
			var buttons = [];
			for (var i = 0; i < this.props.buttons.length; i++) {
				buttons.push(<li key={i} ><Button name={this.props.buttons[i]} number={i + 1} /></li>);
			}
			content = (<ul>{buttons}</ul>);
		} else if ('input' in this.props) {
			content = (<Input name={this.props.name} />)
		} else if ('address' in this.props) {
			content = (<Address name={this.props.name} />)
		} else if ('varButtons' in this.props) {
			var buttons = [];
			for (var i = 0; i < this.props.varButtons.length; i++) {
				buttons.push(<li key={i} ><p>{i + 1}. {this.props.varButtons[i]}</p></li>);
			}
			content = (<ul>{buttons}</ul>);
		}
		
		var titleVar = '';
		if ('titleVar' in this.props) {
			titleVar = ': '+ this.props.titleVar;
		}
		var back = '';
		if ('back' in this.props) {
			back = (<Link to={this.props.back} >Back</Link>)
		}
		return (
		    <div className="home-page-wrapper" >
		    	<h1>{this.props.title}{titleVar}</h1>
		    	{content}
		    	{back}
				<div>
					<NumberPad buttons={this.props.buttons} name={this.props.name} />
				</div>
		    </div>
		);
	}
});

var mapStateToProps = function(state, props) {
    return {};
};

var Container = connect(mapStateToProps)(homePage);

module.exports = Container;