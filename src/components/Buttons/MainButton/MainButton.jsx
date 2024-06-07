import { Button } from './MainButton.styled';

const MainButton = ({ text, type, width }) => {
  return <Button type={type} width={width}>{text}</Button>
};

export default MainButton;
