import React from 'react';
import { shallow } from 'enzyme';
import { ProductComponent } from './Product';

const mockProps = {
  photos: ['a'],
};


describe('Component Product', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProductComponent {...mockProps} />);
    expect(component).toBeTruthy();
  });
});