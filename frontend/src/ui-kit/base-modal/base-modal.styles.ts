import styled from 'styled-components';
import { COLORS } from '@/ui-kit/theme';

export const StyledModalHeader = styled.div`
  padding: 20px;
  border-bottom: 1px solid ${COLORS.GREY};
`;

export const StyledModalBody = styled(StyledModalHeader)``;

export const StyledModalFooter = styled(StyledModalHeader)`
  display: flex;
  justify-content: flex-end;
  border: 0;
`;
