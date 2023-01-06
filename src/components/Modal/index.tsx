import React, { ReactNode } from 'react';
import Button from 'components/Button';
import { Close } from 'styled-icons/material-outlined';
import Typography from 'components/Typography';

import { SizeType } from 'types/sizes';

import * as S from './styles';

export type ModalProps = {
  size?: SizeType;
  open?: boolean;
  cancel?: string;
  approve?: string;
  title?: string;
  children?: ReactNode;
  onClose?(): void;
  onApprove?(): void;
  onCancel?(): void;
};

const Modal = ({
  children,
  open,
  size = 'medium',
  cancel,
  approve,
  title,
  onClose,
  onApprove,
  onCancel
}: ModalProps) => {
  const handleClose = () => !!onClose && onClose();
  const handleCancel = () => !!onCancel && onCancel();
  const handleApprove = () => !!onApprove && onApprove();

  return (
    <S.Wrapper open={open}>
      <S.Background onClick={handleClose} />
      <S.Content size={size}>
        {title && (
          <S.Title>
            <Typography variant="subtitle" color="gray-dark" align="start">
              {title}
            </Typography>
          </S.Title>
        )}
        <S.IconWrapper onClick={handleClose}>
          <Close color="gray" size={16} />
        </S.IconWrapper>
        {children}
        <S.ButtonWrapper>
          {!!cancel && (
            <Button bg="transparent" color="gray" onClick={handleCancel}>
              {cancel}
            </Button>
          )}
          {!!approve && <Button onClick={handleApprove}>{approve}</Button>}
        </S.ButtonWrapper>
      </S.Content>
    </S.Wrapper>
  );
};

export default Modal;
