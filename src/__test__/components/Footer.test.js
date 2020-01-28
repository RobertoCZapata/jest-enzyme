import React from 'react';
import { mount } from 'enzyme';
import Footer from '../../components/Footer';

const footer = mount(<Footer />);

describe('footer component', () => {
  test('component render footer', () => {
    expect(footer.length).toEqual(1);
  });

  test('title render', () => {
    expect(footer.find('.Footer-title').text()).toEqual('Platzi Store');
  });
});
