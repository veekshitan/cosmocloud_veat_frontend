import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { SET_LOCATION } from "../constants/ActionTypes";
import NavBar from "../components/NavBar";
function HomePage() {
  const dispatch = useDispatch();
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          dispatch({
            type: SET_LOCATION,
            payload: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            },
          });
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.log(error.message);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    getLocation();
  }, []);
  return (
    <div>
      <NavBar />
      <div>VEat</div>
      {location.latitude && location.longitude ? (
        <p>
          Latitude: {location.latitude}, Longitude: {location.longitude}
        </p>
      ) : (
        <p>Fetching location...</p>
      )}
    </div>
  );
}

export default HomePage;
