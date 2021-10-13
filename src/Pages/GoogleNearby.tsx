import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Spinner } from "../components/ui";
import { findNearbyPlaces, useGooglePlaces } from "../services";

const GoogleNearbyComponent = () => {
  const { placesState } = useGooglePlaces();

  useEffect(() => {
    // if(placesState.loading === false){
    //   findNearbyPlaces(
    //     {lat: 39.2130,
    //       long: -106.9378,
    //       placeRef: placesState.placeRef,
    //       callbackFunction: hello
    //     }
    //   )
    // }
  }, []);

  const hello = (results: any, status: any) => {
    console.log("results", results);
  };
  if (placesState.loading) {
    return <Spinner color={"green"} />;
  }
  return (
    <Container>
      <SelectionContainer>Selection Container</SelectionContainer>
      <NearbyPlacesContainer>Nearby Places list</NearbyPlacesContainer>
    </Container>
  );
};

export { GoogleNearbyComponent };

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SelectionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NearbyPlacesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
