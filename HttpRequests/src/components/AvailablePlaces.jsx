import { useState, useEffect } from 'react';
import Places from './Places.jsx';
import axios from 'axios'


export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces ] = useState([])

  useEffect(() => {
    const fetchPlaces = async () => {
      const {data} = await axios.get("http://localhost:3000/places")
      setAvailablePlaces(data.places)
    }
    fetchPlaces();
    // fetch("http://localhost:3000/places")
    // .then(res => res.json())
    // .then(data => setAvailablePlaces(data.places));
  }, [])



  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
