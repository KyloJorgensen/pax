'use strict';

var React = require('react'),
	connect = require('react-redux').connect,
	Button = require('./button.component'),
	Page = require('./page.component');

var homePage = React.createClass({
	render: function() {  		
		return (
		    <div className="home-page-wrapper" >
		    	<Page title='title' buttons={this.props.buttons} />
		    </div>
		);
	}
});

var mapStateToProps = function(state, props) {
    return {
    	buttons: state.config.home.buttons
    };
};

var Container = connect(mapStateToProps)(homePage);

module.exports = Container;