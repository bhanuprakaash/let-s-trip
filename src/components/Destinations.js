import React from "react";
import { Link } from "react-router-dom";

const destinations = [
  {
    imgSrc: "assets/images/mbr-2-1920x1275.jpg",
    altText: "jaipur",
    title: "Ladakh",
    subtitle: "Land of High Passes",
    description:
      "Discover the breathtaking landscapes, serene monasteries, and adventurous trekking routes in Ladakh.",
    highlights:
      "Pangong Lake, Nubra Valley, Leh Palace, and Thiksey Monastery.",
    nearby: "Magnetic Hill, Khardung La Pass, Hemis Monastery.",
  },
  {
    imgSrc: "assets/images/mbr-1-1920x1275.jpg",
    altText: "jaipur",
    title: "Agra",
    subtitle: "Taj Mahal City",
    description:
      "Marvel at the iconic Taj Mahal and explore historic Mughal architecture.",
    highlights: "Taj Mahal, Agra Fort, Fatehpur Sikri, and local crafts.",
    nearby: "Mathura, Vrindavan, Bharatpur Bird Sanctuary.",
  },
  {
    imgSrc: "assets/images/mbr-1920x1275.jpg",
    altText: "goa",
    title: "Goa",
    subtitle: "Beach Paradise",
    description:
      "Enjoy sun-soaked beaches, vibrant nightlife, and rich cultural heritage.",
    highlights:
      "Top beaches, water sports, vibrant nightlife, and Portuguese architecture.",
    nearby: "Dudhsagar Falls, Anjuna Flea Market, Basilica of Bom Jesus.",
  },
  {
    imgSrc: "assets/images/mbr-2-1920x1280.jpg",
    altText: "jaipur",
    title: "Delhi",
    subtitle: "Historic Metropolis",
    description:
      "Explore historical monuments, bustling markets, and diverse cuisine.",
    highlights: "Red Fort, India Gate, Qutub Minar, and Chandni Chowk.",
    nearby: "Agra, Mathura, Vrindavan.",
  },
  {
    imgSrc: "assets/images/mbr-1256x837.jpg",
    altText: "jaipur",
    title: "Jaipur",
    subtitle: "Royal City",
    description:
      "Discover majestic forts, palaces, and vibrant markets in the Pink City.",
    highlights: "Hawa Mahal, Amber Fort, City Palace, and local bazaars.",
    nearby: "Pushkar, Ajmer, Ranthambore National Park.",
  },
  {
    imgSrc: "assets/images/mbr-1-1920x1280.jpg",
    altText: "jaipur",
    title: "Kerala",
    subtitle: "Backwater Bliss",
    description:
      "Experience the tranquil backwaters, lush greenery, and unique houseboats of Kerala.",
    highlights:
      "Alleppey houseboats, Kumarakom, Vembanad Lake, and coconut groves.",
    nearby: "Munnar, Thekkady, Kovalam.",
  },
  {
    imgSrc: "assets/images/mbr-1920x1280.jpg",
    altText: "jaipur",
    title: "Udaipur",
    subtitle: "City of Lakes",
    description:
      "Admire the beautiful lakes, palaces, and romantic atmosphere of Udaipur.",
    highlights: "Lake Pichola, City Palace, Jag Mandir, and boat rides.",
    nearby: "Kumbhalgarh Fort, Ranakpur, Mount Abu.",
  },
  {
    imgSrc: "assets/images/mbr-1256x832.jpg",
    altText: "shimla",
    title: "Shimla",
    subtitle: "Hill Station Escape",
    description:
      "Experience serene landscapes, pleasant weather, and colonial architecture.",
    highlights: "Mall Road, Ridge, Jakhoo Temple, and colonial buildings.",
    nearby: "Kufri, Chail, Naldehra.",
  },
  {
    imgSrc: "assets/images/mbr-1920x1440.jpg",
    altText: "jaipur",
    title: "Mumbai",
    subtitle: "Financial Capital",
    description:
      "Experience the vibrant energy, entertainment, and cultural diversity of Mumbai.",
    highlights: "Gateway of India, Marine Drive, Bollywood, and street food.",
    nearby: "Lonavala, Alibaug, Elephanta Caves.",
  },
  {
    imgSrc: "assets/images/mbr-3-1920x1280.jpg",
    altText: "jaipur",
    title: "Varanasi",
    subtitle: "Spiritual Heart",
    description:
      "Experience the ancient rituals, ghats, and rich cultural heritage of Varanasi.",
    highlights:
      "Ganga Aarti, Kashi Vishwanath Temple, Sarnath, and boat rides.",
    nearby: "Allahabad, Bodh Gaya, Sarnath.",
  },
];

const Destinations = () => {
  return (
    <section
      data-bs-version="5.1"
      className="gallery2 cid-ukKNPXOnTK"
      id="gallery2-2l"
    >
      <div className="container">
        <div className="mbr-section-head">
          <h4 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
            Our Popular Destinations
          </h4>
        </div>
        <div className="row mt-4">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="item features-image col-12 col-md-6 col-lg-6"
            >
              <div className="item-wrapper">
                <div className="item-img">
                  <img
                    src={destination.imgSrc}
                    alt={destination.altText}
                    data-slide-to={index}
                    data-bs-slide-to={index}
                  />
                </div>
                <div className="item-content">
                  <h5 className="item-title mbr-fonts-style display-5">
                    <strong>{destination.title}</strong>
                  </h5>
                  <h6 className="item-subtitle mbr-fonts-style mt-1 display-7">
                    <em>{destination.subtitle}</em>
                  </h6>
                  <p className="mbr-text mbr-fonts-style mt-3 display-7">
                    {destination.description}
                    <br />
                    <br />
                    <strong>Highlights:</strong> {destination.highlights}
                    <br />
                    <br />
                    <strong>Tourist Places Nearby:</strong> {destination.nearby}
                  </p>
                </div>
                <div className="mbr-section-btn item-footer mt-2">
                  <Link
                    to="/plan-trip"
                    className="btn item-btn btn-warning display-7"
                  >
                    Plan Your Trip
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
