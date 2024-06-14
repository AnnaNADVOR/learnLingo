import useTheme from 'hooks/useTheme';
import sprite from '../../assets/icons/sprite.svg';
import { PickerButton } from './ThemePickerButton.styled';

const ThemePickerButton = () => {
  const { toggleTheme } = useTheme();

  return (
    <PickerButton onClick={toggleTheme} type="button">
      <svg width="40px" height="40px">
        <use href={`${sprite}#palette`}></use>
      </svg>
    </PickerButton>
  );
};

export default ThemePickerButton;
