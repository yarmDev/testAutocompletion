import React, { useState, } from "react";
import axios from "axios";
import { connect, useSelector } from "react-redux";
import ResultCard from '../ResultCard/ResultCard';
import LoadingComponent from '../Cliploader/Cliploader';


function Results() {
    const [resultsJourneys, setResultsJourneys] = useState(null);
    const [receive, setReceive] = useState(false);
    const [showLoading, setShowLoading] = useState(true);
    const ui = useSelector(state => state);
    
const getJourney = () => {
    setShowLoading(false)
    setReceive(false)
    axios
      .post("/api/itinerary/search", ui)
      .then(function(response) {
        console.log(response.data.journeys);
        setResultsJourneys(response.data)
        setReceive(true)
        setShowLoading(true)
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  return <div>

      <button onClick={()=>getJourney()}>getResults</button>
        {showLoading?null:<LoadingComponent />}
      {receive && <ResultCard resultsJourneys={resultsJourneys}/>}
  </div>;
}



export default connect(
    null,
    null
  )(Results);
