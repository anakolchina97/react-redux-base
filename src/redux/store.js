import { createStore } from 'redux';

const initialState = {
  like: 10,
};

const reducer = (state = initialState, action) => {
  console.log('reducer >', action);

  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        like: state.like + 1,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
