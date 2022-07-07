import React, { useEffect, useContext } from "react";
import Login from "../components/Login";
import { UserContext } from "../context/UserContext";

const Home = () => {
  const { setUser } = useContext(UserContext);
  //   useEffect(() => {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         console.log(position);
  //       },
  //       (error) => console.log(error),
  //       {
  //         enableHighAccuracy: true,
  //         timeout: 10 * 1000 * 1000,
  //       }
  //     );
  //   }, []);

  //   const handleClick = () => {
  //     navigator.geolocation.watchPosition(
  //       (position) => {
  //         console.log(position);
  //       },
  //       (error) => console.log(error),
  //       {
  //         enableHighAccuracy: true,
  //         timeout: 10 * 1000 * 1000,
  //         maximumAge: 0,
  //       }
  //     );
  //   };

  return (
    <div>
      <Login setUser={setUser} />
    </div>
  );
};

export default Home;
