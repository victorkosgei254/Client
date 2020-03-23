const initialState = {
  count: 0,
  items: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CART": {
      console.log("Item Added to cart");
      let data = [...state.items];
      data.push(action.payload);

      return {
        ...state,

        count: state.count + 1,
        items: data
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
