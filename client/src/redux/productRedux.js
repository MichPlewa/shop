import initialState from './initialState';
import { API_URL } from '../config';

// selectors

export const getProducts = ({ products }) => products;
export const getProductById = ({ products }, id) =>
  products.find((product) => product._id);

// actions

const createActionName = (actionName) => `app/product/${actionName}`;
const UPDATA_PRODUCT = createActionName('UPDATA_Product');

// creators

const updateProduct = (payload) => ({ type: UPDATA_PRODUCT, payload });

export const fetchProduct = () => {
  return (dispatch) => {
    fetch(API_URL + 'api/products')
      .then((res) => res.json())
      .then((products) => dispatch(updateProduct(products)));
  };
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATA_PRODUCT:
      return [...action.payload];
    default:
      return state;
  }
};

export default productReducer;
