import React from "react";
import {formatPrice, getSelectedTransportation, getAccommodationDetails} from "../utils/budgetUtils";
import '../BudgetEstimator.css';
const BudgetEstimator = ({
  filteredFlights,
  filteredTrains,
  filteredAccommodations,
  filteredBuses,
  numberOfDays,
  startLocation,
  endLocation,
}) => {
  const { selectedTransportation, transportationType } = getSelectedTransportation(filteredFlights, filteredTrains, filteredBuses);
  const { fiveStarAccommodation, cheapestAccommodation } = getAccommodationDetails(filteredAccommodations);

  const meals = numberOfDays * 1000;
  const localTransportation = numberOfDays * 500;

  return (
    <section className="features10 cid-ukM90xi5YG" id="features10-30">
      {numberOfDays && (
        <div className="container">
          <div className="mbr-section-head">
            <h3 className="mbr-section-title mbr-fonts-style mb-0 display-5">
              Budget Estimator
            </h3>
          </div>
          <div className="row mt-4">
            {selectedTransportation ? (
              <div className="item features-without-image col-12">
                <div
                  className="item-wrapper"
                  style={{ paddingBottom: "0px", paddingTop: "0px" }}
                >
                  <div className="top-line row">
                    <div className="col">
                      <h4 className="card-title mbr-fonts-style display-5">
                        <strong>{transportationType}</strong>
                      </h4>
                    </div>
                    <div className="col-auto">
                      <p className="price mbr-fonts-style display-7">
                        ₹{selectedTransportation.price * 2}
                      </p>
                    </div>
                  </div>
                  <div className="bottom-line">
                    <p className="mbr-text mbr-fonts-style display-7">
                      {startLocation} to {endLocation} (Round-Trip)
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <p
                className="mbr-fonts-style display-7"
                style={{
                  textAlign: "center",
                  marginBottom: "15px"
                }}
              >
                No Trains/Buses/Flights Available.
              </p>
            )}

            {fiveStarAccommodation ? (
              <div className="item features-without-image col-12">
                <div
                  className="item-wrapper"
                  style={{ paddingBottom: "0px", paddingTop: "0px" }}
                >
                  <div className="top-line row">
                    <div className="col">
                      <h4 className="card-title mbr-fonts-style display-5">
                        <strong>5-Star Accommodation</strong>
                      </h4>
                    </div>
                    <div className="col-auto">
                      <p className="price mbr-fonts-style display-7">
                        ₹{fiveStarAccommodation.pricePerNight} x {numberOfDays}{" "}
                        nights
                      </p>
                    </div>
                  </div>
                  <div className="bottom-line">
                    <p className="mbr-text mbr-fonts-style display-7">
                      {fiveStarAccommodation.name},{" "}
                      {fiveStarAccommodation.location}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <p
                className="mbr-fonts-style display-7"
                style={{
                  textAlign: "center",
                  marginBottom: "15px"
                }}
              >
                No 5-Star Accommodation Available.
              </p>
            )}

            {cheapestAccommodation ? (
              <div className="item features-without-image col-12">
                <div
                  className="item-wrapper"
                  style={{ paddingBottom: "0px", paddingTop: "0px" }}
                >
                  <div className="top-line row">
                    <div className="col">
                      <h4 className="card-title mbr-fonts-style display-5">
                        <strong>Budget Accommodation</strong>
                      </h4>
                    </div>
                    <div className="col-auto">
                      <p className="price mbr-fonts-style display-7">
                        ₹{cheapestAccommodation.pricePerNight} x {numberOfDays}{" "}
                        nights
                      </p>
                    </div>
                  </div>
                  <div className="bottom-line">
                    <p className="mbr-text mbr-fonts-style display-7">
                      {cheapestAccommodation.name},{" "}
                      {cheapestAccommodation.location}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <p
                className="mbr-fonts-style display-7"
                style={{
                  textAlign: "center",
                  marginBottom: "15px",
                }}
              >
                No Budget Accommodation Available.
              </p>
            )}

            {numberOfDays && (
              <div className="item features-without-image col-12">
                <div
                  className="item-wrapper"
                  style={{ paddingBottom: "0px", paddingTop: "0px" }}
                >
                  <div className="top-line row">
                    <div className="col">
                      <h4 className="card-title mbr-fonts-style display-5">
                        <strong>Local Transportation</strong>
                      </h4>
                    </div>
                    <div className="col-auto">
                      <p className="price mbr-fonts-style display-7">
                        ₹{localTransportation}
                      </p>
                    </div>
                  </div>
                  <div className="bottom-line">
                    <p className="mbr-text mbr-fonts-style display-7">
                      Taxi/Rental Scooter: ₹{localTransportation}
                    </p>
                  </div>
                </div>
              </div>
            )}
            {meals && numberOfDays && (
              <div className="item features-without-image col-12">
                <div
                  className="item-wrapper"
                  style={{ paddingBottom: "0px", paddingTop: "0px" }}
                >
                  <div className="top-line row">
                    <div className="col">
                      <h4 className="card-title mbr-fonts-style display-5">
                        <strong>Meals</strong>
                      </h4>
                    </div>
                    <div className="col-auto">
                      <p className="price mbr-fonts-style display-7">
                        ₹{meals}
                      </p>
                    </div>
                  </div>
                  <div className="bottom-line">
                    <p className="mbr-text mbr-fonts-style display-7">
                      {numberOfDays} days x ₹1,000
                    </p>
                  </div>
                </div>
              </div>
            )}
            <div className="item features-without-image col-12">
              <div
                className="item-wrapper"
                style={{ paddingBottom: "0px", paddingTop: "0px" }}
              >
                <div className="top-line row">
                  <div className="col">
                    <h4 className="card-title mbr-fonts-style display-5">
                      <strong>Activities and Sightseeing</strong>
                    </h4>
                  </div>
                  <div className="col-auto">
                    <p className="price mbr-fonts-style display-7">₹2000</p>
                  </div>
                </div>
                <div className="bottom-line">
                  <p className="mbr-text mbr-fonts-style display-7">
                    Entry Fees and Activities
                  </p>
                </div>
              </div>
            </div>
            <div className="item features-without-image col-12">
              <div
                className="item-wrapper"
                style={{ paddingBottom: "0px", paddingTop: "0px" }}
              >
                <div className="top-line row">
                  <div className="col">
                    <h4 className="card-title mbr-fonts-style display-5">
                      <strong>Budget Accommodation</strong>
                    </h4>
                  </div>
                  <div className="col-auto">
                    <p className="price mbr-fonts-style display-5">
                      {formatPrice(
                        (selectedTransportation
                          ? selectedTransportation.price * 2
                          : 0) +
                          (fiveStarAccommodation
                            ? fiveStarAccommodation.pricePerNight * numberOfDays
                            : 0) +
                          localTransportation +
                          meals +
                          2000
                      )}
                    </p>
                  </div>
                </div>
                <div className="bottom-line">
                  <p className="mbr-text mbr-fonts-style display-7"></p>
                </div>
              </div>
            </div>
            <div className="item features-without-image col-12">
              <div
                className="item-wrapper"
                style={{ paddingBottom: "0px", paddingTop: "0px" }}
              >
                <div className="top-line row">
                  <div className="col">
                    <h4 className="card-title mbr-fonts-style display-5">
                      <strong>3-Star Accommodation</strong>
                    </h4>
                  </div>
                  <div className="col-auto">
                    <p className="price mbr-fonts-style display-5">
                      {formatPrice(
                        (selectedTransportation
                          ? selectedTransportation.price * 2
                          : 0) +
                          (cheapestAccommodation
                            ? cheapestAccommodation.pricePerNight * numberOfDays
                            : 0) +
                          localTransportation +
                          meals +
                          2000
                      )}
                    </p>
                  </div>
                </div>
                <div className="bottom-line">
                  <p className="mbr-text mbr-fonts-style display-7"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default BudgetEstimator;