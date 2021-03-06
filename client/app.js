'use strict';

var React = require('react'),
    ReactDOM = require('react-dom'),
    Provider = require('react-redux').Provider,
    store = require('./store'),
    App = require('./components/app.component'),
    HomePage = require('./containers/page.container')('Main Menu'),
    Page = require('./containers/page.container')('Communication'),
    router = require('react-router'),
    Router = router.Router,
    Route = router.Route,
    hashHistory = router.hashHistory,
    IndexRoute = router.IndexRoute,
    pages = Object.keys(require('./pages'));

var pageRoutes = [];
for (var i = 0; i < pages.length; i++) {
    var Component = require('./containers/page.container')(pages[i])
    pageRoutes.push(<Route key={i} path={'/' + pages[i]} component={Component} />);
}

var routes = (
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={HomePage} />
                {pageRoutes}
            </Route>
        </Router>
    </Provider>
);

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(routes, document.getElementById('app'));
});