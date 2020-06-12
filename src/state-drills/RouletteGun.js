import React from 'react';

class RouletteGun extends React.Component {
    static defaultProps = {
        bulletInChamber: 8,
    };

    constructor(props) {
        super(props);
        this.state = {
            chamber: null,
            spinningTheChamber: false,
        };
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    handleClick = () => {
        this.setState({
            spinningTheChamber: true,
        })
        this.timeout = setTimeout(() => {
            const randomChamber = Math.ceil(Math.random() * 8);
            this.setState({
                chamber: randomChamber,
                spinningTheChamber: false,
            })
        }, 2000);
    }

    renderDisplay() {
        const chamber = this.state.chamber;
        const spinningTheChamber = this.state.spinningTheChamber;
        const bulletInChamber = this.props;
        if(spinningTheChamber) {
            return 'spinning the chamber and pulling the trigger! ...';
        } else if (chamber === bulletInChamber) {
            return 'BANG!!';
        } else {
            return "Your're safe";
        }
    }

    render() {
        return (
            <div>
                <p>{this.renderDisplay()}</p>
                <button onClick={this.handleClick}>Pull The Trigger!</button>
            </div>
        )
    }
}

export default RouletteGun;