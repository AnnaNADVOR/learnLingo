import { useTheme } from '@emotion/react';
import { Global, css } from '@emotion/react';

const GlobalStyles = () => {
  const theme = useTheme();
  return (
    <Global
      styles={css`
        body {
          color: ${theme.primaryBlack};
          font-family: 'Roboto', sans-serif;
          font-weight: 400;
          font-size: 16px;
          line-height: 1.5;
        }
      `}
    />
  );
};

export default GlobalStyles;
