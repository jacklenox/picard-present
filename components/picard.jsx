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
 * A quick and dirty way of hijacking any clicks on the navigation and passing the requests to our router
 */
jQuery( 'li.page_item a' ).click( function( e ) {
	e.preventDefault();
	var url = jQuery( this ).attr('href');
	url = url.replace(/^.*\/\/[^\/]+/, '');
	page( url );
});

/**
 * Make it so…
 */
React.render(
	<Router />, document.getElementById( 'main' )
);