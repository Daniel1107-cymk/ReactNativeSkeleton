import {TEST_UPDATE} from '../constants';
import {TestId} from '../reducers/test';

export const updateTestId = (id: TestId) => {
  return {
    type: TEST_UPDATE,
    payload: id,
  };
};
