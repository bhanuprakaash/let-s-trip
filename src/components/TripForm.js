import React, { useEffect, useRef, useState } from "react";
import "../PlanTrips.css";
import { FaPaperPlane, FaArrowCircleRight } from "react-icons/fa";

const TripForm = ({ onSubmit }) => {
  const droppableElements = useRef([]);
  const draggableElements = useRef([]);
  const [numberOfDays, setNumberOfDays] = useState(0);

  useEffect(() => {
    const draggableItems = draggableElements.current.slice();
    const droppableItems = droppableElements.current.slice();

    const handleDragStart = (e) => {
      e.dataTransfer.setData("text/plain", e.target.innerText);
      setTimeout(() => {
        e.target.classList.add("dragging");
      }, 0);
    };

    const handleDragOver = (e) => {
      e.preventDefault();
      e.target.classList.add("hover");
    };

    const handleDragLeave = (e) => {
      e.target.classList.remove("hover");
    };

    const handleDrop = (e) => {
      e.preventDefault();
      const data = e.dataTransfer.getData("text/plain");
      e.target.value = data;
      e.target.classList.remove("hover");
    };

    draggableItems.forEach((item) => {
      item.addEventListener("dragstart", handleDragStart);
    });

    droppableItems.forEach((item) => {
      item.addEventListener("dragover", handleDragOver);
      item.addEventListener("dragleave", handleDragLeave);
      item.addEventListener("drop", handleDrop);
    });

    return () => {
      draggableItems.forEach((item) => {
        item.removeEventListener("dragstart", handleDragStart);
      });

      droppableItems.forEach((item) => {
        item.removeEventListener("dragover", handleDragOver);
        item.removeEventListener("dragleave", handleDragLeave);
        item.removeEventListener("drop", handleDrop);
      });
    };
  }, []);

  const capitalizeFirstLetter = (str) => {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const startLocation = droppableElements.current[0].value;
    const endLocation = droppableElements.current[1].value;
    if (
      startLocation.trim().toLowerCase() === endLocation.trim().toLowerCase()
    ) {
      alert(
        "Start and End locations cannot be the same. Please choose different locations."
      );
      return;
    }
    onSubmit(
      capitalizeFirstLetter(startLocation),
      capitalizeFirstLetter(endLocation),
      numberOfDays
    );
  };

  return (
    <section className="draggable-body">
      <h1 className="draggable-body-heading">Plan Trip</h1>
      <div className="form-container">
        <form id="trip-form" onSubmit={handleSubmit}>
          <input
            type="text"
            id="start-destination"
            name="start-destination"
            placeholder="Start Location"
            className="drag-input"
            required
            ref={(el) => (droppableElements.current[0] = el)}
            onInput={(e) => {
              e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, "");
            }}
          />
          <FaArrowCircleRight
            className="destination-arrow"
            size={25}
            style={{ color: "#a0e2e1" }}
          />
          <input
            type="text"
            id="end-destination"
            name="end-destination"
            placeholder="End Location"
            className="drag-input"
            required
            onInput={(e) => {
              e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, "");
            }}
            ref={(el) => (droppableElements.current[1] = el)}
          />
          <input
            type="number"
            id="num-days"
            name="num-days"
            placeholder="Number of Days"
            className="drag-input"
            min="2"
            required
            onChange={(e) => setNumberOfDays(e.target.value)}
          />
          <button type="submit" className="submit-button">
            <FaPaperPlane size={25} style={{ color: "#a0e2e1" }} />
          </button>
        </form>
      </div>
      <div className="destinations-container">
        <h3>Top Destinations in India</h3>
        <ul id="destinations-list">
          {[
            "Agra",
            "Jaipur",
            "Delhi",
            "Mumbai",
            "Bangalore",
            "Chennai",
            "Kolkata",
            "Hyderabad",
            "Goa",
            "Varanasi",
            "Udaipur",
            "Shimla",
            "Manali",
            "Kerala",
            "Leh",
            "Ladakh",
            "Coorg",
          ].map((destination, index) => (
            <li
              key={index}
              draggable="true"
              ref={(el) => (draggableElements.current[index] = el)}
            >
              {destination}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TripForm;
