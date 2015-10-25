var express 	= require('express'),
    config  	= require('./config'),
    jwt     	= require('jsonwebtoken'),
    useragent 	= require('useragent'),
    cookieParser = require('cookie-parser');

var router = new express.Router();


//router.use(cookieParser());


router.get("/run/:studyId", getStudy, createInstance, setToken, sendPage);


function getStudy(req, res, next){
	res.study = {
		$id: req.params.studyId
	};
	next();
}

function createInstance(req, res, next){
	var ua = useragent.parse(req.headers['user-agent']);
	var agent = ua.toJSON();
	agent.os = ua.os.toJSON();
	agent.device = ua.device.toJSON();
	agent.source = req.headers['user-agent'];

	res.studyInstance = {
		$id: Math.random(),
		studyId : res.study.$id,
		useragent: agent
	};

	next();
}

function setToken(req, res, next){
	var token = {
		studyInstanceId : res.studyInstance.$id,
		studyId: res.study.$id
	};
	res.cookie('pi-study-jwt',tokenize(token), { maxAge: 900000, httpOnly: true });
	next();
}

function sendPage(req, res){
	res.render('views/index', res);
}

function tokenize(val) {
	return jwt.sign(val, config.secret, { expiresIn: 60*60*5 });
}

module.exports = {
	router: router,
	getStudy : getStudy,
	createInstance : createInstance,
	setToken : setToken,
	sendPage : sendPage
};