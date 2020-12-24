import React from 'react';
import { shallow } from 'enzyme';
import { ProductsListComponent } from './ProductsList';

const mockProps = {
  products: ['1', '2'],
  match: { params: { id: 'as' } },
};

describe('Component ProductsList', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProductsListComponent {...mockProps} />);
    expect(component).toBeTruthy();
  });
});