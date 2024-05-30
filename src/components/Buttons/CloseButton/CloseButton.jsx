import sprite from '../../../assets/icons/sprite.svg';
import { Button, CloseIcon } from './CloseButton.styled';

const CloseButton = ({ click }) => {
  return (
    <Button onClick={click}>
      <CloseIcon>
        <use href={`${sprite}#close`} />
      </CloseIcon>
    </Button>
  );
};

export default CloseButton;
