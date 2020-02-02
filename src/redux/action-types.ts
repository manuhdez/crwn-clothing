export enum UserTypes {
  SET_CURRENT_USER = 'SET_CURRENT_USER',
  GOOGLE_SIGN_IN_START = 'GOOGLE_SIGN_IN_START',
  EMAIL_SIGN_IN_START = 'EMAIL_SIGN_IN_START',
  SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS',
  SIGN_IN_FAIL = 'SIGN_IN_FAIL',
  CHECK_USER_SESSION = 'CHECK_USER_SESSION',
  SIGN_OUT_START = 'SIGN_OUT_START',
  SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS',
  SIGN_OUT_FAIL = 'SIGN_OUT_FAIL',
  SIGN_UP_START = 'SIGN_UP_START',
  SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS',
  SIGN_UP_FAIL = 'SIGN_UP_FAIL'
}

export enum CartTypes {
  TOGGLE_CART_DROPDOWN = 'TOGGLE_CART_DROPDOWN',
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  CLEAR_CART_ITEM = 'CLEAR_CART_ITEM',
  CLEAR_CART = 'CLEAR_CART'
}

export enum ShopTypes {
  FETCH_COLLECTIONS_START = 'FETCH_COLLECTIONS_START',
  FETCH_COLLECTIONS_SUCCESS = 'FETCH_COLLECTIONS_SUCCESS',
  FETCH_COLLECTIONS_FAIL = 'FETCH_COLLECTIONS_FAIL',
  SET_COLLECTIONS_LOAD_STATE = 'SET_COLLECTIONS_LOAD_STATE'
}
