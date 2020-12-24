import React from 'react';
import { shallow } from 'enzyme';
import { ShopPageComponent } from './ShopPage';

const mockProps = {
  match: {
    params: {
      name: 'lala',
    },
  },
};

describe('Component ShopPage', () => {
  it('should render without crashing', () => {
    const component = shallow(<ShopPageComponent {...mockProps} />);
    expect(component).toBeTruthy();
  });
});