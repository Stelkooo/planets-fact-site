import styled from 'styled-components';

import { ReactComponent as Hamburger } from '../../assets/icon-hamburger.svg';

interface IProps {
  $toggled: boolean;
}

export const HeaderContainer = styled.header`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    &:last-child {
      display: none;
    }
  }
`;

export const TitleAndNavigation = styled.div`
  padding: 1rem ${24 / 16}rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white}20;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 2rem ${52 / 16}rem ${27 / 16}rem;
    flex-direction: column;
    justify-content: center;
    gap: ${39 / 16}rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: ${22 / 16}rem 2rem ${27 / 16}rem;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const SiteName = styled.h3`
  font-family: ${({ theme }) => theme.typography.antonio};
  font-size: ${28 / 16}rem;
  text-transform: uppercase;
  letter-spacing: -${1.05 / 16}rem;
`;

export const PlanetMenu = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: auto;
  }
`;

export const HamburgerIcon = styled(Hamburger)<IProps>`
  & g {
    fill: ${(props) =>
      props.$toggled
        ? `${props.theme.colors.white}25`
        : props.theme.colors.white};
  }

  & + div {
    display: ${(props) => (props.$toggled ? 'block' : 'none')};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;
