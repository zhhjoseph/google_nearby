import styled from "styled-components";
import { StyledText } from "../ui";

interface ListContainerProps {
  width?: string;
  address?: string;
  name?: string;
  rating?: number;
}

const ListContainer = ({
  width,
  address,
  name,
  rating,
}: ListContainerProps) => {
  return (
    <StyledListContainer width={width}>
      <Spread>
        <StyledText>{name}</StyledText>
        <StyledText>{`Rating - ${rating ? rating + "/5" : "N/A"}`}</StyledText>
      </Spread>
      <StyledText>{address}</StyledText>
    </StyledListContainer>
  );
};

interface StyledListContainerProps {
  width?: string;
}

const StyledListContainer = styled.div<StyledListContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  height: 80px;
  margin: 10px 10px;
  width: ${(props) => (props.width ? props.width : "400px")};
  border: 1px solid black;
  padding: 10px;
`;

const Spread = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
export { ListContainer };
