// https://airbnb.io/enzyme/docs/api
// https://jestjs.io/docs/en/api

import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({adapter: new EnzymeAdapter() });

test('renders without crashing', () => {
  // shallow is rendering the App component and making sure it renders without crashing.
  const wrapper = shallow(<App />)

  // it will print wrapper in String form
  // console.log(wrapper.debug());

  // expect job is to throw an error when the assertion failed
  expect(wrapper).toBeTruthy()
  // expect(wrapper).toBeFalsy();      // this will fail
  
});
