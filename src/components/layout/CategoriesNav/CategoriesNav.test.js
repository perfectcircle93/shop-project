import React from 'react';
import { shallow } from 'enzyme';
import { CategoriesNavComponent } from './CategoriesNav';

describe('Component CategoriesNav', () => {
  it('should render without crashing', () => {
    const component = shallow(<CategoriesNavComponent />);
    expect(component).toBeTruthy();
  });
});