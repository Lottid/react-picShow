require('../dist/css/picShow/picShow.css');
var React = require('react'),
	ReactDOM = require('react-dom'),
	Main = require("./module/picShow.js");
	
ReactDOM.render( <Main />,
	document.getElementById('app'),
	function() {
		console.log('渲染完成啦！!！');
	}
);