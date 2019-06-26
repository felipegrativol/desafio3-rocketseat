const INITIAL_STATE = {
  modalVisible: false,
  error: false,
  markers: []
};

export default function markLocation(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "PLACE_MARKER":
      return {
        markers: [
          ...state.markers,
          {
            id: Math.random(),
            latlng: [
              {
                latitude: action.payload.marker[0].latlng.latitude,
                longitude: action.payload.marker[0].latlng.longitude
              }
            ],
            title: action.payload.marker[0].username,
            avatar: action.payload.marker[1].avatar_url,
            description: action.payload.marker[1].bio
          }
        ]
      };

    case "MODAL":
      return { ...state, modalVisible: action.payload.change };

    case "ERROR":
      return { ...state, error: action.payload.error };

    default:
      return state;
  }
}
