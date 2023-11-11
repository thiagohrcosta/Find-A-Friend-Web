import styled from 'styled-components';

export const CityBackground = styled.div`
  height: 100vh;
  width: 100%;
`;

export const CityDashboard = styled.div`
  display: flex;
  justify-content: space-between;

  .dashboard {
    background-color: ${(props) => props.theme['red-600']};
    height: 100vh;
    width: 20%;
    
    padding: 70px 50px;
  }

  .content-container {
    background-color: ${(props) => props.theme['bg-200']};
    width: 80%;
    height: 100vh;
  }
`;

export const Spinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const PetsContainer = styled.div`
  padding: 80px 50px;

  h3 {
    color: ${(props) => props.theme['blue-500']};
    font-weight: lighter;
    margin-bottom: 100px;
  }

  span {
    font-weight: bold;
  }
`;

export const PetGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 16px;
  margin: 10px;
`;