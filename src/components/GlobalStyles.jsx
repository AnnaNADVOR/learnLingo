import { Global, css, useTheme } from '@emotion/react';

const GlobalStyles = () => {
  const theme = useTheme();

  return (
    <Global
      styles={css`
        :root {
          --primary-black: ${theme.primaryBlack};
          --secondary-black: ${theme.secondaryBlack};
          --main-transparent-black: ${theme.mainTransparentBlack};
          --secondary-transparent-black: ${theme.secondaryTransparentBlack};
          --primary-white: ${theme.primaryWhite};
          --modal-overlay: ${theme.overlayBack};
          --accent: ${theme.accent};
          --accent-background: ${theme.backgroundAccent};
          --input-form-border: ${theme.inputFormBorder};
          --hover-transition: ${theme.hoverTransition};
          --button-shadow: ${theme.buttonShadow};
          --border-radius: ${theme.borderRadius};
          --secondary-background: ${theme.secondaryBackground};
        }

        body {
          background-color: var(--primary-white);
          color: var(--primary-black);
          font-family: 'Roboto', sans-serif;
          font-weight: 400;
          font-size: 16px;
          line-height: 1.5;
          letter-spacing: -0.02em;
        }

        a {
          text-decoration: none;
          color: currentColor;
        }

        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        b,
        ul {
          margin: 0;
          padding: 0;
        }

        *,
        ::after,
        ::before {
          box-sizing: border-box;
        }

        button,
        input,
        optgroup,
        select,
        textarea {
          font-family: inherit;

          margin: 0;
        }
      `}
    />
  );
};

export default GlobalStyles;
