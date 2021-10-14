import { useState } from "react";
import styled from "styled-components";
import { Spinner } from "../components/ui";
import { useGooglePlaces } from "../services";

import { NearbyList } from "../components/dumbComponents";
import { NearbySearchForm } from "../components/smartComponents";

const GoogleNearbyComponent = () => {
  const { placesState } = useGooglePlaces();

  const [state, setState] = useState<google.maps.places.PlaceResult[]>([]);

  const setNearbyPlaces = (
    results: google.maps.places.PlaceResult[] | null,
    status: google.maps.places.PlacesServiceStatus
  ) => {
    if (status !== google.maps.places.PlacesServiceStatus.OK || !results) {
      setState([]);
      return;
    }

    setState(results);
  };

  if (placesState.loading) {
    return <Spinner color={"green"} />;
  }

  return (
    <Container>
      <NearbySearchForm
        placeRef={placesState.placeRef}
        callbackFunction={setNearbyPlaces}
      />
      <NearbyList places={state} placeRef={placesState.placeRef} />
    </Container>
  );
};

export { GoogleNearbyComponent };

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  padding-top: 50px;
`;
