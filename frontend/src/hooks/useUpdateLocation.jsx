import axios from "axios";
import { useEffect } from "react";
import { serverUrl } from "../App";
import { useSelector } from "react-redux";

function useUpdateLocation() {
  const { userData } = useSelector((state) => state.user);

  useEffect(() => {
    if (!userData) return; // Don't run if user is not logged in

    const updateLocation = async (lat, lon) => {
      try {
        const result = await axios.post(
          `${serverUrl}/api/user/update-location`,
          { lat, lon },
          { withCredentials: true }
        );
        console.log(result.data);
      } catch (error) {
        console.log(error.response?.data || error.message);
      }
    };

    const watchId = navigator.geolocation.watchPosition((pos) => {
      updateLocation(pos.coords.latitude, pos.coords.longitude);
    });

    return () => navigator.geolocation.clearWatch(watchId);
  }, [userData]);
}

export default useUpdateLocation;