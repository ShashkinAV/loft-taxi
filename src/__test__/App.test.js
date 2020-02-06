import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from '../App';
import renderer from 'react-test-renderer';

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders Header', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find('.header').length === 1).toEqual(false);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<App/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

jest.mock('mapbox-gl', () => ({
  Map: () => ({})
}));
