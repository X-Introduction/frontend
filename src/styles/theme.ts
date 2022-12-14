import { css, DefaultTheme } from 'styled-components';

const colors = {
  behance_blue: '#2456f7',
};

const fonts = {
  behance_acumin_pro_black_80: css`
    font-family: AcuminProBlack;
    font-size: 5rem;
    font-weight: 900;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
  `,
};

const theme: DefaultTheme = {
  colors,
  fonts,
};
export default theme;
