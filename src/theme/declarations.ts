const colors = {
  primary: {
    900: "#000000",
    800: "#1F1F1F",
    700: "#252525",
    600: "#4D4D4D",
    500: "#666666",
    400: "#808080",
    300: "#999999",
    200: "#A8ADB6",
    100: "#B6BECE",
    0: "#F5F5F5",
  },
  secondary: {
    900: "#ECFBFD",
    800: "#D8F7FB",
    700: "#C5F4F9",
    600: "#B1F0F7",
    500: "#9EECF5",
    400: "#8BE8F3",
    300: "#77E4F1",
    200: "#64E1EF",
    100: "#3DD9EB",
    0: "#00B3D7",
  },
  pink: {
    300: "#FFF5FA",
    200: "#FCEFEF",
    100: "#ED73B1",
    0: "#C62A79",
  },
  green: {
    200: "#C5FAD4",
    100: "#96EFAE",
    0: "#50C870",
  },
  yellow: {
    300: "#FEF6EF",
    200: "#FFF5D4",
    100: "#F9D55F",
    0: "#CAA42C",
  },
  red: {
    100: "#FF5F6D",
  },

  blue: {
    500: "#F5F8FC",
    400: "#EDF4FF",
    300: "#EDFEFF",
    200: "#42C2F9",
    100: "#2FAEE3",
    0: "#2100C4",
  },
  white: "#FFFFFF",
};

/**
 * @param maxWidth max width of media query
 * @param minWidth max width of media query
 */

const customMediaQuery = (minWidth: number, maxWidth: number) =>
  `@media only screen and (min-width: ${minWidth}px)  and  (max-width: ${maxWidth}px)`;
const extraMediaQuery = (minWidth: number) =>
  `@media only screen and (min-width: ${minWidth}px)`;

interface Media {
  custom: (minWidth: number, maxWidth: number) => string;
  mobile: string;
  tablet: string;
  smallLaptop: string;
  largeLaptop: string;
  extraLargeLaptop: string;
}

const media: Media = {
  custom: customMediaQuery,
  /**
   * Mobile devices
   */
  mobile: customMediaQuery(250, 480),
  /**
   * iPads, Tablets
   */
  tablet: customMediaQuery(481, 768),
  /**
   * fairly large displays like small laptops
   */
  smallLaptop: customMediaQuery(769, 1024),
  /**
   * large laptops
   */
  largeLaptop: customMediaQuery(1025, 1200),
  /**
   * extra large laptops
   */
  extraLargeLaptop: extraMediaQuery(1201),
};

/**
 *
 * @param val  size as number(unitless)
 */

const customFontSize = (val: number) => `${val}rem`;
const customRadius = (val: number) => `${val}px`;
const customSpacing = (val: number) => `${val}px`;
const customBorder = (pixel: string, color: string) =>
  `${pixel} solid ${color}`;
const circleBorder = () => `50%`;
const doubleSpacing = (verVal: number, horVal: number) =>
  `${verVal}px ${horVal}px`;

const fontSize = {
  custom: customFontSize,
  small: customFontSize(0.7),
  normal: customFontSize(1),
  heading: customFontSize(1.5),
  hero: customFontSize(2.5),
  navlink: customFontSize(0.4),
};

const fontFamily = {
  avenir: "Avenir",
  avenirBold: "AvenirBlack",
  avenirRoman: "AvenirRoman",
};
const spacing = {
  normal: customSpacing(5),
  medium: customSpacing(10),
  large: customSpacing(25),
  button: customSpacing(48),
  double: doubleSpacing,
  custom: customSpacing,
};

const borderRadius = {
  default: "5px",
  primary: "10px",
  custom: customRadius,
  round: circleBorder,
};

const border = {
  custom: customBorder,
  default: customBorder("1px", colors.primary[900]),
};

export { colors, media, fontSize, fontFamily, borderRadius, spacing, border };
