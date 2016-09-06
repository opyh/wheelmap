import { take, put, select, call } from 'redux-saga/effects';

import { MARKER_MOVED, changeNode } from '../actions';
import { node as nodeSelector } from '../selectors';

// Always update the node position via the map, also when the updateMap saga is canceled.
export default function* watchMarkerMoved() {
  while (true) {
    const { payload: location } = yield take(MARKER_MOVED);

    let node = yield select(nodeSelector);
    node = yield call([ node, node.merge ], location);

    yield put(changeNode(node));
  }
}
