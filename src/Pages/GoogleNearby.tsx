import { useState } from "react";
import styled from "styled-components";
import { RadioInput, Spinner, StyledText, TextInput } from "../components/ui";
import { findNearbyPlaces, useGooglePlaces } from "../services";
import { locations } from "../data/locations";
import { Formik, Form, Field } from "formik";
import { Button } from "../components/ui/Button";

interface FormValues {
  keyword: string;
  selectedLocation: string;
}

interface LOCATION {
  [key: string]: {
    latitude: number;
    longitude: number;
  };
}

const GoogleNearbyComponent = () => {
  const { placesState } = useGooglePlaces();

  const [state, setState] = useState<google.maps.places.PlaceResult[] | null>(
    []
  );

  const locationData = locations as LOCATION;

  const initialValues: FormValues = {
    keyword: "",
    selectedLocation: "Snowmass, CO",
  };
  const setNearbyPlaces = (
    results: google.maps.places.PlaceResult[] | null,
    status: google.maps.places.PlacesServiceStatus
  ) => {
    setState(results);
  };

  if (placesState.loading) {
    return <Spinner color={"green"} />;
  }

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          findNearbyPlaces({
            lat: locationData[values.selectedLocation].latitude,
            long: locationData[values.selectedLocation].longitude,
            keyword: values.keyword,
            placeRef: placesState.placeRef,
            callbackFunction: setNearbyPlaces,
          });
        }}
      >
        <Form>
          <FormContainer>
            <SelectionContainer>
              <StyledText>Select</StyledText>
              <SelectionList>
                {Object.keys(locations).map((location) => {
                  return (
                    <SelectionListContainer key={location}>
                      <Field
                        name={"selectedLocation"}
                        value={location}
                        type={"radio"}
                        component={RadioInput}
                      />
                      <StyledText>{location}</StyledText>
                    </SelectionListContainer>
                  );
                })}
              </SelectionList>
            </SelectionContainer>
            <SearchContainer>
              <StyledText>Search</StyledText>
              <Field name={"keyword"} type={"text"} component={TextInput} />
              <Button type="submit">Search</Button>
            </SearchContainer>
          </FormContainer>
        </Form>
      </Formik>
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
  padding-top: 50px;
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SelectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 200px;
`;

const SelectionList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 50%;
`;

const SelectionListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 50%;
  height: 200px;
`;

const NearbyPlacesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
