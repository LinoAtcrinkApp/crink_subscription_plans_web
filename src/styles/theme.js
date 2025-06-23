/**
 * Theme configuration file
 * Contains color definitions and other theme variables to be used across the application
 */

const typography = {
    h1Style: {
      fontFamily: 'Gascogne',
      fontSize: '32px',
    },
    pStyle: {
      fontSize: '18px',
      color: '#DDDDDD',
    }
}

const theme = {
  // Primary colors
  primary: {
    main: '#007BFF',
    light: '#4DA3FF',
    dark: '#0056B3',
    contrastText: '#FFFFFF',
  },
  
  // Secondary colors
  secondary: {
    main: '#6C757D',
    light: '#A1A9B0',
    dark: '#495057',
    contrastText: '#FFFFFF',
  },
  
  // Accent colors for highlighting and special elements
  accent: {
    main: '#FF4081',
    light: '#FF79B0',
    dark: '#C60055',
    contrastText: '#FFFFFF',
  },
  
  // Text colors
  text: {
    primary: '#212529',
    secondary: '#6C757D',
    disabled: '#ADB5BD',
    hint: '#6C757D',
    labelPrimary: '#FFFFFF',
    labelLightGrey: '#DDDDDD',
    labelBlack: '#000000',
  },
  
  // Background colors
  background: {
    default: '#FFFFFF',
    paper: '#F8F9FA',
    light: '#E9ECEF',
    dark: '#343A40',
  },

  gradient : {
    backgroundPurple: 'linear-gradient(to right, #6C48FC, #492BC3)',
  },
  
  // Status colors
  status: {
    success: {
      main: '#28A745',
      light: '#48C664',
      dark: '#1E7E34',
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#FFC107',
      light: '#FFCD38',
      dark: '#C79100',
      contrastText: '#212529',
    },
    error: {
      main: '#DC3545',
      light: '#E45C6A',
      dark: '#BD2130',
      contrastText: '#FFFFFF',
    },
    info: {
      main: '#17A2B8',
      light: '#4DB6C6',
      dark: '#117A8B',
      contrastText: '#FFFFFF',
    },
  },
  
  // Neutral/grayscale colors
  neutral: {
    white: '#FFFFFF',
    gray100: '#F8F9FA',
    gray200: '#E9ECEF',
    gray300: '#DEE2E6',
    gray400: '#CED4DA',
    gray500: '#ADB5BD',
    gray600: '#6C757D',
    gray700: '#495057',
    gray800: '#343A40',
    gray900: '#212529',
    black: '#000000',
  },

};

export{ theme, typography };
