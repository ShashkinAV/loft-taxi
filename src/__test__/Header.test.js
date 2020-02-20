import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { Router } from 'react-router';
import { shallow } from 'enzyme';
import { Header } from '../components/Header/Header';
import history from '../history';

describe('Header', () => {
  const wrapper = shallow(<Header />);

  const routerWrapper = shallow(
    <Router history={history}>
      <Header />
    </Router>
  );

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(routerWrapper, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders correctly', () => {
    const tree = renderer.create(routerWrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders LogoutButton', () => {
    expect(wrapper.find('#LogoutButton').exists()).toEqual(false);
  });
});

// FIX TypeError: window.URL.createObjectURL is not a function
jest.mock('mapbox-gl', () => ({
  Map: () => ({})
}));

jest.mock('react-redux', () => ({
  useDispatch: () => { },
  useSelector: () => ({
    auth: {
      success: true,
      token: 'TOKEN'
    },
  })
}))