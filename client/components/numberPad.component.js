'use strict';

var React = require('react'),
	connect = require('react-redux').connect,
	Link = require('react-router').Link;

var NumberPad = React.createClass({
	render: function() {
		var buttons = [];
		console.log(this.props)
		if (this.props.buttons != undefined) {
			for (var i = 0; i < 9; i++) {
				if (this.props.buttons.length > i ) {
					buttons.push(<li key={i} ><Link to={this.props.config[this.props.buttons[i]].link} className="button" >{i + 1}</Link></li>);
				} else {
					buttons.push(<li key={i} ><Link to={'/'+this.props.name} className="button" >{i + 1}</Link></li>);
				}
			}	
		} else {

		}
		
		return (
		    <div className="home-page-wrapper" >
		    	<ul>
		    		{buttons}
		    	</ul>
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
