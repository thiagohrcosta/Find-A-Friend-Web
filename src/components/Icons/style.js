import styled from 'styled-components';

export const IconContainer = styled.div`
  background-color: ${(props) => props.theme['yellow-500']};
  color: ${(props) => props.theme['black-500']};

  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
