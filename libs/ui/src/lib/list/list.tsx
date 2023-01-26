import * as S from './list.style';
import * as T from './list.type';

const List = ({ list = [] }: T.Tevlisticons) => {
  return (
    <S.Sevlisticons>
      {list.map((text) => (
        <div>{text}</div>
      ))}
    </S.Sevlisticons>
  );
};

const Arrowdown = ({ children, type }: T.Tevlisticons) => {
  return <S.Arrowdown type={type}>{children}</S.Arrowdown>;
};

List.defaultProps = {
  children: '',
  list: [],
};
Arrowdown.defaultProps = {
  children: '',
  type: '',
};

export default List;
