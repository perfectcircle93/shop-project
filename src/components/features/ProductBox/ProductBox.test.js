import React from 'react';
import { shallow } from 'enzyme';
import { ProductBoxComponent } from './ProductBox';

const mockProps = { photos: ['1', '2'] };

describe('Component ProductBox', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProductBoxComponent {...mockProps} />);
    expect(component).toBeTruthy();
  });
});