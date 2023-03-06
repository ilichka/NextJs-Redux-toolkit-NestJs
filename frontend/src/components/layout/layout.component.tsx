import * as S from './layout.styles';

export const LayoutComponent = ({
  children,
}: {
  children: React.ReactChild;
}) => {
  return (
    <S.LayoutWrapper>
      <S.Layout>{children}</S.Layout>
    </S.LayoutWrapper>
  );
};
