import styled from 'styled-components';

// svg import
import { ReactComponent as ChevronIcon } from '../../assets/icon-chevron.svg';

interface IProps {
  $planet: string;
}

interface IPropsName {
  $currentlySelected: boolean;
  $planet: string;
}

export const PlanetOptionsContainer = styled.div`
  padding: 0 ${24 / 16}rem;
  width: 100%;
  position: absolute;
  top: ${93 / 16}rem;
  left: 0;
  background-color: ${({ theme }) => theme.colors.black};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0;
    position: static;
    display: flex !important;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.colors.black}00;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: ${33 / 16}rem;
  }
`;

export const Planet = styled.div`
  padding: ${20 / 16}rem 0;
  position: relative;
  display: flex;
  align-items: center;
  gap: ${24 / 16}rem;
  cursor: pointer;

  :not(&:last-of-type) {
    border-bottom: 1px solid ${({ theme }) => `${theme.colors.white}10`};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0;
    :not(&:last-of-type) {
      border-bottom: none;
    }
  }
`;

export const PlanetColor = styled.div<IProps>`
  width: ${20 / 16}rem;
  height: ${20 / 16}rem;
  border-radius: 50%;
  background-color: ${(props) => props.$planet};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none !important;
  }
`;

export const PlanetName = styled.h4<IPropsName>`
  font-size: ${15 / 16}rem;
  line-height: ${25 / 16}rem;
  letter-spacing: ${2.6 / 16}rem;
  text-transform: uppercase;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${11 / 16}rem;

    &::after {
      ${(props) =>
        props.$currentlySelected
          ? `content: '';
      width: 100%;
      height: ${4 / 16}rem;
      background-color: ${props.$planet};
      display: block;
      position: absolute;
      top: ${49 / 16}rem;`
          : null}
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    &::after {
      ${(props) =>
        props.$currentlySelected
          ? `content: '';
      width: 100%;
      height: ${4 / 16}rem;
      background-color: ${props.$planet};
      display: block;
      position: absolute;
      bottom: ${49 / 16}rem;`
          : null}
    }
  }
`;

export const Chevron = styled(ChevronIcon)`
  margin-left: auto;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none !important;
  }
`;
