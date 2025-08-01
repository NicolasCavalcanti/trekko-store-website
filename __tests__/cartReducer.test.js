const { cartReducer, initialState } = require('../CartContext.jsx');

const sampleProduct = {
  id: 1,
  name: 'Test Product',
  price: 'R$ 10,00',
  image: 'img.png',
  category: 'test'
};

function reduce(actions, state = initialState) {
  return actions.reduce((s, action) => cartReducer(s, action), state);
}

describe('cartReducer', () => {
  test('addItem adds new item', () => {
    const result = reduce([{ type: 'ADD_ITEM', payload: { ...sampleProduct, quantity: 2, selectedSize: 'M' }}]);
    expect(result.items).toHaveLength(1);
    expect(result.items[0].quantity).toBe(2);
  });

  test('addItem increments quantity if item exists', () => {
    const actions = [
      { type: 'ADD_ITEM', payload: { ...sampleProduct, quantity: 1, selectedSize: 'M' }},
      { type: 'ADD_ITEM', payload: { ...sampleProduct, quantity: 2, selectedSize: 'M' }}
    ];
    const result = reduce(actions);
    expect(result.items).toHaveLength(1);
    expect(result.items[0].quantity).toBe(3);
  });

  test('removeItem removes item by id and size', () => {
    const actions = [
      { type: 'ADD_ITEM', payload: { ...sampleProduct, quantity: 1, selectedSize: 'M' }},
      { type: 'REMOVE_ITEM', payload: { id: 1, selectedSize: 'M' }}
    ];
    const result = reduce(actions);
    expect(result.items).toHaveLength(0);
  });

  test('updateQuantity updates quantity and removes when zero', () => {
    const actions = [
      { type: 'ADD_ITEM', payload: { ...sampleProduct, quantity: 1, selectedSize: 'M' }},
      { type: 'UPDATE_QUANTITY', payload: { id: 1, quantity: 3, selectedSize: 'M' }},
      { type: 'UPDATE_QUANTITY', payload: { id: 1, quantity: 0, selectedSize: 'M' }}
    ];
    const result = reduce(actions);
    expect(result.items).toHaveLength(0);
  });

  test('clearCart empties all items', () => {
    const actions = [
      { type: 'ADD_ITEM', payload: { ...sampleProduct, quantity: 1, selectedSize: 'M' }},
      { type: 'CLEAR_CART' }
    ];
    const result = reduce(actions);
    expect(result.items).toHaveLength(0);
  });
});
