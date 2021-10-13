import { useEffect, useRef, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const useGooglePlaces = () => {
  const [placesState, setPlacesState] = useState({
    placeRef: null as any,
    error: false,
    loading: true,
  });
  const placesElement = document.createElement("div");
  let placeRef = useRef(placesElement) as any;

  const loader = new Loader({
    apiKey: process.env.REACT_APP_GOOGLE_KEY,
    version: "weekly",
    libraries: ["places"],
  });
  const placeOptions = {
    center: {
      lat: 0,
      lng: 0,
    },
  };
  useEffect(() => {
    loader
      .load()
      .then((google) => {
        placeRef = new google.maps.Map(placeRef.current as any, placeOptions);
        setPlacesState((prevState) => {
          return { ...prevState, placeRef: placeRef, loading: false };
        });
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  return { placesState };
};

const findNearbyPlaces = ({
  lat,
  long,
  keyword,
  callbackFunction,
  placeRef,
}: {
  lat: number;
  long: number;
  keyword?: string;
  callbackFunction: (results: any, status: any) => void;
  placeRef: any;
}) => {
  console.log("1");
  const googleLocation = new google.maps.LatLng(lat, long);
  console.log("2");

  const request = {
    location: googleLocation,
    radius: 500,
    type: "",
    keyword: !!keyword ? keyword : "",
  };

  const service = new google.maps.places.PlacesService(placeRef);

  service.nearbySearch(request, callbackFunction);
};

const findPlace = ({
  placeId,
  placeRef,
  callbackFunction,
}: {
  placeId: string;
  placeRef: any;
  callbackFunction: (results: any, status: any) => void;
}) => {
  const request = {
    placeId,
    fields: ["name", "rating", "formatted_address"],
  };
  const service = new google.maps.places.PlacesService(placeRef);

  service.getDetails(request, callbackFunction);
};

export { useGooglePlaces, findNearbyPlaces, findPlace };
