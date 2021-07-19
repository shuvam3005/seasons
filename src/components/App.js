import React, { Component } from "react";

class App extends Component {
	render() {
		navigator.geolocation.getCurrentPosition(
			(pos) => console.log(pos.coords),
			(err) => console.log(err.message)
		);

		return <div>Hello app</div>;
	}
}

export default App;
