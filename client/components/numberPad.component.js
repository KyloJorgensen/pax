'use strict';

var React = require('react'),
	connect = require('react-redux').connect,
	Link = require('react-router').Link;

var NumberPad = React.createClass({
	keyClick: function(e) {
		if (document.getElementById('paxinput')) {
			document.getElementById('paxinput').value = document.getElementById('paxinput').value + e.target.innerText;
			document.getElementById('paxinput').focus();
		} else {
			this.props.clickButton(e.target.innerText)
		}
	},
	clear: function() {
		document.getElementById('paxinput').value = document.getElementById('paxinput').value.slice(0, document.getElementById('paxinput').value.length - 1);;
		document.getElementById('paxinput').focus();
	},
	submit: function() {
		if ('paxform' in this.props) {
			this.props.paxform();
		}
	},
	render: function() {
		var buttons = [];
		if (this.props.buttons != undefined) {
			for (var i = 0; i < 9; i++) {
				if (this.props.buttons.length > i ) {
					buttons.push(<li key={i} ><Link to={this.props.config[this.props.buttons[i]].link} className="button" >{i + 1}</Link></li>);
				} else {
					buttons.push(<li key={i} ><Link to={'/'+this.props.name} className="button" >{i + 1}</Link></li>);
				}
			}	
		} else {
			for (var i = 0; i < 9; i++) {
				buttons.push(<li key={i} ><a onClick={this.keyClick} className="button" >{i + 1}</a></li>);
			}

		}
		
		return (
		    <div className="home-page-wrapper" >
		    	<ul>
		    		{buttons}
		    	</ul>
		    	
		    	<Link to={this.props.back} >Back</Link>
		    	<a onClick={this.keyClick} className="button" >{0}</a>
		    	<a onClick={this.clear} >clear</a>
		    	<a onClick={this.submit} >submit</a>
		    </div>
		);
	}
});

var mapStateToProps = function(state, props) {
    return {
    	config: state.config
    };
};

var Container = connect(mapStateToProps)(NumberPad);

module.exports = Container;
