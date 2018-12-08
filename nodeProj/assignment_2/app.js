const express = require('express');
const app = express();

// app.use((req, res, next) =>{
// 	console.log('first middleware');
// 	next();
// })

// app.use((req, res, next) =>{
// 	console.log('second middleware');
// 	res.send('<h1>at 8080</h1>')
// })

app.use('/users', (req, res, next) =>{
	console.log('second middleware');
	res.send('<h1>at the "/users" route</h1>')
})

app.use('/', (req, res, next) =>{
	console.log('first middleware');
	res.send('<h1>at the "/" route</h1>')
})

app.listen(8080);