import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { Header } from '../shared/Header/Header';
import renderer from 'react-test-renderer';

describe('Header', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header/>, div);
    ReactDOM.unmountComponentAtNode(div);
});

  it('renders correctly', () => {
    const tree = renderer.create(<Header/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders LogoutButton', () => {
    const wrapper = shallow(<Header/>);
    expect(wrapper.find('#LogoutButton').exists()).toEqual(false);
  });
});

// FIX TypeError: window.URL.createObjectURL is not a function
jest.mock('mapbox-gl', () => ({
  Map: () => ({})
}))
