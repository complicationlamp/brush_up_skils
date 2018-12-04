// import react and reactDOM libraries 
import React from 'react';
import ReactDOM from 'react-dom';

// crreate a react component
const App =  () => {
	const buttonText = {text: 'test'}
	return (
	<div>
		<label className="lable" htmlFor="name">
		Enter name:
		</label>
		<input id="name" type="text" />
		<button style={{backgroundColor: 'blue', color: 'white'}}>
			{buttonText.text}
		</button>
	</div>
	)
};

// Take the rreact component and show it on the screen 
ReactDOM.render(
	<App />,
	document.querySelector('#root')
);  