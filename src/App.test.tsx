import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';

describe('<App />', () => {
  let wrapper = null;

  beforeAll(() => {
    wrapper = shallow(<App currentUser={null} checkUserSession={jest.fn()} />);
  });

  it('renders without crashing', () => {
    expect(wrapper.length).toEqual(1);
  });
});
