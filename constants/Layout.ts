import { Dimensions, Platform, PixelRatio } from 'react-native';

const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get('window');

// Determine if we're on a tablet/desktop based on width
const IS_TABLET = WINDOW_WIDTH >= 768;
const IS_DESKTOP = WINDOW_WIDTH >= 1024;

// Base sizing units
const BASE_UNIT = 4;
const BASE_SPACING = BASE_UNIT * 2; // 8px

// Responsive spacing scale
const spacing = {
  xs: BASE_SPACING / 2, // 4px
  sm: BASE_SPACING, // 8px
  md: BASE_SPACING * 2, // 16px
  lg: BASE_SPACING * 3, // 24px
  xl: BASE_SPACING * 4, // 32px
  xxl: BASE_SPACING * 6, // 48px
};

// Responsive font sizes
const baseFontSize = IS_TABLET ? 16 : 14;

const fontSizes = {
  xs: baseFontSize * 0.75, // 10.5px / 12px
  sm: baseFontSize * 0.875, // 12.25px / 14px
  md: baseFontSize, // 14px / 16px
  lg: baseFontSize * 1.125, // 15.75px / 18px
  xl: baseFontSize * 1.25, // 17.5px / 20px
  xxl: baseFontSize * 1.5, // 21px / 24px
  xxxl: baseFontSize * 2, // 28px / 32px
};

// Font weights
const fontWeights = {
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
};

// Border radius
const borderRadius = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  round: 9999,
};

// Container widths for responsive layouts
const containerWidth = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

// Shadows for elevation
const shadows = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
};

// Helper function to normalize font sizes across different screen sizes
const normalize = (size: number): number => {
  if (Platform.OS === 'web') return size;
  
  const scale = WINDOW_WIDTH / 375; // Based on iPhone 8 width
  const newSize = size * scale;
  
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
  
  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
};

// Helper function to get responsive padding based on screen size
const getResponsivePadding = (): number => {
  if (IS_DESKTOP) return spacing.xl;
  if (IS_TABLET) return spacing.lg;
  return spacing.md;
};

// Helper function to get container width based on screen size
const getContainerWidth = (): number | string => {
  if (IS_DESKTOP) return containerWidth.lg;
  if (IS_TABLET) return containerWidth.md;
  return '100%';
};

export const Layout = {
  window: {
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT,
  },
  isSmallDevice: WINDOW_WIDTH < 375,
  isTablet: IS_TABLET,
  isDesktop: IS_DESKTOP,
  spacing,
  fontSizes,
  fontWeights,
  borderRadius,
  containerWidth,
  shadows,
  normalize,
  getResponsivePadding,
  getContainerWidth,
}; 