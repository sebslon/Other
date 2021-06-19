import styled from "styled-components";

const FormBackground = styled.div<any>`
  height: 100vh;
  background-color: black;
  background-image: url(${(props) => props.img});
  object-fit: cover;
  background-size: 100% 100%;
`;

const BackgroundShadow = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  height: 100vh;
  display: grid;
  place-items: center;
`;

const FormContainer = styled.div`
  background-color: #ddc9b4;
  width: 40%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  align-items: center;

  h1 {
    margin: 0px;
  }
`;

const StyledWrapper = styled.div`
  width: 1200px;
  margin: auto;
  text-align: center;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export { FormBackground, BackgroundShadow, FormContainer, ListWrapper, StyledWrapper };
