//firebase functions:config:set gmail.email="sufiter@gmail.com" gmail.password="siwa3475"
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const mailTransport = nodemailer.createTransport(`smtps://sufiter@gmail.com:siwa3475@smtp.gmail.com`);

admin.initializeApp(functions.config().firebase);

 exports.sendEmail = functions.https.onRequest((req , res) => {
	 const mailOptions = {
		 to: 'sovizer@gmail.com',/*'mit-2@yandex.ru',*/
		 subject: `Заголовок сообщения`,
		 replyTo : 'der@wer.com',
		 sender : 'der@wer.com',
		 html: '<p> Имя отправителя и Текст сообщения <a target="_blank" href="/">Ответить</a></p>'
	 };
	 	mailTransport.sendMail(mailOptions).then(()=>{
			res.json({'send' : 'true'}) ;
	 })  ;
/*	 res.json({'send' : 'true'});*/
 });
 exports.adminData = functions.https.onRequest((req, res) => {//вызов функции
	
	 if('*beast*admin*' === req.query.pass){
		admin.database().ref('/messages').once('value').then((dataSnapshot) => {
			let dataArr = [],
				data = dataSnapshot.val();
			for(let key in data){
				dataArr.push(data[key]);
			}
			res.json(dataArr)
		})
	}
	else{
		res.json([{name : 'Server', email : 'none', message : 'Вы не являетесь администратором!'}]);
	}
 }) ;
