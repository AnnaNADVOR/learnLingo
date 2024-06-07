import sprite from '../../assets/icons/sprite.svg';
import {
  ButtonList,
  Button,
  ButtonItem,
  MenuIcon,
  UserIcon,
} from './MobileMenu.styled';

const MobileMenu = ({ showMobileAuth, showMobileNav }) => {
  return (
    <ButtonList>
      <ButtonItem>
        <Button onClick={showMobileAuth}>
          <UserIcon>
            <use href={`${sprite}#user`}></use>
          </UserIcon>
        </Button>
      </ButtonItem>
      <ButtonItem>
        <Button onClick={showMobileNav}>
          <MenuIcon>
            <use href={`${sprite}#burger-menu-navigation`}></use>
          </MenuIcon>
        </Button>
      </ButtonItem>
    </ButtonList>
  );
};

export default MobileMenu;
