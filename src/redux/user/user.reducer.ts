import { UserTypes } from '../action-types';
import { User } from '../../types';

export interface UserReducerState {
  currentUser: User | null;
  error: string | null;
}

export interface UserReducerAction<T> {
  type: UserTypes;
  payload: T;
}

const initialState: UserReducerState = {
  currentUser: null,
  error: null
};

const userReducer = (
  state: UserReducerState = initialState,
  action: UserReducerAction<any>
) => {
  const { type, payload } = action;

  switch (type) {
    case UserTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: payload
      };
    case UserTypes.SIGN_IN_FAIL:
    case UserTypes.SIGN_OUT_FAIL:
    case UserTypes.SIGN_UP_FAIL:
      return {
        ...state,
        error: payload
      };
    case UserTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null
      };
    default:
      return state;
  }
};

export default userReducer;
