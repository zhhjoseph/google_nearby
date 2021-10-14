import styled from "styled-components";
import { ListContainer, Spinner } from "../ui";

interface NearbyListProps {
  places: google.maps.places.PlaceResult[];
  loading: boolean;
}
const NearbyList = ({ places, loading }: NearbyListProps) => {
  return (
    <NearbyPlacesContainer>
      {!loading ? (
        <StyledList>
          {places.map((results) => {
            return (
              <ListContainer
                address={results.vicinity}
                rating={results.rating}
                name={results.name}
                key={results.place_id}
              />
            );
          })}
        </StyledList>
      ) : (
        <Spinner color={"green"} />
      )}
    </NearbyPlacesContainer>
  );
};

const StyledList = styled.ul`
  height: 100%;
`;

const NearbyPlacesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 80%;
  margin-top: 20px;
  height: 500px;
  overflow: hidden;
  overflow-y: auto;
`;

export { NearbyList };
