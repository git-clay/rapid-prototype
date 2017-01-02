var express		= require('express'),
	bodyParser	= require('body-parser'),
	app			= express(),
	db			= require('./models');

// serve static files from public folder
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static('public'));
/*********************** VIEWS ******************************/


	

app.set('views', './views');

app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});










// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});