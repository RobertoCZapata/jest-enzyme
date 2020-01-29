import reducer from '../../reducers';
import ProductMock from '../../__mocks__/ProductMock';

describe('reducers test', () => {
  test('initial state return', () => {
    expect(reducer({}, '')).toEqual({});
  });
  test('adding to cart', () => {
    const initialState = {
      cart: [],
    };
    const payload = ProductMock;
    const action = {
      type: 'ADD_TO_CART',
      payload,
    };
    const expected = {
      cart: [ProductMock],
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });
});
