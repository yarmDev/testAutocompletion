const initialState = {
  arrival: "Villepinte",
  arrivalId: "admin:fr:93078",
  arrivalLatitude: 48.963656,
  arrivalLongitude: 2.534754,
  bypassLines: [],
  bypassModes: [],
  date: new Date().toISOString().split("T")[0], //variable
  dateType: "DEPARTURE", //variable
  departure: "NANTERRE VILLE (Nanterre)",
  departureId: "stop_area:DUA:SA:8775804",
  departureLatitude: 48.895506,
  departureLongitude: 2.195916,
  preferenceJourney: "FASTEST",
  time: `${new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  })}`
};

const reducer = (state = initialState, action) => {
  if (action.type === "ADD_TIME") {
    return {
      ...state,
      time: action.time
    };
  }
  if (action.type === "ADD_ARRIVAL_NAME_1") {
    return {
      ...state,
      arrival: action.arrival
    };
  }
  if (action.type === "ADD_ARRIVAL_ID_1") {
    return {
      ...state,
      arrivalId: action.id
    };
  }
  if (action.type === "ADD_DATETYPE") {
    return {
      ...state,
      dateType: action.dateType
    };
  }

  return state;
};

export default reducer;

/* "id": "stop_area:DUA:SA:8775804",
            "placeType": "StopArea",
            "name": "NANTERRE VILLE (Nanterre)",
            "shortName": "NANTERRE VILLE",
            "coord": {
                "lat": 48.895506,
                "lon": 2.195916
            }, */
