import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import App from '../App';


describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders Header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.header').length === 0).toEqual(false);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

jest.mock('mapbox-gl', () => ({
  Map: () => ({})
}));

jest.mock('react-redux', () => ({
  useDispatch: () => { },
  useSelector: () => ({
    auth: {
      success: true,
      token: 'TOKEN'
    }
  })
}))