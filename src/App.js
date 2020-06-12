import React, { Component } from 'react';
//import Split from './composition/Split';
import './App.css';
//import Tooltip from './composition/Tooltip';
import Messages from './Messages';
import TheDate from './state/TheDate.js';
import Counter from './state/Counter.js';

//const firstTooltip = (
//	<Tooltip color='hotpink' message='tooltip message'>
//		ipsum
//	</Tooltip>
//);
//
//const secondTooltip = (
//	<Tooltip color='#126BCC' message='another tooltip message'>
//		offiicius
//	</Tooltip>
//);

class App extends Component {
	static defaultProps = {
		step: 1,
	};
	render() {
		return (
			<div className="App">
				<h1>YOUR APPLICATION NAME!</h1>
				<TheDate />
				<Counter count={{step: this.props.step}}/>
				<Messages name="Messages" unread={0}/>
				<Messages name="Notifications" unread={10}/>
			</div>
		);
	}
}

export default App;