import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './Accordion.js';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe(`Accordion Component`, () => {
  
  //Smoke Test
  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Accordion />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

//  //Snapshot
//  it('renders the first tab by default', () => {
//    const wrapper = shallow(<Tabs tabs={tabsProp} />);
//    expect(toJson(wrapper)).toMatchSnapshot();
//  })
//
//  it('renders empty given no tabs', () => {
//    const wrapper = shallow(<Tabs />);
//    expect(toJson(wrapper)).toMatchSnapshot();
//  })
//
//  it('closes the first tab and opens any clicked tab', () => {
//    const wrapper = shallow(<Tabs tabs={tabsProp} />);
//    wrapper.find('button').at(1).simulate('click');
//    expect(toJson(wrapper)).toMatchSnapshot();
//  })
})