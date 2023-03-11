import styled from 'styled-components';

interface IProps {
  $toggled: boolean;
}

interface IPropsColor {
  $planetColour: string;
}

export const InfoOptionsContainer = styled.div<IProps>`
  visibility: ${(props) => (props.$toggled ? 'hidden' : 'visible')};
  padding: ${20 / 16}rem ${24 / 16}rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white}20;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: 1rem;
    border-bottom: 0;
  }
`;

export const InfoLabel = styled.label<IPropsColor & IProps>`
  position: relative;
  font-weight: 700;
  font-size: ${9 / 16}rem;
  line-height: ${10 / 16}rem;
  letter-spacing: ${1.9 / 16}rem;
  text-transform: uppercase;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: ${281 / 16}rem;
    height: ${40 / 16}rem;
    padding: ${8 / 16}rem ${20 / 16}rem;
    border: 1px solid ${({ theme }) => theme.colors.white}20;
    display: flex;
    align-items: center;

    &:has(input:checked) {
      background-color: ${(props) => props.$planetColour};
    }
  }
`;

export const InfoInput = styled.input<IPropsColor>`
  all: unset;

  @media screen and (max-width: 767px) {
    &:checked + span::after {
      content: '';
      width: 100%;
      height: ${4 / 16}rem;
      background-color: ${(props) => props.$planetColour};
      display: block;
      position: absolute;
      top: ${27 / 16}rem;
    }

    :not(&:checked) + span {
      color: ${({ theme }) => theme.colors.white}50;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    & + span::before {
      margin-right: ${14 / 16}rem;
      counter-increment: info;
      content: '0' counter(info);
      color: ${({ theme }) => theme.colors.white}50;
    }
  }
`;
