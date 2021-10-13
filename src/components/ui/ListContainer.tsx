import styled from "styled-components";

interface ListContainerProps {
  width?: string;
}

const ListContainer = (props: ListContainerProps) => {
  return <StyledListContainer {...props} />;
};

interface StyledListContainerProps {
  width?: string;
}

const StyledListContainer = styled.div<StyledListContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.width ? props.width : "100%")};
  border: 1px solid black;
`;

export { ListContainer };
