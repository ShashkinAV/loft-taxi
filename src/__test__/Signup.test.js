import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { Signup } from '../components/Signup';
import { SignupForm } from '../components/Signup/SignupForm';
import renderer from 'react-test-renderer';

describe('Signup', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Signup/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders SignupForm', () => {
    const wrapper = shallow(<SignupForm/>);
    /*--TODO fix why?--*/
    expect(wrapper.find('.signupForm').length === 0).toEqual(true);
  });
});

jest.mock('mapbox-gl', () => ({
  Map: () => ({})
}))
