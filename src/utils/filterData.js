// filterData.js
import travelData from '../travel-essentials.json';

export const filterFlights = (startLocation, endLocation) => {
  return travelData.flights.filter(flight =>
    flight.departure.city === startLocation && flight.arrival.city === endLocation
  );
};

export const filterTrains = (startLocation, endLocation) => {
  return travelData.trains.filter(train =>
    train.departure.city === startLocation && train.arrival.city === endLocation
  );
};

export const filterAccommodations = (endLocation) => {
  return travelData.accommodations.filter(accommodation =>
    accommodation.location === endLocation
  );
};

export const filterBuses = (startLocation, endLocation) => {
    return travelData.buses.filter(bus => {
      const [start, end] = bus.route.split(' to ');
      return start === startLocation && end === endLocation;
    });
  };