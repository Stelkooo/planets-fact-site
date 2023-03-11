import styled from 'styled-components';

interface IProps {
  $mobileHeight: number;
  $tabletHeight: number;
  $desktopHeight: number;
}

export const PlanetImgContainer = styled.div`
  height: ${304 / 16}rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -1;
`;

export const Img = styled.img<IProps>`
  height: ${(props) => `${props.$mobileHeight / 16}rem`};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: ${(props) => `${props.$tabletHeight / 16}rem`};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    height: ${(props) => `${props.$desktopHeight / 16}rem`};
  }
`;

export const Geology = styled.img`
  position: absolute;
  bottom: 0;
  height: ${130 / 16}rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: ${165 / 16}rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    height: ${199 / 16}rem;
  }
`;
