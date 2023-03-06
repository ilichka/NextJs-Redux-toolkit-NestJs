import * as S from './page-body.styles';
import { PageBodyProps } from './page-body.interface';

export const PageBody = ({ headerComponent, bodyComponent }: PageBodyProps) => {
  return (
    <S.PageBodyWrapper>
      <S.Header>{headerComponent}</S.Header>
      <S.Body>{bodyComponent}</S.Body>
    </S.PageBodyWrapper>
  );
};
