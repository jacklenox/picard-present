/**
 * External dependencies
 */
var React = require( 'react' ),
	page = require( 'page' );

/**
 * Internal dependencies
 */
var Router = require( './router/router.jsx' );

/**
 * Make it so…
 */
React.render(
	<Router />, document.getElementById( 'main' )
);