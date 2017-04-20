'use strict';

var React = require('react'),
	connect = require('react-redux').connect

var TestPage = React.createClass({
	render: function() {  		
		return (
		    <div className="home-page-wrapper" >
		    	test
		    </div>
		);
	}
});

var mapStateToProps = function(state, props) {
    return {};
};

var Container = connect(mapStateToProps)(TestPage);

module.exports = Container;