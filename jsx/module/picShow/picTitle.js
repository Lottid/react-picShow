var React = require('react');

var picTitle = React.createClass({

	render: function() {
		var imgData = this.props.imgUrl;
		return (
			<div className="pic_title opacity">
				<a href={imgData[0].href} className="pic_title_a">{imgData[0].title}</a>
			</div>
		);
	}

});

module.exports = picTitle;