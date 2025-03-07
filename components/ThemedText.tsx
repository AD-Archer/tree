import { Text, type TextProps, StyleSheet, Platform, TextStyle } from 'react-native';
import { Colors } from '@/constants/Colors';
import { Layout } from '@/constants/Layout';
import { useColorScheme } from '@/hooks/useColorScheme';

export type TextVariant = 
  | 'display' 
  | 'h1' 
  | 'h2' 
  | 'h3' 
  | 'body' 
  | 'bodyBold'
  | 'bodySmall'
  | 'caption'
  | 'button'
  | 'link';

export type ThemedTextProps = TextProps & {
  variant?: TextVariant;
  color?: keyof typeof Colors.light | keyof typeof Colors.dark;
  align?: 'auto' | 'left' | 'right' | 'center' | 'justify';
};

export function ThemedText({
  style,
  variant = 'body',
  color = 'text',
  align = 'left',
  ...rest
}: ThemedTextProps) {
  const colorScheme = useColorScheme();
  const textColor = Colors[colorScheme ?? 'light'][color as keyof typeof Colors.light];

  return (
    <Text
      style={[
        styles.base,
        styles[variant],
        { color: textColor, textAlign: align } as TextStyle,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  base: {
    fontFamily: Platform.select({
      web: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      default: undefined,
    }),
  },
  display: {
    fontSize: Layout.normalize(Layout.fontSizes.xxxl),
    fontWeight: '700',
    letterSpacing: -0.5,
    lineHeight: Layout.normalize(Layout.fontSizes.xxxl) * 1.2,
  },
  h1: {
    fontSize: Layout.normalize(Layout.fontSizes.xxl),
    fontWeight: '700',
    lineHeight: Layout.normalize(Layout.fontSizes.xxl) * 1.3,
    letterSpacing: -0.3,
  },
  h2: {
    fontSize: Layout.normalize(Layout.fontSizes.xl),
    fontWeight: '600',
    lineHeight: Layout.normalize(Layout.fontSizes.xl) * 1.3,
  },
  h3: {
    fontSize: Layout.normalize(Layout.fontSizes.lg),
    fontWeight: '600',
    lineHeight: Layout.normalize(Layout.fontSizes.lg) * 1.4,
  },
  body: {
    fontSize: Layout.normalize(Layout.fontSizes.md),
    lineHeight: Layout.normalize(Layout.fontSizes.md) * 1.5,
  },
  bodyBold: {
    fontSize: Layout.normalize(Layout.fontSizes.md),
    fontWeight: '600',
    lineHeight: Layout.normalize(Layout.fontSizes.md) * 1.5,
  },
  bodySmall: {
    fontSize: Layout.normalize(Layout.fontSizes.sm),
    lineHeight: Layout.normalize(Layout.fontSizes.sm) * 1.5,
  },
  caption: {
    fontSize: Layout.normalize(Layout.fontSizes.xs),
    lineHeight: Layout.normalize(Layout.fontSizes.xs) * 1.5,
    letterSpacing: 0.2,
  },
  button: {
    fontSize: Layout.normalize(Layout.fontSizes.md),
    fontWeight: '500',
    letterSpacing: 0.3,
  },
  link: {
    fontSize: Layout.normalize(Layout.fontSizes.md),
    lineHeight: Layout.normalize(Layout.fontSizes.md) * 1.5,
    textDecorationLine: 'underline',
  },
});
