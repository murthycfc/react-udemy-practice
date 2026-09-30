import { useEffect, useState } from 'react';
import Places from './Places.jsx';

// const places = localStorage.getItem();
export default function AvailablePlaces({ onSelectPlace }) {

  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([])
  const [error, setError] = useState();

  useEffect(() => {
    setIsFetching(true);
    fetch('http://localhost:3000/places')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Failed to fetch places');
            }
            return response.json();
        })
        .then((responseData) => {
            setAvailablePlaces(responseData.places);
        })
        .catch((error) => {
            alert(error.message);
        })
        .finally(() => {
            setIsFetching(false);
        });

}, []);

  // useEffect(() => {
  //   async function fetchPlaces() {
  //       try {
  //           const response = await fetch("http://localhost:3000/places");

  //           if (!response.ok) {
  //             throw new Error("Failed to fetch places");
  //           }

  //           const data = await response.json();

  //           console.log("API data:", data);

  //           setAvailablePlaces(data);
  //       } catch (error) {
  //           console.error("Error fetching places:", error);
  //       }
  //   }
  //   fetchPlaces();
  // }, []);
  

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading = {isFetching}
      loadingText = "Loading...."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
