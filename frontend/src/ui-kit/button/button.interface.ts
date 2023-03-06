export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  title: string;
  disabled?: boolean;
  variant?: ButtonVariant;
  buttonColor: string;
}

export type ButtonVariant = 'normal' | 'outlined';
