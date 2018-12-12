const express = require('express')

const app = express();
const bodyparser = require('body-parser');

const gifts = []

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyparser.urlencoded({extended: false}))

app.get('/', (req, res, next) => {
	res.render('index', {
		pageTitle: "Home"
	})
});

app.get('/gifts', (req, res, next) => {
	res.render('gifts', {
		pageTitle: "Gifts",
		gifts: gifts,
	})
});

app.post('/add-gift', (req, res, next) => {
	gifts.push({name: req.body.gift})
	res.redirect('/gifts')
	console.log(req.body.gift)
})


app.listen(8080);