import { Button } from './MainButton.styled';

const MainButton = ({ text, type }) => {
  return <Button type={type}>{text}</Button>
};

export default MainButton;
