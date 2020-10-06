import { shadeHex } from '@keg-hub/re-theme/colors'
import { kegComponentsTheme as theme } from 'SVTheme/kegComponentsTheme'

const inputHeight = theme?.form?.input?.default?.height ?? 35

// Example : http://snpy.in/EuGKsu
export const tapColors = {
  default: `#5e6e82`,
  defaultDark: shadeHex('#5e6e82', -20),
  defaultLight: shadeHex('#5e6e82', 20),
  primary: '#3580e6',
  primaryDark: shadeHex('#3580e6', -20),
  primaryLight: shadeHex('#3580e6', 20),
  success: '#048851',
  successDark: shadeHex('#048851', -20),
  successLight: shadeHex('#048851', 20),
  warn: '#f69158',
  warnDark: shadeHex('#f69158', -20),
  warnLight: shadeHex('#f69158', 20),
  danger: '#e63b5a',
  dangerDark: shadeHex('#e63b5a', -20),
  dangerLight: shadeHex('#e63b5a', 20),
  link: '#307de5',
  linkDark: shadeHex('#307de5', -20),
  linkLight: shadeHex('#307de5', 20),
  buttonText: '#ffffff',
  backGround: '#edf2f9',
  sidebarBackground: '#ffffff',
  appBackground: '#edf2f9',
  strong: `0d1a29`,
  fontSize: 14,
  headingColor: 'rgba(0, 0, 0, 0.85)',
  textColor: 'rgba(0, 0, 0, 0.65)',
  textColorSecondary : 'rgba(0, 0, 0, .45)',
  textColorAlt: '#ffffff', 
  disabledColor : 'rgba(0, 0, 0, .25)',
  borderRadius: 3,
  borderColor: '#5e6e82',
  headerBackground: '#ffffff',
  shadowColor: '#000',
  inactive: `#a6b0c0`,
  accentBackground: '#f9fafe',
  // border: `#ebf3fc`,
  border: `#e1e7ef`,
  inputHeight,
}
