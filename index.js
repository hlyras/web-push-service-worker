const express = require("express");
const webpush = require("web-push");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, 'client')));

app.use(bodyParser.json());

const publicVapidKey = 'BIi7uY_Qh6qoP29pdAtlYG4v3Ih4TFUfaiipt_fl1OtFrPW7wOsDeWS_8sAnugWa3QBn6dp7_iONLMBEqWWYKRw';

const privateVapidKey = 'pehGk19oiAneaxKjnf25YZz8GTgInT_7WPhzO7GrgHw';

webpush.setVapidDetails('mailto:test@test.com', publicVapidKey, privateVapidKey);


app.post('/subscribe', (req, res) => {
	const subscription = req.body;

	// send 201 - resource created
	res.status(201).json({});

	// create payload
	const payload = JSON.stringify({ title: 'push test'});

	// pass object into sendNotification
	webpush.sendNotification(subscription, payload).catch(err => console.error(err));
});

const port = 3000;

app.listen(port, () => console.log('server listening on 3000'));

$(document).ready(function(){
	$.ajax({
		type: "POST",
		url: "/produto.php",
		data:{
			id:1
		},
		error:function(e){},
		success: function(data){
			alert(data.produtodescricao);
		}
	});
}); 