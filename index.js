var runtime=require("ksana2015-webruntime");
runtime.boot("testapp2",function(){
	var Main=React.createElement(require("./src/main.jsx"));
	ksana.mainComponent=React.render(Main,document.getElementById("main"));
});