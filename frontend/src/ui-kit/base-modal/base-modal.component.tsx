import ReactModal, { setAppElement } from 'react-modal';

import * as S from './base-modal.styles';
import { BaseModalProps } from '@/ui-kit/base-modal/base-modal.interface';
import { Button } from '@/ui-kit/button/button.component';

setAppElement('#__next');

export const BaseModal = ({
  buttonColor,
  buttonTitle,
  modalHeader,
  modalBody,
  modalFooter,
  isOpen,
  setIsOpen,
}: BaseModalProps) => {
  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button
        title={buttonTitle}
        buttonColor={buttonColor}
        onClick={handleOpen}
      />
      <ReactModal
        isOpen={isOpen}
        onRequestClose={handleClose}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
          content: {
            width: '40%',
            height: 'min-content',
            margin: 'auto',
            padding: 0,
          },
        }}
      >
        <S.StyledModalHeader>{modalHeader}</S.StyledModalHeader>
        <S.StyledModalBody>{modalBody}</S.StyledModalBody>
        <S.StyledModalFooter>{modalFooter}</S.StyledModalFooter>
      </ReactModal>
    </>
  );
};
