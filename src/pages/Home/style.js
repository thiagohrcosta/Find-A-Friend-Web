import styled from 'styled-components';

export const HomeBackground = styled.div`
  background: ${(props) => props.theme['red-500']};
  height: 100vh;
  width: 100%;
  margin: 0 auto;
`;

export const HomeContainer = styled.div`
  max-width: 1440px;
  padding: 100px 100px;
  margin: 0 auto;
`;

export const BannerContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 100px;

  h1 {
    color: ${(props) => props.theme['white']};
    font-size: 72px;
    font-weight: bold;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 100px 0;
  color: ${(props) => props.theme['white']};

  h3 {
    font-size: 24px;
    font-weight: lighter;
    width: 60%;
  }

  .search-home-container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    input {
      background: ${(props) => props.theme['red-600']};
      border-radius: 8px;
      border: none;
      width: 297px;
      height: 72px;

    }
  }

  .input-container {
    display: flex;
    justify-content: space-between;

    select {
      background: ${(props) => props.theme['red-600']};
      border-radius: 8px;
      border: none;
      width: 297px;
      height: 72px;

      margin: 0 20px;
      color: ${(props) => props.theme['white']};
      text-align: center;
      font-size: 20px;
      font-weight: bold;
    }
  }
`;


