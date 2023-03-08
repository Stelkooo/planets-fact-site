import styled from 'styled-components';

export const InfoOptionsContainer = styled.div`
  padding: ${20 / 16}rem ${24 / 16}rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white}20;
`;

export const InfoLabel = styled.label`
  position: relative;
  font-weight: 700;
  font-size: ${9 / 16}rem;
  line-height: ${10 / 16}rem;
  letter-spacing: ${1.9 / 16}rem;
  text-transform: uppercase;
`;

export const InfoInput = styled.input`
  all: unset;

  &:checked + span::after {
    content: '';
    width: 100%;
    height: ${4 / 16}rem;
    background-color: ${({ theme }) => theme.colors.teal};
    display: block;
    position: absolute;
    top: ${27 / 16}rem;
  }

  :not(&:checked) + span {
    color: ${({ theme }) => theme.colors.white}50;
  }
`;
