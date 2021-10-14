import { useState } from "react";
import styled from "styled-components";
import { Spinner } from "../components/ui";
import { useGooglePlaces } from "../services";

import { NearbyList } from "../components/dumbComponents";
import { NearbySearchForm } from "../components/smartComponents";

interface GoogleNearbyComponentState {
  results: google.maps.places.PlaceResult[];
  loading: boolean;
}

const GoogleNearbyComponent = () => {
  const { placesState } = useGooglePlaces();

  const [state, setState] = useState<GoogleNearbyComponentState>({
    results: [],
    loading: false,
  });

  const setNearbyPlaces = (
    results: google.maps.places.PlaceResult[] | null,
    status: google.maps.places.PlacesServiceStatus
  ) => {
    setState({
      results: [],
      loading: true,
    });
    if (status !== google.maps.places.PlacesServiceStatus.OK || !results) {
      setState({
        results: [],
        loading: false,
      });
      return;
    }

    setState({ results, loading: false });
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
      <NearbyList places={state.results} loading={state.loading} />
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
