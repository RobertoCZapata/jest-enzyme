import actions from '../../actions';
import ProductMock from '../../__mocks__/ProductMock';

describe('Actions test', () => {
  test('addToCart action', () => {
    const payload = ProductMock;
    const expected = {
      type: 'ADD_TO_CART',
      payload,
    };
    expect(actions.addToCart(payload)).toEqual(expected);
  });

  test('removeFromCart Action', () => {
    const payload = ProductMock;
    const remove = {
      type: 'REMOVE_FROM_CART',
      payload,
    };
    expect(actions.removeFromCart(payload)).toEqual(remove);
  });
});
