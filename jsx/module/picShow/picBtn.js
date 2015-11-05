var React = require('react');

var picBtn = React.createClass({
	
	render: function() {
		var imgData = this.props.imgData,
			changImg = this.props.changImg;
		var picLiList = [];
		//for(var i = 0; i < imgData.length;i++) {
			// if(i == 0) {
 		// 		picLiList.push(
			// 		<li key={"picLiList" + i}>
			// 			<span 
			// 				className="pic_span pic_span_click" 
			// 				data-num={imgData[i].num} 
			// 				data-src={imgData[i].url} 
			// 				onClick={changImg}>&nbsp;</span>
			// 		</li>
			// 	)
			// } else {
				// picLiList.push(
				// 	<li key={"picLiList" + i}>
				// 		<span className={if (imgData[i].isFocus) { 'pic_span pic_span_click' } else {'pic_span'}} 
				// 			data-num={imgData[i].num} 
				// 			data-src={imgData[i].url}  
				// 			onClick={changImg}>&nbsp;</span>
				// 	</li>
				// )
			// }
		//}
		imgData.forEach(function(e,i){  
			if(imgData[i].isFocus) {
 				picLiList.push(
					<li key={"picLiList" + i}>
						<span 
							className="pic_span pic_span_click" 
							data-num={imgData[i].num} 
							data-src={imgData[i].url} 
							onClick={changImg}>&nbsp;</span>
					</li>
				)
			} else {
				picLiList.push(
					<li key={"picLiList" + i}>
						<span className="pic_span" 
							data-num={imgData[i].num} 
							data-src={imgData[i].url}  
							onClick={changImg}>&nbsp;</span>
					</li>
				)
			}
		})
		return (
			<div className="pic_btn">
				<ul className="pic_btn_ul">
					{picLiList}
				</ul>
			</div>
		);
	}

});

module.exports = picBtn;