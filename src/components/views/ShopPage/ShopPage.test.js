import React from 'react';
import { shallow } from 'enzyme';
import { ShopPageComponent } from './ShopPage';

describe('Component ShopPage', () => {
  it('should render without crashing', () => {
    const component = shallow(<ShopPageComponent />);
    expect(component).toBeTruthy();
  });
});