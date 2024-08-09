import { Button } from './MainButton.styled';

const MainButton = ({ onClick, type, text,  width, marginLeft }) => {
  return <Button type={type} onClick={onClick} width={width} marginLeft={marginLeft}>{text}</Button>
};

export default MainButton;
