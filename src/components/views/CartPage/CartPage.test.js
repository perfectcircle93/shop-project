import React from 'react';
import { shallow } from 'enzyme';
import { CartPageComponent } from './CartPage';

const mockProps = {
  products: [{ _id: '1', photos: ['a'], amount: 1, name: 'a' }],
};

describe('Component CartPage', () => {
  it('should render without crashing', () => {
    const component = shallow(<CartPageComponent {...mockProps} />);
    expect(component).toBeTruthy();
  });
});