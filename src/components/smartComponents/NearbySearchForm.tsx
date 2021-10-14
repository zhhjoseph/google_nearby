import styled from "styled-components";
import { RadioInput, StyledText, TextInput } from "../../components/ui";
import { findNearbyPlaces } from "../../services";
import { Formik, Form, Field } from "formik";
import { Button } from "../../components/ui/Button";
import { locations } from "../../data/locations";

interface FormValues {
  keyword: string;
  selectedLocation: string;
}

interface NearbySearchFormProps {
  placeRef: any;
  callbackFunction: (
    results: google.maps.places.PlaceResult[] | null,
    status: google.maps.places.PlacesServiceStatus
  ) => void;
}
interface LOCATION {
  [key: string]: {
    latitude: number;
    longitude: number;
  };
}

const locationData = locations as LOCATION;

const initialValues: FormValues = {
  keyword: "",
  selectedLocation: "Snowmass, CO",
};

const NearbySearchForm = ({
  placeRef,
  callbackFunction,
}: NearbySearchFormProps) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        findNearbyPlaces({
          lat: locationData[values.selectedLocation].latitude,
          long: locationData[values.selectedLocation].longitude,
          keyword: values.keyword,
          placeRef,
          callbackFunction,
        });
      }}
    >
      <StyledForm>
        <FormContainer>
          <SelectionContainer>
            <TextWrapper>
              <StyledText>Select a Location</StyledText>
            </TextWrapper>
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
      </StyledForm>
    </Formik>
  );
};

export { NearbySearchForm };

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const StyledForm = styled(Form)`
  width: 80%;
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const SelectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 200px;
  width: 500px;
`;

const SelectionList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 70%;
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
  width: 500px;
`;
