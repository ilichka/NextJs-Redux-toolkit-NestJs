import styled from 'styled-components';

import { ButtonVariant } from '@/ui-kit/button/button.interface';
import { COLORS } from '@/ui-kit/theme';

export const StyledButton = styled.button<{
  variant?: ButtonVariant;
  disabled?: boolean;
  buttonColor: string;
}>`
  border: 0;
  ${({ variant, buttonColor }) => {
    const color = variant === 'outlined' ? buttonColor : COLORS.WHITE;
    const bgColor = variant === 'outlined' ? 'transparent' : buttonColor;
    const border = variant === 'outlined' ? `border: 1px solid ${color}` : '';
    return `
   color: ${color};
   background-color: ${bgColor};
   ${border};
   `;
  }};
  border-radius: 6px;
  padding: 5px 15px;
  cursor: pointer;
`;
