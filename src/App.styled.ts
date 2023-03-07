import styled from 'styled-components';

const AppContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black};
  background-size: cover;
  background-image: url('assets/background-stars.svg');
`;

export default AppContainer;
