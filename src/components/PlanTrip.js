import React, { useState } from 'react';
import TripTimeLine from './TripTimeLine';
import BudgetEstimator from './BudgetEstimator';
import TripForm from './TripForm';
import TravelEssentials from './TravelEssentials';

const PlanTrip = () => {
  const [formCompleted, setFormCompleted] = useState(false);
  const [startLocation,setStartLocation] = useState('');
  const [endLocation,setEndLocation] = useState('');

  const handleFormSubmit = (start,end) => {
    setFormCompleted(true);
    setStartLocation(start);
    setEndLocation(end);
  };

  return (
    <>
      <TripForm onSubmit={handleFormSubmit} />
      {formCompleted && (
        <>
          <TravelEssentials startLocation={startLocation} endLocation={endLocation}/>
          <TripTimeLine />
          <BudgetEstimator />
        </>
      )}
    </>
  );
};

export default PlanTrip;
