import * as S from './top-nav.style';
import * as T from './top-nav.type';
import Link from '../link';

const TopNav = ({ linkList }: T.TopNav) => {
  return (
    <S.TopNav>
      {linkList.map(
        ({ color, destination, linkType, title, text }: T.LinkNav, cheie) => (
          <Link
            title={title}
            destination={destination}
            key={cheie}
            linkType={linkType}
            text={text}
            color={color}
          />
        )
      )}
    </S.TopNav>
  );
};

TopNav.defaultProps = {
  linkList: [],
};

export default TopNav;
