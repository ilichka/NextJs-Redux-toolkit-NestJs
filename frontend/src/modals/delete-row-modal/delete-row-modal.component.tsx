import { useState } from 'react';

import { BaseModal } from '@/ui-kit/base-modal/base-modal.component';
import * as S from './delete-row-modal.styles';
import { COLORS } from '@/ui-kit/theme';
import { Button } from '@/ui-kit/button/button.component';
import { DeleteRowModalProps } from '@/modals/delete-row-modal/delete-row-modal.interface';

export const DeleteRowModal = ({
  user,
  buttonColor,
  buttonTitle,
  actionCb,
}: DeleteRowModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleDelete = () => {
    actionCb();
    setIsOpen(false);
  };

  return (
    <BaseModal
      buttonColor={buttonColor}
      buttonTitle={buttonTitle}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      modalHeader={<S.ModalHeader>Delete</S.ModalHeader>}
      modalBody={<S.ModalBody>Do you want to delete user: {user}</S.ModalBody>}
      modalFooter={
        <S.ModalFooter>
          <S.CancelButton
            title="Cancel"
            buttonColor={COLORS.GREY}
            onClick={handleClose}
          />
          <Button
            title="Delete"
            buttonColor={COLORS.RED}
            onClick={handleDelete}
          />
        </S.ModalFooter>
      }
    />
  );
};
