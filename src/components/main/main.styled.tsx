import styled from 'styled-components';

export const MainContainer = styled.div`
  padding: 0 ${24 / 16}rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 ${40 / 16}rem;
    text-align: left;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 0 ${165 / 16}rem;
  }
`;

export const DesktopScreenContainer = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 100%;
    display: flex;
    align-items: center;
  }
`;

export const TabletScreenContainer = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: ${69 / 16}rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: ${350 / 16}rem;
    flex-direction: column;
    justify-content: center;
    gap: ${39 / 16}rem;
  }
`;

export const PlanetName = styled.h1`
  margin-bottom: 1rem;
  font-family: ${({ theme }) => theme.typography.antonio};
  font-size: ${40 / 16}rem;
  text-transform: uppercase;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: ${24 / 16}rem;
    font-size: ${48 / 16}rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: ${80 / 16}rem;
  }
`;

export const PlanetDesc = styled.p`
  margin-bottom: ${32 / 16}rem;
  font-size: ${11 / 16}rem;
  line-height: ${22 / 16}rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-bottom: ${24 / 16}rem;
    font-size: ${14 / 16}rem;
    line-height: ${25 / 16}rem;
  }
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
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: ${14 / 16}rem;
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

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    gap: ${11 / 16}rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    gap: ${30 / 16}rem;
    justify-content: space-between;
  }
`;

export const Fact = styled.div`
  padding: ${9 / 16}rem ${24 / 16}rem ${11 / 16}rem ${24 / 16}rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.colors.white}20;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    padding: 1rem 1rem ${19 / 16}rem;
    flex-direction: column;
    align-items: flex-start;
    gap: ${11 / 16}rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: ${255 / 16}rem;
    height: ${128 / 16}rem;
    padding: ${20 / 16}rem ${23 / 16}rem;
    justify-content: flex-start;
    gap: ${4 / 16}rem;
  }
`;

export const FactName = styled.p`
  padding-top: ${2 / 16}rem;
  font-weight: 700;
  font-size: ${8 / 16}rem;
  line-height: 1rem;
  letter-spacing: ${0.73 / 16}rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white}50;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: ${11 / 16}rem;
    line-height: ${25 / 16}rem;
  }
`;

export const FactValue = styled.p`
  font-family: ${({ theme }) => theme.typography.antonio};
  font-size: ${20 / 16}rem;
  line-height: ${26 / 16}rem;
  letter-spacing: -${0.75 / 16}rem;
  text-transform: uppercase;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${24 / 16}rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${40 / 16}rem;
    line-height: ${52 / 16}rem;
  }
`;
