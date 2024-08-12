import React, { useState } from 'react';


const TravelEssentials = ({filteredFlights,filteredAccommodations, filteredTrains, filteredBuses}) => {
  const [activeTab, setActiveTab] = useState('tab1');

  const renderFlights = () => {
    if (filteredFlights.length === 0) {
      return (
        <div className="col-md-12">
          <p className="mbr-text mbr-fonts-style display-7">
            No Flights are available.
          </p>
        </div>
      );
    }
    return filteredFlights.map((flight, index) => (
      <div key={index} className="col-md-12">
        <p className="mbr-text mbr-fonts-style display-7">
          <strong>Airline:</strong> {flight.airline}<br/>
          <strong>Flight Number:</strong> {flight.flightNumber}<br/>
          <strong>Departure:</strong> {flight.departure.city}, {flight.departure.airport} - {flight.departure.time}<br/>
          <strong>Arrival:</strong> {flight.arrival.city}, {flight.arrival.airport} - {flight.arrival.time}<br/>
          <strong>Price:</strong> ₹{flight.price}
        </p>
        <br/>
      </div>
    ))
  };

  const renderTrains = () => {
    if (filteredTrains.length === 0) {
      return (
        <div className="col-md-12">
          <p className="mbr-text mbr-fonts-style display-7">
            No Trains are available.
          </p>
        </div>
      );
    }
    return filteredTrains.map((train, index) => (
      <div key={index} className="col-md-12">
        <p className="mbr-text mbr-fonts-style display-7">
          <strong>Train Name:</strong> {train.trainName}<br/>
          <strong>Train Number:</strong> {train.trainNumber}<br/>
          <strong>Departure:</strong> {train.departure.city}, {train.departure.station} - {train.departure.time}<br/>
          <strong>Arrival:</strong> {train.arrival.city}, {train.arrival.station} - {train.arrival.time}<br/>
          <strong>Price:</strong> ₹{train.price}
        </p>
        <br/>
      </div>
    ))
  };

  const renderAccommodations = () => {
    if (filteredAccommodations.length === 0) {
      return (
        <div className="col-md-12">
          <p className="mbr-text mbr-fonts-style display-7">
            No accommodations available.
          </p>
        </div>
      );
    }
    return filteredAccommodations.map((accommodation, index) => (
      <div key={index} className="col-md-12">
        <p className="mbr-text mbr-fonts-style display-7">
          <strong>Name:</strong> {accommodation.name}<br/>
          <strong>Location:</strong> {accommodation.location}<br/>
          <strong>Type:</strong> {accommodation.type}<br/>
          <strong>Price per Night:</strong> ₹{accommodation.pricePerNight}<br/>
          <strong>About:</strong> {accommodation.description}
        </p>
        <br/>
      </div>
    ))
  };

  const renderBuses = () => {
    if (filteredBuses.length === 0) {
      return (
        <div className="col-md-12">
          <p className="mbr-text mbr-fonts-style display-7">
            No Buses are available.
          </p>
        </div>
      );
    }
    return filteredBuses.map((bus, index) => (
      <div key={index}  className="col-md-12">
        <p className="mbr-text mbr-fonts-style display-7">
          <strong>Operator:</strong> {bus.operator}<br/>
          <strong>Route:</strong> {bus.route}<br/>
          <strong>Departure:</strong> {bus.departure}<br/>
          <strong>Arrival:</strong> {bus.arrival}<br/>
          <strong>Price:</strong> {bus.price} ({bus.busType})
        </p>
        <br/>
      </div>
    ))
  };
  

  return (
    <section className="tabs content18 cid-ukM100hYSr" id="tabs1-2x" style={{paddingTop:"5px"}}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-12">
            <div className="item-wrapper">
              <ul className="nav nav-tabs mb-4" role="tablist">
                <li className="nav-item">
                  <button
                    className={`nav-link ${activeTab === 'tab1' ? 'active' : ''} display-7`}
                    role="tab"
                    onClick={() => setActiveTab('tab1')}
                  >
                    <strong>Flights</strong>
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link ${activeTab === 'tab2' ? 'active' : ''} display-7`}
                    role="tab"
                    onClick={() => setActiveTab('tab2')}
                  >
                    <strong>Trains</strong>
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link ${activeTab === 'tab3' ? 'active' : ''} display-7`}
                    role="tab"
                    onClick={() => setActiveTab('tab3')}
                  >
                    <strong>Buses</strong>
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link ${activeTab === 'tab4' ? 'active' : ''} display-7`}
                    role="tab"
                    onClick={() => setActiveTab('tab4')}
                  >
                    <strong>Accommodations</strong>
                  </button>
                </li>
              </ul>
              <div className="tab-content">
                <div id="tab1" className={`tab-pane ${activeTab === 'tab1' ? 'in active' : ''}`} role="tabpanel">
                  <div className="row">
                    {renderFlights()}
                  </div>
                </div>
                <div id="tab2" className={`tab-pane ${activeTab === 'tab2' ? 'in active' : ''}`} role="tabpanel">
                  <div className="row">
                    {renderTrains()}
                  </div>
                </div>
                <div id="tab3" className={`tab-pane ${activeTab === 'tab3' ? 'in active' : ''}`} role="tabpanel">
                  <div className="row">
                    {renderBuses()}
                  </div>
                </div>
                <div id="tab4" className={`tab-pane ${activeTab === 'tab4' ? 'in active' : ''}`} role="tabpanel">
                  <div className="row">
                    {renderAccommodations()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelEssentials;
