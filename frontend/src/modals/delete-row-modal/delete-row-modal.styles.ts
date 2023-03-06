import styled from 'styled-components';
import { Button } from '@/ui-kit/button/button.component';

export const ModalHeader = styled.div`
  font-size: 26px;
  font-weight: 700;
`;

export const ModalBody = styled.div``;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const CancelButton = styled(Button)`
  margin-right: 10px;
`;
