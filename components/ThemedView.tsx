import { View, type ViewProps, StyleSheet, ViewStyle } from 'react-native';
import { Colors } from '@/constants/Colors';
import { Layout } from '@/constants/Layout';
import { useColorScheme } from '@/hooks/useColorScheme';

export type ViewVariant = 
  | 'default'
  | 'card'
  | 'container';

export type ThemedViewProps = ViewProps & {
  variant?: ViewVariant;
  backgroundColor?: keyof typeof Colors.light | keyof typeof Colors.dark;
  borderColor?: keyof typeof Colors.light | keyof typeof Colors.dark;
  padding?: keyof typeof Layout.spacing | number;
  margin?: keyof typeof Layout.spacing | number;
  borderRadius?: keyof typeof Layout.borderRadius | number;
  shadow?: keyof typeof Layout.shadows | 'none';
};

export function ThemedView({ 
  style, 
  variant = 'default',
  backgroundColor = variant === 'card' ? 'cardBackground' : 'background',
  borderColor,
  padding,
  margin,
  borderRadius,
  shadow,
  ...otherProps 
}: ThemedViewProps) {
  const colorScheme = useColorScheme();
  const bgColor = Colors[colorScheme ?? 'light'][backgroundColor as keyof typeof Colors.light];
  
  // Dynamically build style object based on props
  const dynamicStyles: ViewStyle = {};
  
  // Add border color if specified
  if (borderColor) {
    dynamicStyles.borderColor = Colors[colorScheme ?? 'light'][borderColor as keyof typeof Colors.light];
    dynamicStyles.borderWidth = 1;
  }
  
  // Add padding if specified
  if (padding !== undefined) {
    if (typeof padding === 'string' && padding in Layout.spacing) {
      dynamicStyles.padding = Layout.spacing[padding as keyof typeof Layout.spacing];
    } else if (typeof padding === 'number') {
      dynamicStyles.padding = padding;
    }
  }
  
  // Add margin if specified
  if (margin !== undefined) {
    if (typeof margin === 'string' && margin in Layout.spacing) {
      dynamicStyles.margin = Layout.spacing[margin as keyof typeof Layout.spacing];
    } else if (typeof margin === 'number') {
      dynamicStyles.margin = margin;
    }
  }
  
  // Add border radius if specified
  if (borderRadius !== undefined) {
    if (typeof borderRadius === 'string' && borderRadius in Layout.borderRadius) {
      dynamicStyles.borderRadius = Layout.borderRadius[borderRadius as keyof typeof Layout.borderRadius];
    } else if (typeof borderRadius === 'number') {
      dynamicStyles.borderRadius = borderRadius;
    }
  }
  
  // Add shadow if specified
  if (shadow && shadow !== 'none' && shadow in Layout.shadows) {
    Object.assign(dynamicStyles, Layout.shadows[shadow as keyof typeof Layout.shadows]);
  }

  return (
    <View 
      style={[
        { backgroundColor: bgColor },
        styles[variant],
        dynamicStyles,
        style
      ]} 
      {...otherProps} 
    />
  );
}

const styles = StyleSheet.create({
  default: {},
  card: {
    borderRadius: Layout.borderRadius.md,
    padding: Layout.spacing.md,
    ...Layout.shadows.sm,
  },
  container: {
    width: '100%',
    maxWidth: Layout.getContainerWidth(),
    padding: Layout.getResponsivePadding(),
    alignSelf: 'center',
  },
});
