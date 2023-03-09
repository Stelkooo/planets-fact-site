import styled from 'styled-components';

// svg import
import { ReactComponent as ChevronIcon } from '../../assets/icon-chevron.svg';

interface IProps {
  $planet: string;
}

export const PlanetOptionsContainer = styled.div`
  padding: 0 ${24 / 16}rem;
  width: 100%;
  position: absolute;
  top: ${93 / 16}rem;
  left: 0;
  background-color: ${({ theme }) => theme.colors.black};
  /* @media screen and (min-width: 768px) {
    display: block !important;
  } */
`;

export const Planet = styled.div`
  padding: ${20 / 16}rem 0;
  display: flex;
  align-items: center;
  gap: ${24 / 16}rem;

  :not(&:last-of-type) {
    border-bottom: 1px solid ${({ theme }) => `${theme.colors.white}10`};
  }
`;

export const PlanetColor = styled.div<IProps>`
  width: ${20 / 16}rem;
  height: ${20 / 16}rem;
  border-radius: 50%;
  background-color: ${(props) => props.$planet};
`;

export const PlanetName = styled.h4`
  font-size: ${15 / 16}rem;
  line-height: ${25 / 16}rem;
  letter-spacing: ${2.6 / 16}rem;
  text-transform: uppercase;
`;

export const Chevron = styled(ChevronIcon)`
  margin-left: auto;
`;
