const INITIAL_STATE = {
  modalVisible: false,
  markers: [
    {
      id: 0,
      latlng: [{ latitude: -27.2177659, longitude: -49.6451598 }],
      title: "",
      description: ""
    }
  ]
};

export default function markLocation(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "PLACE_MARKER":
      return {
        markers: [
          ...state.markers
          //   action.payload.marker,  <<< Olhar aqui e criar Actions
          // {
          //   id: Math.random(),
          //   latlng: [
          //     {
          //       latitude: action.coordinate.latitude,
          //       longitude: action.coordinate.longitude
          //     }
          //   ],
          //   title: `Marcador NOVO `,
          //   description: "descrição"
          // }
        ]
      };

    default:
      return state;
  }
}
