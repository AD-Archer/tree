/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

/**
 * Enhanced color system for cross-platform consistency
 * Designed to work well on mobile, desktop, native and web
 */

// Primary brand colors
const primary = {
  50: '#E6F6FF',
  100: '#BAE3FF',
  200: '#7CC4FA',
  300: '#47A3F3',
  400: '#2186EB',
  500: '#0967D2', // Primary brand color
  600: '#0552B5',
  700: '#03449E',
  800: '#01337D',
  900: '#002159',
};

// Neutral colors for text, backgrounds, etc.
const neutral = {
  50: '#F8FAFC',
  100: '#F1F5F9',
  200: '#E2E8F0',
  300: '#CBD5E1',
  400: '#94A3B8',
  500: '#64748B',
  600: '#475569',
  700: '#334155',
  800: '#1E293B',
  900: '#0F172A',
};

// Success, error, warning colors
const feedback = {
  success: '#10B981',
  error: '#EF4444',
  warning: '#F59E0B',
  info: '#3B82F6',
};

// Semantic color mapping for light and dark themes
export const Colors = {
  light: {
    // Text colors
    text: neutral[800],
    textSecondary: neutral[600],
    textTertiary: neutral[500],
    textInverse: neutral[50],
    
    // Background colors
    background: neutral[50],
    backgroundSecondary: neutral[100],
    backgroundTertiary: neutral[200],
    
    // UI element colors
    tint: primary[500],
    tintLight: primary[100],
    
    // Card and container colors
    cardBackground: '#FFFFFF',
    cardBorder: neutral[200],
    
    // Icon colors
    icon: neutral[700],
    iconSecondary: neutral[500],
    tabIconDefault: neutral[500],
    tabIconSelected: primary[500],
    
    // Button colors
    buttonPrimary: primary[500],
    buttonPrimaryText: '#FFFFFF',
    buttonSecondary: neutral[200],
    buttonSecondaryText: neutral[800],
    
    // Feedback colors
    success: feedback.success,
    error: feedback.error,
    warning: feedback.warning,
    info: feedback.info,
    
    // Dividers and borders
    divider: neutral[200],
    border: neutral[300],
    
    // Shadows (for web)
    shadowColor: neutral[900],
    shadowOpacity: 0.1,
  },
  dark: {
    // Text colors
    text: neutral[100],
    textSecondary: neutral[300],
    textTertiary: neutral[400],
    textInverse: neutral[800],
    
    // Background colors
    background: neutral[900],
    backgroundSecondary: neutral[800],
    backgroundTertiary: neutral[700],
    
    // UI element colors
    tint: primary[400],
    tintLight: primary[700],
    
    // Card and container colors
    cardBackground: neutral[800],
    cardBorder: neutral[700],
    
    // Icon colors
    icon: neutral[300],
    iconSecondary: neutral[400],
    tabIconDefault: neutral[400],
    tabIconSelected: primary[400],
    
    // Button colors
    buttonPrimary: primary[500],
    buttonPrimaryText: '#FFFFFF',
    buttonSecondary: neutral[700],
    buttonSecondaryText: neutral[100],
    
    // Feedback colors
    success: feedback.success,
    error: feedback.error,
    warning: feedback.warning,
    info: feedback.info,
    
    // Dividers and borders
    divider: neutral[700],
    border: neutral[600],
    
    // Shadows (for web)
    shadowColor: '#000000',
    shadowOpacity: 0.2,
  },
};

// Export the raw color palettes for custom use cases
export const Palette = {
  primary,
  neutral,
  feedback,
};
