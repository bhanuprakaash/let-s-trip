import React, { useState,useEffect } from 'react';
import { filterFlights, filterTrains, filterAccommodations,filterBuses } from '../utils/filterData';


const TravelEssentials = ({startLocation,endLocation}) => {
  const [activeTab, setActiveTab] = useState('tab1');
  const [filteredFlights, setFilteredFlights] = useState([]);
  const [filteredTrains, setFilteredTrains] = useState([]);
  const [filteredAccommodations, setFilteredAccommodations] = useState([]);
  const [filteredBuses, setFilteredBuses] = useState([]);

  useEffect(() => {
    setFilteredFlights(filterFlights(startLocation, endLocation));
    setFilteredTrains(filterTrains(startLocation, endLocation));
    setFilteredAccommodations(filterAccommodations(endLocation));
    setFilteredBuses(filterBuses(startLocation, endLocation));
  }, [startLocation, endLocation]);

  const renderFlights = () => (
    filteredFlights.map((flight, index) => (
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
  );

  const renderTrains = () => (
    filteredTrains.map((train, index) => (
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
  );

  const renderAccommodations = () => (
    filteredAccommodations.map((accommodation, index) => (
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
  );

  const renderBuses = () => (
    filteredBuses.map((bus, index) => (
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
  );
  

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
                    {/* <div className="col-md-12">
                      <p className="mbr-text mbr-fonts-style display-7">
                        <strong>Flight 1:</strong><br/><br/>
                        <strong>Airline:</strong> SkyHigh Airlines<br/>
                        <strong>Flight Number:</strong> SH123<br/>
                        <strong>Departure:</strong> New Delhi, IGI Airport (DEL) - 10:00 AM<br/>
                        <strong>Arrival:</strong> Mumbai, Chhatrapati Shivaji Maharaj International Airport - 12:30 PM<br/>
                        <strong>Price:</strong> ₹5,500<br/><br/>
                        <strong>Flight 2:</strong><br/><br/>
                        <strong>Airline:</strong> JetStream<br/>
                        <strong>Flight Number:</strong> JS456<br/>
                        <strong>Departure:</strong> Bengaluru, Kempegowda International Airport - 08:15 AM<br/>
                        <strong>Arrival:</strong> Chennai, Chennai International Airport - 09:45 AM<br/>
                        <strong>Price:</strong> ₹4,200
                      </p>
                    </div> */}
                    {renderFlights()}
                  </div>
                </div>
                <div id="tab2" className={`tab-pane ${activeTab === 'tab2' ? 'in active' : ''}`} role="tabpanel">
                  <div className="row">
                    {/* <div className="col-md-12">
                      <p className="mbr-text mbr-fonts-style display-7">
                        <strong>Train 1:</strong><br/><br/>
                        <strong>Train Name:</strong> Express Star<br/>
                        <strong>Train Number:</strong> ES789<br/>
                        <strong>Departure:</strong> New Delhi, NDLS - 06:00 PM<br/>
                        <strong>Arrival:</strong> Jaipur, JP - 10:30 PM<br/>
                        <strong>Price:</strong> ₹800 (Sleeper Class)<br/><br/>
                        <strong>Train 2:</strong><br/><br/>
                        <strong>Train Name:</strong> Coastal Line<br/>
                        <strong>Train Number:</strong> CL101<br/>
                        <strong>Departure:</strong> Mumbai, CSTM - 05:00 AM<br/>
                        <strong>Arrival:</strong> Goa, GIM - 02:00 PM<br/>
                        <strong>Price:</strong> ₹1,200 (AC Chair Car)
                      </p>
                    </div> */}
                    {renderTrains()}
                  </div>
                </div>
                <div id="tab3" className={`tab-pane ${activeTab === 'tab3' ? 'in active' : ''}`} role="tabpanel">
                  <div className="row">
                    {/* <div className="col-md-12">
                      <p className="mbr-text mbr-fonts-style display-7">
                        <strong>Bus 1:</strong><br/><br/>
                        <strong>Operator:</strong> TravelEase<br/>
                        <strong>Route:</strong> Delhi to Agra<br/>
                        <strong>Departure:</strong> 07:00 AM<br/>
                        <strong>Arrival:</strong> 11:00 AM<br/>
                        <strong>Price:</strong> ₹500 (Luxury)<br/><br/>
                        <strong>Bus 2:</strong><br/><br/>
                        <strong>Operator:</strong> CityLink<br/>
                        <strong>Route:</strong> Bangalore to Hyderabad<br/>
                        <strong>Departure:</strong> 09:00 PM<br/>
                        <strong>Arrival:</strong> 07:00 AM (Next Day)<br/>
                        <strong>Price:</strong> ₹650 (Semi-Sleeper)
                      </p>
                    </div> */}
                    {renderBuses()}
                  </div>
                </div>
                <div id="tab4" className={`tab-pane ${activeTab === 'tab4' ? 'in active' : ''}`} role="tabpanel">
                  <div className="row">
                    {/* <div className="col-md-12">
                      <p className="mbr-text mbr-fonts-style display-7">
                        <strong>Hotel 1:</strong><br/><br/>
                        <strong>Name:</strong> The Grand Hotel<br/>
                        <strong>Location:</strong> Connaught Place, New Delhi<br/>
                        <strong>Type:</strong> 5-Star<br/>
                        <strong>Price per Night:</strong> ₹10,000<br/>
                        <strong>About:</strong> Luxury hotel with amenities including a spa, rooftop restaurant, and pool.<br/><br/>
                        <strong>Hotel 2:</strong><br/><br/>
                        <strong>Name:</strong> Comfort Inn<br/>
                        <strong>Location:</strong> MG Road, Bangalore<br/>
                        <strong>Type:</strong> 3-Star<br/>
                        <strong>Price per Night:</strong> ₹3,500<br/>
                        <strong>About:</strong> Comfortable stay with complimentary breakfast and free Wi-Fi.<br/><br/>
                        <strong>Guesthouse 1:</strong><br/><br/>
                        <strong>Name:</strong> Cozy Retreat<br/>
                        <strong>Location:</strong> Fort, Mumbai<br/>
                        <strong>Type:</strong> Budget<br/>
                        <strong>Price per Night:</strong> ₹1,200<br/>
                        <strong>About:</strong> Affordable guesthouse with basic amenities and a friendly atmosphere.<br/><br/>
                        <strong>Hostel 1:</strong><br/><br/>
                        <strong>Name:</strong> Backpacker’s Haven<br/>
                        <strong>Location:</strong> Palolem Beach, Goa<br/>
                        <strong>Type:</strong> Hostel<br/>
                        <strong>Price per Night:</strong> ₹800<br/>
                        <strong>About:</strong> Budget hostel with dormitory-style rooms, close to the beach and local attractions.
                      </p>
                    </div> */}
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
