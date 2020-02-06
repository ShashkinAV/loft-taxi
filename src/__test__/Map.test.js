import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { Map } from '../components/Map';
import renderer from 'react-test-renderer';

describe('Map', () => {
  it('renders correctly', () => {
    /*--TODO fix--*/
    // const tree = renderer.create(<Map/>).toJSON();
    // expect(tree).toMatchSnapshot();
  });
});

jest.mock('mapbox-gl', () => ({
  Map: () => ({})
}))