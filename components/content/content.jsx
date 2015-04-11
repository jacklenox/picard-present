/**
 * External dependencies
 */
var React = require( 'react' );

/**
 * Internal dependencies
 */
var Loop = require( './loop/loop.jsx' );

/**
 * Handles getting of posts from the server
 */
Content = React.createClass({
	render: function() {
		// Check if we're just viewing one post, if so, pass the ID down
		if ( this.props.data.length === 1 ) {
			singlePostID = this.props.data[0].ID;
		} else {
			singlePostID = 0;
		}
		return (
			<Loop data={ this.props.data } context={ this.props.bodyClass } postID={ singlePostID } />
		);
	}
});

module.exports = Content;