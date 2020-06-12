import React from 'react';

class Bomb extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            note: 'tick',
        }
    }
    componentDidMount() {
        console.log('componentDidMount');
        this.interval = setInterval(() => {
            this.setState({
                count: this.state.count + 1,
            });
            if(this.state.count >= 8) {
                this.setState({note: 'BOOOM!!!'});
                clearInterval(this.interval);
            } else if(this.state.count%2 === 0 || this.state.count === 0) {
                this.setState({ note: 'tick'})
            } else {
                this.setState({ note: 'tock'})
            }
        }, 1000)
    }
    componentWillUnmount() {
        
    }
    render() {
		return (
			<div>
                <p>{this.state.note}</p>
            </div>
		)
	}
}

export default Bomb;