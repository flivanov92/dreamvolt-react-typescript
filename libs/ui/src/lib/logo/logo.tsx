import * as S from './logo.style';
import * as T from './logo.type';

const Logo = ({ imagePath, size, title }: T.Logo) => {
  return <S.Logo imagePath={imagePath} size={size} title={title} />;
};

export default Logo;


