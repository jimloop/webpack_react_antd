var express=require('express');
var webpack = require('webpack');
var webpackDevMiddleware= require('webpack-dev-middleware');
var webpackHotMiddleware= require('webpack-hot-middleware');
var config=require('./webpack.config');
var app = express();
var port = 3000;
var compiler= webpack(config);

app.use(express.static('./assets'));
app.use(webpackDevMiddleware(compiler,{
    quiet:true,
    publicPath:config.output.publicPath}));

app.use(webpackHotMiddleware(compiler));

app.use(function (req,res) {
    res.sendFile(__dirname,'./dist/index.html');
});

app.listen(port, function(error) {
    if(error){
        console.log(error);
    }else{
        console.log('Open http://localhost:%s', port);
    }

});