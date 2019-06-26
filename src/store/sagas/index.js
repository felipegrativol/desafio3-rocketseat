import { all, takeLatest, call, put } from "redux-saga/effects";
import api from "~/services/api";

import * as ActionsMaps from "~/store/actions";

function* placeMarker(action) {
  try {
    const { marker } = action.payload;

    const userData = yield call(api.get, `/users/${marker.username}`);

    var userMarker = [marker, userData.data];

    console.tron.log(userMarker);

    yield put(ActionsMaps.addMarker(userMarker));
    yield put(ActionsMaps.error(false));
    yield put(ActionsMaps.modalVisibility(false));
  } catch (err) {
    yield put(ActionsMaps.error(true));
  }
}

export default function* rootSaga() {
  return yield all([takeLatest("PLACE_MARKER_REQUEST", placeMarker)]);
}
