import styled from 'styled-components';

export const PetCardContainer = styled.div`
  background-color: ${(props) => props.theme['blue-500']};
  height: 240px;
  width: 280px;
  border-radius: 20px;

  img {
    padding: 5px;
    width: 100%;
    border-radius: 20px;
    max-height: 180px;
  }

  p {
    color: ${(props) => props.theme['white']};
    text-align: center;
    font-weight: bold;
    font-size: 18px;
  }
`;
