import * as S from './preloader.styles';

export const Preloader = () => {
  return (
    <S.Loader>
      <S.LoaderLight />
      <S.LoaderTrack />
    </S.Loader>
  );
};
