import React from "react";
import topPlaces from "../topPlaces.json";
import { generateItinerary } from "../utils/itineraryUtils";

const TripTimeLine = ({ startLocation, endLocation, numberOfDays }) => {
  const destinations = topPlaces.find((dest) => dest.name === endLocation);
  let itinerary = [];
  if (
    destinations &&
    destinations.places_to_visit &&
    destinations.places_to_visit.length > 0
  ) {
    itinerary = generateItinerary(
      numberOfDays,
      destinations.places_to_visit,
      startLocation,
      endLocation
    );
  } else {
    itinerary = [];
  }
  return (
    <section className="timeline1 cid-ukM6ksUEFY" id="timeline1-2z">
      <div className="timelines-container container">
        <div className="mbr-section-head">
          <h3 className="mbr-section-title mbr-fonts-style align-center mb-0 display-5">
            Trip Schedule
          </h3>
        </div>
        {itinerary.length === 0 ? (
          <div className="no-itinerary-message">
            <p className="mbr-fonts-style align-center display-7" style={{marginTop:"20px"}}>
              No itinerary available for this trip.
            </p>
          </div>
        ) : (
          itinerary.map((day, index) => (
            <div
              key={index}
              className={`row timeline-element mb-2 ${
                index % 2 === 0 ? "mt-4" : ""
              }`}
            >
              {index % 2 === 0 ? (
                <>
                  <div className="timeline-date col-12 col-md-6">
                    <div className="timeline-date-wrapper">
                      <p className="mbr-timeline-date mbr-fonts-style display-5">
                        <strong>{day.date}</strong>
                      </p>
                    </div>
                  </div>
                  <span className="iconBackground"></span>
                  <div className="col-12 col-md-6">
                    <div className="timeline-text-wrapper">
                      <h4 className="mbr-timeline-title mbr-fonts-style mb-4 display-5">
                        <strong>{day.morning.title}</strong>
                      </h4>
                      <p className="mbr-text mbr-fonts-style display-7">
                        <strong>Morning:</strong>
                        <br />
                        {day.morning.details}
                        <br />
                        <br />
                        <strong>Afternoon:</strong>
                        <br />
                        {day.afternoon.details}
                        <br />
                        <br />
                        <strong>Evening:</strong>
                        <br />
                        {day.evening.details}
                        <br />
                        <br />
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="col-12 col-md-6">
                    <div className="timeline-text-wrapper">
                      <h4 className="mbr-timeline-title mbr-fonts-style mb-4 display-5">
                        <strong>{day.morning.title}</strong>
                      </h4>
                      <p className="mbr-text mbr-fonts-style display-7">
                        <strong>Morning:</strong>
                        <br />
                        {day.morning.details}
                        <br />
                        <br />
                        <strong>Afternoon:</strong>
                        <br />
                        {day.afternoon.details}
                        <br />
                        <br />
                        <strong>Evening:</strong>
                        <br />
                        {day.evening.details}
                        <br />
                        <br />
                      </p>
                    </div>
                  </div>
                  <span className="iconBackground"></span>
                  <div className="timeline-date col-12 col-md-6">
                    <div className="timeline-date-wrapper">
                      <p className="mbr-timeline-date mbr-fonts-style display-5">
                        <strong>{day.date}</strong>
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default TripTimeLine;
