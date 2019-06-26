export const markerRequest = marker => ({
  type: "PLACE_MARKER_REQUEST",
  payload: { marker }
});

export const addMarker = marker => ({
  type: "PLACE_MARKER",
  payload: { marker }
});

export const error = error => ({
  type: "ERROR",
  payload: { error }
});

export const modalVisibility = change => ({
  type: "MODAL",
  payload: { change }
});
