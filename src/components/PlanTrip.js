import React, { useState } from "react";
import TripTimeLine from "./TripTimeLine";
import BudgetEstimator from "./BudgetEstimator";
import TripForm from "./TripForm";
import TravelEssentials from "./TravelEssentials";
import {
  filterFlights,
  filterTrains,
  filterAccommodations,
  filterBuses,
} from "../utils/filterData";

const PlanTrip = () => {
  const [formCompleted, setFormCompleted] = useState(false);
  const [startLocation, setStartLocation] = useState("");
  const [endLocation, setEndLocation] = useState("");
  const [numberOfDays, setNumberOfDays] = useState(0);
  const [filteredFlights, setFilteredFlights] = useState([]);
  const [filteredTrains, setFilteredTrains] = useState([]);
  const [filteredAccommodations, setFilteredAccommodations] = useState([]);
  const [filteredBuses, setFilteredBuses] = useState([]);

  const handleFormSubmit = (startLocation, endLocation, numberOfDays) => {
    setFormCompleted(true);
    setStartLocation(startLocation);
    setEndLocation(endLocation);
    setNumberOfDays(numberOfDays);
    setFilteredFlights(filterFlights(startLocation, endLocation));
    setFilteredTrains(filterTrains(startLocation, endLocation));
    setFilteredAccommodations(filterAccommodations(endLocation));
    setFilteredBuses(filterBuses(startLocation, endLocation));
  };

  return (
    <>
      <TripForm onSubmit={handleFormSubmit} />
      {formCompleted && (
        <>
          <TravelEssentials
            startLocation={startLocation}
            endLocation={endLocation}
            filteredFlights={filteredFlights}
            filteredAccommodations={filteredAccommodations}
            filteredTrains={filteredTrains}
            filteredBuses={filteredBuses}
          />
          <TripTimeLine
            startLocation={startLocation}
            endLocation={endLocation}
            numberOfDays={numberOfDays}
          />
          <BudgetEstimator
            filteredFlights={filteredFlights}
            filteredAccommodations={filteredAccommodations}
            filteredTrains={filteredTrains}
            filteredBuses={filteredBuses}
            numberOfDays={numberOfDays}
            startLocation={startLocation}
            endLocation={endLocation}
          />
        </>
      )}
    </>
  );
};

export default PlanTrip;
