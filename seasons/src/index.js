import React from 'react';
import ReactDOM from 'react-dom'; 
import SeasonDisplay from './SeasonDisplay';


class App extends React.Component {
	state = { lat: null, errorMessage: '' };

	componentDidMount() {
		console.log('My component was rendered')
		window.navigator.geolocation.getCurrentPosition(
			(position) => this.setState({ lat: position.coords.latitude}),
			(err) => this.setState({errorMessage: err.message})
		);
	}

	componentDidUpdate(){
		console.log('my component did update')
	}

	render() {
		// us standard js template literl to pull in the state
		if(this.state.errorMessage && !this.state.lat){
			return <div>Error: {this.state.errorMessage}</div>
		}

		if (!this.state.errorMessage && this.state.lat){
			return <SeasonDisplay lat={this.state.lat} />
		}

		return <div> Loading!</div>
	}
}

ReactDOM.render(
	<App />, document.querySelector('#root')
)