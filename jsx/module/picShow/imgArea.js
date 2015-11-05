var React = require('react');

var imgArea = React.createClass({

	render: function() {
		var imgData = this.props.imgUrl;
		return (
			<div className="img_area">
				<a href={imgData[0].href}><img src={imgData[0].url} alt="" width="100%" height="100%" /></a>
			</div>
		);
	}

});

module.exports = imgArea;