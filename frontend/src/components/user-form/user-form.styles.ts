import styled from 'styled-components';
import { Button } from '@/ui-kit/button/button.component';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 400px;
`;

export const StyledLabel = styled.label`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const InputError = styled.p`
  margin: 0 0 15px 0;
  color: #dc3a43;
`;

interface A extends React.ComponentPropsWithoutRef<'input'> {
  isFormError: boolean;
}

export const StyledInput = styled.input<A>`
  width: 100%;
  margin-left: 20px;
  ${({ isFormError }) => isFormError && 'border-color: #DC3A43'};
  border-radius: 6px;
`;

export const FormNavigation = styled.div`
  display: flex;
  justify-content: end;
`;

export const SubmitButton = styled(Button)`
  margin-left: 10px;
`;
