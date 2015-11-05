var React = require('react'),
	ImgArea = require("./picShow/imgArea.js"),
	PicTitle = require("./picShow/picTitle.js"),
	PicBtn = require("./picShow/picBtn.js");

var picShow = React.createClass({
	getInitialState: function() {
		return {
			imgData :[
						{'num':0,'url':'/dist/img/picShow/1.jpg','title':'11111','isFocus':true,"href":"javascript:void(0);"}, 
						{'num':1,'url':'/dist/img/picShow/2.jpg','title':'22222','isFocus':false,"href":"javascript:void(0);"}, 
						{'num':2,'url':'/dist/img/picShow/3.jpg','title':'33333','isFocus':false,"href":"javascript:void(0);"}, 
						{'num':3,'url':'/dist/img/picShow/4.jpg','title':'44444','isFocus':false,"href":"javascript:void(0);"},
						{'num':4,'url':'/dist/img/picShow/5.jpg','title':'55555','isFocus':false,"href":"javascript:void(0);"}
					],
			imgUrl : [{'num':0,'url':'/dist/img/picShow/1.jpg','title':'11111','isFocus':true}]
		};
	},
	setUrl:function(imgData) {
		this.setState({
			imgUrl : [imgData]
		});
	},
	changImg: function(event) {
		this.picEnd()
		var imgData = this.state.imgData,
			setUrl = this.setUrl,
			nowSpan = event.target,
			nowNum = nowSpan.getAttribute("data-num");
		imgData.forEach(function(e,i) {
			if(imgData[i].isFocus) {
				imgData[i].isFocus = false;
			}
		});
		imgData[nowNum].isFocus = true;
		this.setState({
			imgData : imgData
		});
		setUrl(imgData[nowNum]);
		this.picStart();
	},
	changeImgAuto:function() {
		var imgData = this.state.imgData,
			setUrl = this.setUrl,
			nowNum,
			eq;
		imgData.forEach(function(e,i) {
			if(imgData[i].isFocus) {
				imgData[i].isFocus = false;
				if(i == (imgData.length - 1) ) {
					nowNum = 0
				} else {
					nowNum = i + 1;
				}
			}
		});
		imgData[nowNum].isFocus = true;
		this.setState({
			imgData : imgData
		});
		setUrl(imgData[nowNum]);
	},
	componentDidMount: function() {
		this.picStart();
	},
	componentWillUnmount: function() {
		this.picEnd();
	},
	picStart:function() {
		this.timer = setInterval(this.changeImgAuto,1000);
	},
	picEnd:function() {
		clearInterval(this.timer);
	},
	render: function() {
		return (
			<div className="pic_show" onMouseEnter={this.picEnd} onMouseLeave={this.picStart} >
				<ImgArea imgUrl = {this.state.imgUrl}/>
				<PicTitle imgUrl = {this.state.imgUrl}/>
				<PicBtn ref="pic_btn_ul" imgData = {this.state.imgData} changImg = {this.changImg}/>
			</div>
		);
	}

});

module.exports = picShow;