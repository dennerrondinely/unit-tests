import styled, { css, DefaultTheme, keyframes } from 'styled-components';
import media from 'styled-media-query';
import { ModalProps } from '.';

type ContainerProps = Pick<ModalProps, 'size' | 'open'>;
type ContentProps = Pick<ModalProps, 'size'>;

const slideUp = keyframes`
  {
    0% {
        transform: translateY(100%);
    }
    100% {
        transform: translateY(0px);
    }
  }
`;

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    min-height: calc(${theme.spacings.xxlarge} * 4);
    width: ${theme.sizes.small};
  `,
  medium: (theme: DefaultTheme) => css`
    min-height: calc(${theme.spacings.xxlarge} * 5);
    width: ${theme.sizes.medium};
  `,
  large: (theme: DefaultTheme) => css`
    min-height: calc(${theme.spacings.xxlarge} * 7);
    width: ${theme.sizes.large};
  `
};

export const Wrapper = styled.div<ContainerProps>`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;

  ${({ theme, open }) => css`
    display: ${open ? 'flex' : 'none'};
    z-index: ${theme.layers.modal};
  `}
`;

export const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0.8;
  ${({ theme }) => css`
    background-color: ${theme.colors['gray-dark']};
  `}
`;

export const Title = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.small};
  `}
`;

export const Content = styled.div<ContentProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  z-index: 2;
  ${({ theme, size = 'medium' }) => css`
    font-weight: ${theme.font.normal};
    color: ${theme.colors['gray-dark']};
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.medium} ${theme.spacings.medium}
      ${theme.spacings.small};
    font-size: ${theme.font.sizes.small};
    line-height: 1.8rem;
    width: 100%;
    height: 100%;
    animation: ${slideUp} 0.3s ease-in-out;

    ${media.greaterThan('large')`
      animation: none;
      height: auto;
      border-radius: ${theme.border.radius.medium};
      ${wrapperModifiers[size](theme)};
    `}
  `}
`;

export const ButtonWrapper = styled.div`
  display: inline-flex;
  justify-content: space-between;
  margin: auto 0 0;
  gap: ${({ theme }) => theme.spacings.small};

  ${media.greaterThan('large')`
    justify-content: flex-end;
  `}
`;

export const IconWrapper = styled.button`
  display: inline;
  position: absolute;
  border: none;
  cursor: pointer;
  ${({ theme }) => css`
    background-color: ${theme.colors.transparent};
    top: ${theme.spacings.small};
    right: ${theme.spacings.small};
  `}
`;
