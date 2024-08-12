export const generateItinerary = (
  days,
  destinations,
  startLocation,
  endLocation
) => {
  const itinerary = [];
  const maxDestinations = 10;
  const effectiveDestinations = destinations.slice(0, maxDestinations);

  for (let i = 0; i < days; i++) {
    if (i === 0) {
      itinerary.push({
        date: `Day ${i + 1}`,
        morning: {
          title: `Arrival in ${endLocation}`,
          details: `Depart from ${startLocation} to ${endLocation} by flight or train.`,
        },
        afternoon: {
          title: `Lunch and Relax`,
          details: `Check in at the hotel. Relax and Freshen Up`,
        },
        evening: {
          title: `Evening Stroll`,
          details: `Visit ${
            effectiveDestinations[i % effectiveDestinations.length]
          }. Take a light evening stroll around ${
            effectiveDestinations[i % effectiveDestinations.length]
          }.`,
        },
      });
    } else if (i === days - 1) {
      itinerary.push({
        date: `Day ${i + 1}`,
        morning: {
          title: `Final Activity in ${
            effectiveDestinations[i % effectiveDestinations.length]
          }`,
          details: `Spend your last morning visiting any remaining spots in ${
            effectiveDestinations[i % effectiveDestinations.length]
          }.`,
        },
        afternoon: {
          title: `Packing and Departure`,
          details: `Prepare for departure. Ensure all luggage is packed and ready.`,
        },
        evening: {
          title: `Return Home`,
          details: `Begin your journey back home from ${endLocation}.`,
        },
      });
    } else if (i < 5) {
      const place1 =
        effectiveDestinations[((i - 1) * 2) % effectiveDestinations.length];
      const place2 =
        effectiveDestinations[((i - 1) * 2 + 1) % effectiveDestinations.length];

      itinerary.push({
        date: `Day ${i + 1}`,
        morning: {
          title: `Explore ${place1}`,
          details: `Start your day with a visit to ${place1}.`,
        },
        afternoon: {
          title: `Lunch and Relax`,
          details: `Enjoy local cuisine and relax. Then head to ${place2}.`,
        },
        evening: {
          title: `Evening Activity`,
          details: `End your day with a relaxing activity or stroll in ${place2}.`,
        },
      });
    } else {
      itinerary.push({
        date: `Day ${i + 1}`,
        morning: {
          title: `Flexible Activity`,
          details: `Plan your day based on preferences and recommendations in ${
            effectiveDestinations[i % effectiveDestinations.length]
          }.`,
        },
        afternoon: {
          title: `Flexible Activity`,
          details: `Continue exploring or relaxing based on your interests.`,
        },
        evening: {
          title: `Flexible Activity`,
          details: `Enjoy a relaxing evening and dinner at your own pace.`,
        },
      });
    }
  }

  return itinerary;
};
