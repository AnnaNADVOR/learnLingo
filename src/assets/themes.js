const commonTheme = {
  primaryBlack: '#121417',
  secondaryBlack: '#8a8a89',
  secondaryBackground: '#f8f8f8',
  mainTransparentBlack: 'rgba(18, 20, 23, 0.7)',
  secondaryTransparentBlack: 'rgba(18, 20, 23, 0.8)',
  primaryWhite: '#fff',
  overlayBack: 'rgba(17, 18, 19, 0.4)',
  inputFormBorder: '1px solid rgba(18, 20, 23, 0.1)',
  buttonShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
  hoverTransition: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
  borderRadius: '30px',
};

export const blueTheme = {
  accent: '#9fb7ce',
  backgroundAccent: '#bfd6ea',
  ...commonTheme,
};

export const redTheme = {
  accent: '#e0a39a',
  backgroundAccent: '#f2c0bd',
  ...commonTheme,
};

export const orangeTheme = {
  accent: '#f0aa8d',
  backgroundAccent: '#f4c8ba',
  ...commonTheme,
};

export const greenTheme = {
  accent: '#9fbaae',
  backgroundAccent: '#cbded3',
  ...commonTheme,
};

export const yellowTheme = {
  accent: '#f4c550',
  backgroundAccent: '#fbe9ba',
  ...commonTheme,
};
