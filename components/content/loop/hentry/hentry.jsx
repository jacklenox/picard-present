/**
 * External dependencies
 */
var React = require( 'react' ),
	page = require( 'page' );

/**
 * Renders post
 */
Hentry = React.createClass({
	render: function() {

		return (
			<div className="hentry-wrapper">
				<article className={ this.props.post_class }>
					<header className="entry-header">
						<h1 dangerouslySetInnerHTML={{__html: this.props.title}} className="entry-title">
						</h1>
					</header>

					<div className="entry-content" dangerouslySetInnerHTML={{__html: this.props.content}} />
				</article>
			</div>
		);
	}
});

module.exports = Hentry;