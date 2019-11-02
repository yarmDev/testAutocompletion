import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWalking, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import "./ResultCard.css";
import logoRER_A from "../Logo_RER_A.svg";
import logoRER_B from "../Logo_RER_B.svg";

function ResultCard({ resultsJourneys }) {
  const result = resultsJourneys;

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 result-card">
          {result.journeys.map((journey, index) => {
            const timeArrival = journey.dateArrival.slice(
              journey.dateArrival.indexOf("T") + 1
            );
            const timeDeparture = journey.dateDeparture.slice(
              journey.dateDeparture.indexOf("T") + 1
            );
            const timeDuration = journey.totalDuration
              .replace("PT", "")
              .toLowerCase();
            const timeWalkingDuration = journey.walkingDuration
              .replace("PT", "")
              .toLowerCase();
            return (
              <ul key={index}>
                <li>
                  <ul className="result-time">
                    <li className="timeArrival">
                      <span>
                        <i></i>
                      </span>
                      {timeDeparture.replace(
                        timeDeparture.slice(timeDeparture.length - 3),
                        ""
                      )}
                    </li>
                    <li></li>
                    <li className="timeDeparture">
                      <i>
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                      </i>
                      {timeArrival.replace(
                        timeArrival.slice(timeArrival.length - 3),
                        ""
                      )}
                    </li>
                  </ul>
                  <ul className="result-duration">
                    <li>{timeDuration.replace("m", " min ")}</li>
                    <li className="walkingDuration">
                      dont {timeWalkingDuration.replace("m", " min ")}
                      <p>de marche</p>
                    </li>
                  </ul>
                </li>
                <li className="result-roadmap">
                  {journey.sections.map((transport, index) => {
                    if (transport.transport) {
                      if (transport.transport.line) {
                        if (
                          transport.transport.mode === "RER" &&
                          transport.transport.line.label === "A"
                        ) {
                          return(<span key={index}><img src={logoRER_A} alt="rerA"  /></span>)   
                        }
                        if (
                            transport.transport.mode === "RER" &&
                            transport.transport.line.label === "B"
                          ) {
                            return(<span key={index}><img src={logoRER_B} alt="rerB"  /></span>)   
                          }

                        return (
                          <span key={index}>
                            {" "}
                            {transport.transport.mode}{" "}
                            {transport.transport.line.label}
                          </span>
                        );
                      }
                      if (transport.transport.mode === "WALKING") {
                        return (
                          <span className="icon" key={index}>
                            {" "}
                            <FontAwesomeIcon icon={faWalking} />{" "}
                          </span>
                        );
                      }
                      return (
                        <span key={index}>{transport.transport.mode}</span>
                      );
                    }
                    return <i key={index}> </i>;
                  })}
                </li>
                <li>
                  <ul>
                    <li className="result-price">
                      {journey.price ? journey.price / 100 + "0 €" : "-"}
                    </li>
                    <li className="result-details">Détails</li>
                  </ul>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default connect(
  null,
  null
)(ResultCard);
