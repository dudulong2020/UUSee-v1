let express = require('express');
let app = express();
const port = 16666;
let path = require('path');
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


let session = require('express-session');
let mongoStore = require('connect-mongo')(session);
app.use(session({
	resave:true,
	saveUninitialized:true,
	secret:'uusee',
	store:new mongoStore({
		url:'mongodb://localhost:27017/uusee',
	})
}));


app.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
	res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
	res.header('Access-Control-Allow-Credentials','true');
	if(req.method==="OPTIONS") res.send(200);
	else  next();
});

let api=require('./routers/api');
app.use('/api',api);

app.listen(port, () => {
	console.log(`earlyjoy已经启动，监听${port}端口`);
});



