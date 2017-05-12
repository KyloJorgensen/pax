'use strict';

var React = require('react'),
	connect = require('react-redux').connect,
	Button = require('./button.component'),
	NumberPad = require('./numberPad.component'),
	Input = require('./input.component'),
	Address = require('./address.component'),
	VarButton = require('./varButton.component'),
	Password = require('./password.component'),
	Link = require('react-router').Link;

var homePage = React.createClass({
	sumbitform: function() {
		'paxform' in this.refs ? this.refs.paxform.getWrappedInstance().submitUpdate() : '';
	},
	clickButton: function(button) {
		if ('button'+button in this.refs) {
			this.refs['button'+button].getWrappedInstance().handleKeyDown({key: button});
		}
	},
	render: function() {
		
		var content;

		if ('buttons' in this.props) {
			var style = {};
			if (this.props.buttons.length > 3) {
				style = {'display': 'inline-block', 'width': '50%'};
			}

			var buttons = [];
			for (var i = 0; i < this.props.buttons.length; i++) {
				buttons.push(<li key={i} style={style} ><Button ref={'button'+(i+1)} name={this.props.buttons[i]} number={i + 1} /></li>);
			}
			content = (<ul>{buttons}</ul>);	
		} else if ('varButtons' in this.props) {
			var varButtons = [];
			for (var i = 0; i < this.props.varButtons.length; i++) {
				var forward = 'varButtonOptions' in this.props ? this.props.varButtonOptions[i] : null;
				varButtons.push(<li key={i} ><VarButton ref={'button'+(i+1)} name={this.props.name} buttonName={this.props.varButtons[i]} back={this.props.back} forward={forward} number={i + 1} /></li>);
			}
			content = (<ul>{varButtons}</ul>);
		} else if ('input' in this.props) {
			content = (<Input ref="paxform" name={this.props.name} />)
		} else if ('address' in this.props) {
			content = (<Address ref="paxform" name={this.props.name} />)
		} else if ('password' in this.props) {
			content = (<Password ref="paxform" name={this.props.name} />)
		}
		
		var titleVar = '';
		if ('titleVar' in this.props) {
			titleVar = ': '+ this.props.titleVar;
		}
		
		var back = '';
		if ('back' in this.props) {
			back = (<Link to={this.props.back} style={{'bottom': '0','position': 'absolute'}} >back</Link>);
		}	
		
		var next = '';
		if ('next' in this.props) {
			console.log(this.props.next)
			next = (<Link to={this.props.next} style={{'position': 'absolute','top': '51%', 'right': '10px', 'color': '#2626d4', 'font-size': '32px'}} >&gt;</Link>);
		}
		
		var prev = '';
		if ('prev' in this.props) {
			prev = (<Link to={this.props.prev} style={{'position': 'absolute','top': '51%', 'left': '10px', 'color': '#2626d4', 'font-size': '32px'}} >&lt;</Link>);
		}

		return (
		    <div className="home-page-wrapper" >
		    	<div className="screen-wrapper">
		    		<div className="screentopbar"></div>
		    		<div className="screen">
		    			<div className="innerscreen">
			    			<h3 style={{'font-weight': 'normal'}} >{this.props.title}{titleVar}</h3>
			    			{prev}
			    			{content}
			    			{next}
			    			{back}
						</div>
					</div>
				</div>
				<div>
					<NumberPad paxform={this.sumbitform} clickButton={this.clickButton} buttons={this.props.buttons} name={this.props.name} back={this.props.back} />
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