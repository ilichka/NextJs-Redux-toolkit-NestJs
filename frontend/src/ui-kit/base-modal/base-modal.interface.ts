import { Dispatch, ReactElement, SetStateAction } from 'react';

export interface BaseModalProps {
  buttonColor: string;
  buttonTitle: string;
  modalHeader: ReactElement;
  modalBody: ReactElement;
  modalFooter: ReactElement;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
