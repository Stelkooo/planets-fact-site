import styled from 'styled-components';

import { ReactComponent as Hamburger } from '../../assets/icon-hamburger.svg';

interface IProps {
  $toggled: boolean;
}

export const HeaderContainer = styled.header``;

export const TitleAndNavigation = styled.div`
  padding: 1rem ${24 / 16}rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white}20;
`;

export const SiteName = styled.h3`
  font-family: ${({ theme }) => theme.typography.antonio};
  font-size: ${28 / 16}rem;
  text-transform: uppercase;
  letter-spacing: -${1.05 / 16}rem;
`;

export const PlanetMenu = styled.div``;

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
`;
