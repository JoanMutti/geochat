import { useState, useEffect } from "react";

const options = {
  enableHighAccuracy: true,
  timeout: 10 * 1000 * 1000,
  maximumAge: 0,
};

export function usePosition() {
  const [position, setPosition] = useState({ lat: null, lng: null });

  const handleError = (error) => {
    console.log(error);
  };

  const handleSuccess = (position) => {
    setPosition({ lat: position.coords.latitude, lng: position.coords.longitude });
  };

  useEffect(() => {
    const watcher = navigator.geolocation.watchPosition(handleSuccess, handleError, options);
    return () => {
      navigator.geolocation.clearWatch(watcher);
    };
  }, []);

  return { position };
}
