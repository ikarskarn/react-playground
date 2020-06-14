import React from 'react';
import './Accordion.css';

class Accordion extends React.Component {
    static defaultProps = {
		sections: [],
    };
    
	state = {
        currentSectionIndex: null,
    }
    
	handleButtonClick(index) {
        this.setState({ currentSectionIndex: index});
    }
    
	renderAccordion() {
        const currentSection = this.state.currentSectionIndex;
		return this.props.sections.map((section, index) => (
			<li key={index} >
                <button type='button' id={index} onClick={() => 
                    this.handleButtonClick(index)
                }>
				    {section.title}
			    </button>
                {(currentSection === index) && this.renderContent(section)}
            </li>
		));
    }
    
	renderContent(section) {
        return (
			<p>
				{section.content}
			</p>
		)
	}
	render() {
        
        const sections = this.props;
		return (
			<ul>
				{this.renderAccordion()}
			</ul>
		);
	}
}

export default Accordion;