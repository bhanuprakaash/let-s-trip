import React, { useState } from "react";

const HowToStart = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <section
      data-bs-version="5.1"
      className="tabs content18 cid-ukPyrz3LmS"
      id="tabs1-32"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8">
            <h3 className="mbr-section-title mb-0 mbr-fonts-style display-2">
              How To Start
            </h3>
          </div>
        </div>
        <div className="row justify-content-center mt-4">
          <div className="col-12 col-md-8">
            <ul className="nav nav-tabs mb-4" role="tablist">
              <li className="nav-item">
                <button
                  className={`nav-link mbr-fonts-style ${
                    activeTab === "tab1" ? "active" : ""
                  } display-7`}
                  role="tab"
                  onClick={() => handleTabChange("tab1")}
                >
                  <strong>Plan Your Trip</strong>
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link mbr-fonts-style ${
                    activeTab === "tab2" ? "active" : ""
                  } display-7`}
                  role="tab"
                  onClick={() => handleTabChange("tab2")}
                >
                  <strong>Add Destination</strong>
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link mbr-fonts-style ${
                    activeTab === "tab3" ? "active" : ""
                  } display-7`}
                  role="tab"
                  onClick={() => handleTabChange("tab3")}
                >
                  <strong>Organize Plan</strong>
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link mbr-fonts-style ${
                    activeTab === "tab4" ? "active" : ""
                  } display-7`}
                  role="tab"
                  onClick={() => handleTabChange("tab4")}
                >
                  <strong>Budget</strong>
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link mbr-fonts-style ${
                    activeTab === "tab5" ? "active" : ""
                  } display-7`}
                  role="tab"
                  onClick={() => handleTabChange("tab5")}
                >
                  <strong>Get Started</strong>
                </button>
              </li>
            </ul>
            <div className="tab-content">
              <div
                id="tab1"
                className={`tab-pane ${activeTab === "tab1" ? "active" : ""}`}
                role="tabpanel"
              >
                <div className="row">
                  <div className="col-md-12">
                    <p className="mbr-text mbr-fonts-style display-7">
                      Start by choosing your destination and setting up your
                      travel dates. Our app guides you through creating a
                      personalized trip plan.
                    </p>
                  </div>
                </div>
              </div>
              <div
                id="tab2"
                className={`tab-pane ${activeTab === "tab2" ? "active" : ""}`}
                role="tabpanel"
              >
                <div className="row">
                  <div className="col-md-12">
                    <p className="mbr-text mbr-fonts-style display-7">
                      Browse through our list of popular Indian destinations and
                      add your favorites to your itinerary. Use our
                      drag-and-drop feature to arrange them as you like.
                    </p>
                  </div>
                </div>
              </div>
              <div
                id="tab3"
                className={`tab-pane ${activeTab === "tab3" ? "active" : ""}`}
                role="tabpanel"
              >
                <div className="row">
                  <div className="col-md-12">
                    <p className="mbr-text mbr-fonts-style display-7">
                      Customize your travel itinerary by adding activities,
                      accommodation, and transportation. Our intuitive interface
                      makes it easy to adjust your plans and stay organized.
                    </p>
                  </div>
                </div>
              </div>
              <div
                id="tab4"
                className={`tab-pane ${activeTab === "tab4" ? "active" : ""}`}
                role="tabpanel"
              >
                <div className="row">
                  <div className="col-md-12">
                    <p className="mbr-text mbr-fonts-style display-7">
                      Keep an eye on your travel expenses with our budget
                      tracker. Add your estimated costs and monitor your
                      spending to ensure you stay within budget.
                    </p>
                  </div>
                </div>
              </div>
              <div
                id="tab5"
                className={`tab-pane ${activeTab === "tab5" ? "active" : ""}`}
                role="tabpanel"
              >
                <div className="row">
                  <div className="col-md-12">
                    <p className="mbr-text mbr-fonts-style display-7">
                      Get started with our app to manage your travel plans
                      efficiently. Follow these steps to make the most of your
                      journey.
                    </p>
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

export default HowToStart;
