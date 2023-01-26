import * as S from './image.style';
import * as T from './image.type';

export const BackgroundImage = ({
  type,
  myPath,
  location,
  dataTestid,
}: T.MyImage) => {
  switch (type) {
    case 'button':
      return (
        <S.Button myPath={myPath} location={location} dataTestid="image" />
      );

    case 'background':
      return <S.BackgroundImage myPath={myPath} location={location} />;

    case 'phone':
    default:
      return <S.PhoneImage myPath={myPath} location={location} />;

    case 'purplebackground':
      return <S.PurpleBackground myPath={myPath} location={location} />;

    case 'evbutton':
      return <S.EvButton myPath={myPath} location={location} />;

    case 'evphoneimage':
      return <S.EvPhoneImage myPath={myPath} location={location} />;
  }
};

BackgroundImage.defaultProps = {
  mypath: '',
  type: 'type of the image',
};

export default BackgroundImage;
