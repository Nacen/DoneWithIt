import { useState, useEffect } from "react";
import * as Location from "expo-location";

type LocationType = {
  latitude: number;
  longitude: number;
};

export const useLocation = () => {
  const [location, setLocation] = useState<LocationType>();

  const getLocation = async () => {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) return;
      const results = await Location.getLastKnownPositionAsync();
      if (results) {
        setLocation({
          latitude: results.coords.latitude,
          longitude: results.coords.longitude,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return location;
};
