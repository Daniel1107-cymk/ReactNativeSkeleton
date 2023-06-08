import {TEST_UPDATE} from '../constants';

const initialState: TestReducerState = {
  id: null,
};

const TestReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case TEST_UPDATE:
      return {
        ...state,
        id: action.payload,
      };
    default:
      return state;
  }
};

// interface
interface TestReducerState {
  id: TestId;
}

// type
export type TestId = null | string;

type Action = {
  type: typeof TEST_UPDATE;
  payload: null | string;
};

export default TestReducer;
