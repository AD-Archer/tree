import React from 'react';
import { 
  TouchableOpacity, 
  StyleSheet, 
  ActivityIndicator, 
  Platform, 
  TouchableOpacityProps,
  View,
  ViewStyle
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { Layout } from '@/constants/Layout';
import { useColorScheme } from '@/hooks/useColorScheme';
import { ThemedText } from './ThemedText';

export type ButtonVariant = 
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'ghost';

export type ButtonSize = 
  | 'sm'
  | 'md'
  | 'lg';

export type ButtonProps = TouchableOpacityProps & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  label: string;
  leftIcon?: string;
  rightIcon?: string;
  isLoading?: boolean;
  isFullWidth?: boolean;
  isDisabled?: boolean;
};

export function Button({
  variant = 'primary',
  size = 'md',
  label,
  leftIcon,
  rightIcon,
  isLoading = false,
  isFullWidth = false,
  isDisabled = false,
  style,
  ...rest
}: ButtonProps) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  
  // Determine colors based on variant and theme
  let backgroundColor, textColor, borderColor;
  
  switch (variant) {
    case 'primary':
      backgroundColor = Colors[colorScheme].buttonPrimary;
      textColor = Colors[colorScheme].buttonPrimaryText;
      borderColor = 'transparent';
      break;
    case 'secondary':
      backgroundColor = Colors[colorScheme].buttonSecondary;
      textColor = Colors[colorScheme].buttonSecondaryText;
      borderColor = 'transparent';
      break;
    case 'outline':
      backgroundColor = 'transparent';
      textColor = Colors[colorScheme].tint;
      borderColor = Colors[colorScheme].tint;
      break;
    case 'ghost':
      backgroundColor = 'transparent';
      textColor = Colors[colorScheme].text;
      borderColor = 'transparent';
      break;
  }
  
  // Apply disabled styles
  if (isDisabled) {
    backgroundColor = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)';
    textColor = isDark ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.4)';
    borderColor = 'transparent';
  }
  
  // Determine size styles
  const sizeStyles = styles[size];
  
  // Determine icon size based on button size
  const iconSize = size === 'lg' ? 20 : size === 'md' ? 16 : 14;
  
  // Determine full width style
  const fullWidthStyle: ViewStyle = isFullWidth ? { width: '100%' } : {};
  
  return (
    <TouchableOpacity
      style={[
        styles.button,
        sizeStyles,
        { backgroundColor, borderColor },
        variant === 'outline' && styles.outlineButton,
        fullWidthStyle,
        style,
      ]}
      disabled={isDisabled || isLoading}
      activeOpacity={0.7}
      {...rest}
    >
      <View style={styles.contentContainer}>
        {isLoading ? (
          <ActivityIndicator 
            size="small" 
            color={textColor} 
            style={styles.loadingIndicator} 
          />
        ) : (
          <>
            {leftIcon && (
              <FontAwesome 
                name={leftIcon as any} 
                size={iconSize} 
                color={textColor} 
                style={styles.leftIcon} 
              />
            )}
            <ThemedText 
              variant="button" 
              style={[styles.label, { color: textColor }]}
            >
              {label}
            </ThemedText>
            {rightIcon && (
              <FontAwesome 
                name={rightIcon as any} 
                size={iconSize} 
                color={textColor} 
                style={styles.rightIcon} 
              />
            )}
          </>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: Layout.borderRadius.md,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      web: {
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        ':hover': {
          opacity: 0.9,
        },
        ':active': {
          opacity: 0.8,
        },
      },
      default: {},
    }),
  },
  outlineButton: {
    borderWidth: 1,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    textAlign: 'center',
  },
  leftIcon: {
    marginRight: Layout.spacing.sm,
  },
  rightIcon: {
    marginLeft: Layout.spacing.sm,
  },
  loadingIndicator: {
    marginHorizontal: Layout.spacing.sm,
  },
  sm: {
    paddingVertical: Layout.spacing.xs,
    paddingHorizontal: Layout.spacing.md,
    minHeight: 32,
  },
  md: {
    paddingVertical: Layout.spacing.sm,
    paddingHorizontal: Layout.spacing.lg,
    minHeight: 40,
  },
  lg: {
    paddingVertical: Layout.spacing.md,
    paddingHorizontal: Layout.spacing.xl,
    minHeight: 48,
  },
}); 