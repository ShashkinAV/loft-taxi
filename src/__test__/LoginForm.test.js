import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { LoginForm } from '../components/Login/LoginForm';
import renderer from 'react-test-renderer';

describe('LoginForm', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<LoginForm/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders LoginForm', () => {
    const wrapper = shallow(<LoginForm/>);
    /*--TODO to fixit--*/
    // expect(wrapper.find('.LoginForm').length === 1).toEqual(false);
  });
});

// FIX TypeError: window.URL.createObjectURL is not a function
jest.mock('mapbox-gl', () => ({
  Map: () => ({})
}))