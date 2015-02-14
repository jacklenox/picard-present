/**
 * External dependencies
 */
var React = require( 'react' ),
	page = require( 'page' );

/**
 * Renders post
 */
Hentry = React.createClass({
	handleAdd: function( e ) {
		e.preventDefault();
		url = this.props.link;
		url = url.replace(/^.*\/\/[^\/]+/, '');
		page( url );
	},
	render: function() {
		var d = new Date( this.props.date ),
			formattedDate = d.toDateString();

		return (
			<div className="hentry-wrapper">
				<article className={ this.props.post_class }>
					<header className="entry-header">
						<h1 className="entry-title">
							<a onClick={this.handleAdd} dangerouslySetInnerHTML={{__html: this.props.title}} href={this.props.link} rel="bookmark">
							</a>
						</h1>
						<div className="entry-meta">
							{formattedDate}
						</div>
					</header>

					<div className="entry-content" dangerouslySetInnerHTML={{__html: this.props.content}} />
				</article>
			</div>
		);
	}
});

module.exports = Hentry;