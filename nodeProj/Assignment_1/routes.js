

const requestHandler = (req, res) => {
	const url = req.url;
	const method = req.method;
	// console.log()
	if(url === '/'){
		res.write('<html>')
		res.write('<head><title>at /</title></head>');
		res.write('<body><form action="/create-user" method="POST"><input type="text" name="usrname"><button type="submit">Send</button></form></body>');
		res.write('</html>')
		return res.end();
	};

	if(url ==='/create-user' && method === 'POST'){
		const body = [];
		req.on('data', (chunk) =>{
			body.push(chunk);
		});
		return req.on('end', () => {
			const parsedBody = Buffer.concat(body).toString();
			const usrname = parsedBody.split('=')[1];
			console.log(usrname);
			res.statusCode = 302;
			res.setHeader('Location', '/create-user' );
			return res.end();
		})
	}

	if(url === '/create-user') {
		res.write('<html>')
		res.write('<head><title>at /</title></head>');
		res.write('<body>redirected successfuly</body>');
		res.write('</html>')
		return res.end();
	}

	if(url === '/users') {
		res.write('<html>')
		res.write('<head><title>at /</title></head>');
		res.write('<body><ul>users<li>kim</li><li>Steve</li><li>Bob</li></ul></body>');
		res.write('</html>')
		return res.end();
	}



	res.setHeader('Content-Type', 'text/html');
	res.write('<html>')
	res.write('<head><title>My First Page</title></head>');
	res.write('<body><h1>Hello from node</h1></body>');
	res.write('</html>')
	res.end();
}

module.exports = requestHandler;