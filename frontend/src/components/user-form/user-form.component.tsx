import { SubmitHandler, useForm } from 'react-hook-form';
import * as S from './user-form.styles';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button } from '@/ui-kit/button/button.component';
import { COLORS } from '@/ui-kit/theme';
import { User } from '@/slices/users-slice';
import { UserFormProps } from '@/components/user-form/user-form.interface';

export const UserFormComponent = ({ user, onSubmitCb }: UserFormProps) => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: user,
  });

  const onSubmit: SubmitHandler<User> = (data) => {
    onSubmitCb && onSubmitCb(data);
    router.push('/');
  };

  return (
    <S.StyledForm onSubmit={handleSubmit(onSubmit)}>
      <S.StyledLabel>
        Name:
        <S.StyledInput
          type="text"
          {...register('name', {
            required: true,
            maxLength: 50,
          })}
          isFormError={Boolean(errors.name)}
        />
      </S.StyledLabel>
      {errors.name && errors.name.type === 'required' && (
        <S.InputError>Name is required</S.InputError>
      )}
      {errors.name && errors.name.type === 'maxLength' && (
        <S.InputError>Name should not exceed 50 characters</S.InputError>
      )}
      <S.StyledLabel>
        Username:
        <S.StyledInput
          type="text"
          {...register('username', {
            required: true,
            maxLength: 50,
            pattern: /^[a-zA-Z0-9]+$/,
          })}
          isFormError={Boolean(errors.username)}
        />
      </S.StyledLabel>
      {errors.username && errors.username.type === 'required' && (
        <S.InputError>Username is required</S.InputError>
      )}
      {errors.username && errors.username.type === 'maxLength' && (
        <S.InputError>Username should not exceed 50 characters</S.InputError>
      )}
      {errors.username && errors.username.type === 'pattern' && (
        <S.InputError>
          Username should only contain English letters and digits
        </S.InputError>
      )}
      <S.StyledLabel>
        Email:
        <S.StyledInput
          type="email"
          {...register('email', {
            required: true,
            maxLength: 100,
          })}
          isFormError={Boolean(errors.email)}
        />
      </S.StyledLabel>
      {errors.email && errors.email.type === 'required' && (
        <S.InputError>Email is required</S.InputError>
      )}
      {errors.email && errors.email.type === 'maxLength' && (
        <S.InputError>Email should not exceed 100 characters</S.InputError>
      )}
      {errors.email && errors.email.type === 'pattern' && (
        <S.InputError>Email should be a valid email</S.InputError>
      )}
      <S.StyledLabel>
        City:
        <S.StyledInput
          type="text"
          {...register('city', {
            required: true,
            maxLength: 100,
          })}
          isFormError={Boolean(errors.city)}
        />
      </S.StyledLabel>
      {errors.city && errors.city.type === 'required' && (
        <S.InputError>City is required</S.InputError>
      )}
      {errors.city && errors.city.type === 'maxLength' && (
        <S.InputError>City should not exceed 100 characters</S.InputError>
      )}
      <S.FormNavigation>
        <Link href="/">
          <Button title="Cancel" buttonColor={COLORS.RED} variant="outlined" />
        </Link>
        <S.SubmitButton title="Submit" buttonColor={COLORS.GREEN} />
      </S.FormNavigation>
    </S.StyledForm>
  );
};
