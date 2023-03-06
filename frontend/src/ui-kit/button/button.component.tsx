import * as S from './button.styles';
import { ButtonProps } from '@/ui-kit/button/button.interface';

export const Button = ({
  title,
  disabled,
  variant = 'normal',
  className,
  buttonColor,
  ...rest
}: ButtonProps) => {
  return (
    <S.StyledButton
      className={className}
      disabled={disabled}
      variant={variant}
      buttonColor={buttonColor}
      {...rest}
    >
      {title}
    </S.StyledButton>
  );
};
