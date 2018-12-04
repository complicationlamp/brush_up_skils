import React from 'react';
import ReactDOM from 'react-dom'; 


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { lat: null };

		//put in constructor becasuse it is always called first
		window.navigator.geolocation.getCurrentPosition(
			(position) => {
				// console.log(position.coords.latitude)
				this.setState({ lat: position.coords.latitude});
			},
			(err) => console.log(err)
		);
	}

	render() {
		// us standard js template literl to pull in the state
		return <div>latitude: {this.state.lat} </div>
	}
}

ReactDOM.render(
	<App />, document.querySelector('#root')
)