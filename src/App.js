import React, { Component } from 'react';
//import Split from './composition/Split';
import './App.css';
//import Tooltip from './composition/Tooltip';
//import Messages from './Messages';
//import TheDate from './state/TheDate.js';
//import Counter from './state/Counter.js';
import Tabs from './tabs/Tabs.js';
import Accordion from './state-drills/Accordion.js';

//Tabs
const tabsProp = [
	{ 
		name: 'First tab',
		content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' 
	},
	{ 
		name: 'Second tab',
		content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' 
	},
	{ 
		name: 'Third tab',
		content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' 
	},
];

const sectionsProp = [
	{ 
		title: 'First Section',
		content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' 
	},
	{ 
		title: 'Second Section',
		content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' 
	},
	{ 
		title: 'Third Section',
		content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' 
	},
];

class App extends React.Component {
	static defaultProps = {
		step: 1,
	};
	render() {
		return (
			<div className="App">
				<Accordion sections={sectionsProp} />
			</div>
		);
		/*	
		return (
			<div className="App">
				<h1>YOUR APPLICATION NAME!</h1>
				<Tabs tabs={tabsProp} />
				<Accordion />
			</div>
		);
		*/
		/*
		//Messages
		return (
			<div className="App">
				<h1>YOUR APPLICATION NAME!</h1>
				<Messages name="Messages" unread={0}/>
				<Messages name="Notifications" unread={10}/>
			</div>
		);
		*/
		/*
		//Counter
		return (
			<div className="App">
				<h1>YOUR APPLICATION NAME!</h1>
				<Counter count={{step: this.props.step}}/>
			</div>
		);
		*/
		/*
		//Date
		return (
			<div className="App">
				<h1>YOUR APPLICATION NAME!</h1>
				<TheDate />
			</div>
		);
		*/
	}
}

export default App;