import styled from 'styled-components';

export const MainContainer = styled.div`
  padding: 0 ${24 / 16}rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PlanetName = styled.h1`
  margin-bottom: 1rem;
  font-family: ${({ theme }) => theme.typography.antonio};
  font-size: ${40 / 16}rem;
  text-transform: uppercase;
`;

export const PlanetDesc = styled.p`
  margin-bottom: ${32 / 16}rem;
  font-size: ${11 / 16}rem;
  line-height: ${22 / 16}rem;
  text-align: center;
`;

export const Source = styled.p`
  margin-bottom: ${28 / 16}rem;
  font-size: ${12 / 16}rem;
  font-weight: 400;
  line-height: ${25 / 16}rem;
  color: ${({ theme }) => theme.colors.white}50;

  & svg {
    margin-left: ${4 / 16}rem;
    vertical-align: middle;
  }
`;

export const SourceLink = styled.a`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white}50;

  & svg {
    margin-left: ${4 / 16}rem;
    vertical-align: middle;
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.white};
  }

  &:hover svg path,
  &:focus svg path {
    opacity: 1;
  }
`;

export const FactsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${8 / 16}rem;
`;

export const Fact = styled.div`
  padding: ${9 / 16}rem ${24 / 16}rem ${11 / 16}rem ${24 / 16}rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.colors.white}20;
`;

export const FactName = styled.p`
  padding-top: ${2 / 16}rem;
  font-weight: 700;
  font-size: ${8 / 16}rem;
  line-height: 1rem;
  letter-spacing: ${0.73 / 16}rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white}50;
`;

export const FactValue = styled.p`
  font-family: ${({ theme }) => theme.typography.antonio};
  font-size: ${20 / 16}rem;
  line-height: ${26 / 16}rem;
  letter-spacing: -${0.75 / 16}rem;
  text-transform: uppercase;
`;
