export const findMinPrice = (arr, key) => {
  return arr.reduce((min, item) => (item[key] < min[key] ? item : min), arr[0]);
};

export const formatPrice = (price) => {
  return price
    .toLocaleString("en-IN", { style: "currency", currency: "INR" })
    .replace("₹", "₹ ");
};

export const getSelectedTransportation = (
  filteredFlights,
  filteredTrains,
  filteredBuses
) => {
  let selectedTransportation = null;
  let transportationType = "";

  if (filteredFlights.length > 0) {
    selectedTransportation = findMinPrice(filteredFlights, "price");
    transportationType = "Flight";
  } else if (filteredTrains.length > 0) {
    selectedTransportation = findMinPrice(filteredTrains, "price");
    transportationType = "Train";
  } else if (filteredBuses.length > 0) {
    selectedTransportation = findMinPrice(filteredBuses, "price");
    transportationType = "Bus";
  }

  return { selectedTransportation, transportationType };
};

export const getAccommodationDetails = (filteredAccommodations) => {
  const fiveStarAccommodation = filteredAccommodations.find(
    (acc) => acc.type === "5-Star"
  );
  const cheapestAccommodation = findMinPrice(
    filteredAccommodations,
    "pricePerNight"
  );

  return { fiveStarAccommodation, cheapestAccommodation };
};
