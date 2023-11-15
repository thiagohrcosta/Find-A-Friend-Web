import styled from 'styled-components';

export const PetContainer = styled.div`

`;

export const PetBackground = styled.div`
  height: 100vh;
  width: 100%;
`;

export const PetDashboard = styled.div`
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
