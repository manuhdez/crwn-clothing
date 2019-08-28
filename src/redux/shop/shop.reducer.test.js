import shopReducer from './shop.reducer';
import { shopTypes } from '../action-types';

describe('Shop reducer', () => {
  let initialState = {};

  beforeAll(() => {
    initialState = {
      collections: null,
      isFetching: false,
      hadCollectionsLoaded: false,
      errorMessage: ''
    };
  });

  test('no defined action is dispatched', () => {
    const reducerResponse = shopReducer(initialState, {});

    expect(reducerResponse).toEqual(initialState);
  });

  test('on fetch_Collections_Start', () => {
    const reducerResponse = shopReducer(initialState, {
      type: shopTypes.FETCH_COLLECTIONS_START
    });

    const expectedResponse = {
      ...initialState,
      isFetching: true
    };

    expect(reducerResponse).toEqual(expectedResponse);
  });

  test('on fetch_Collections_Success', () => {
    const mockPayload = [
      {
        id: 'mock_collection',
        items: [],
        routeName: 'hats',
        title: 'Hats'
      },
      {
        id: 'mock_collection_2',
        items: [],
        routeName: 'jackets',
        title: 'Jackets'
      }
    ];

    const reducerResponse = shopReducer(initialState, {
      type: shopTypes.FETCH_COLLECTIONS_SUCCESS,
      payload: mockPayload
    });

    const expectedResponse = {
      ...initialState,
      collections: mockPayload
    };

    expect(reducerResponse).toEqual(expectedResponse);
  });

  test('on fetch_Collections_Fail', () => {
    const mockError = 'Fetch Collections Failed';

    const reducerResponse = shopReducer(initialState, {
      type: shopTypes.FETCH_COLLECTIONS_FAIL,
      payload: mockError
    });

    const expectedResponse = {
      ...initialState,
      errorMessage: mockError
    };

    expect(reducerResponse).toEqual(expectedResponse);
  });
});
