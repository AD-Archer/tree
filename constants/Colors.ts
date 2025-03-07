/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#2B6CB0';  // Medium blue for light mode
const tintColorDark = '#90CDF4';   // Light blue for dark mode

export const Colors = {
  light: {
    text: '#1A365D',          // Dark blue text for light mode
    background: '#EBF8FF',    // Very light blue background
    tint: tintColorLight,
    icon: '#4A5568',          // Slate gray for icons
    tabIconDefault: '#4A5568',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#E2E8F0',         // Light gray text for dark mode
    background: '#1A365D',   // Dark blue background
    tint: tintColorDark,
    icon: '#A0AEC0',        // Light gray for icons
    tabIconDefault: '#A0AEC0',
    tabIconSelected: tintColorDark,
  },
};
