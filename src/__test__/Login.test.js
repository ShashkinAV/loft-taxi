import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { Login } from '../components/Login';
import renderer from 'react-test-renderer';

describe('Login', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Login/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders LoginForm', () => {
    const wrapper = shallow(<Login/>);
    expect(wrapper.find('.loginForm').length === 1).toEqual(true);
  });
});

// FIX TypeError: window.URL.createObjectURL is not a function
jest.mock('mapbox-gl', () => ({
  Map: () => ({})
}))