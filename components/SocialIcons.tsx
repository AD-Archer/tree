import React from 'react';
import { StyleSheet, TouchableOpacity, Linking, Platform, View } from 'react-native';
import { ThemedView } from './ThemedView';
import { ThemedText } from './ThemedText';
import { FontAwesome } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { Layout } from '@/constants/Layout';
import { useColorScheme } from '@/hooks/useColorScheme';

type SocialIconProps = {
  name: string;
  url: string;
  label: string;
  iconFamily?: 'FontAwesome' | 'FontAwesome5';
};

const SocialIcons = () => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const iconColor = Colors[colorScheme ?? 'light'].icon;

  const socialLinks: SocialIconProps[] = [
    { 
      name: 'envelope', 
      url: 'mailto:adarcher21@gmail.com', 
      label: 'Email',
      iconFamily: 'FontAwesome' 
    },
    { 
      name: 'phone', 
      url: 'tel:+12672256778', 
      label: 'Phone',
      iconFamily: 'FontAwesome' 
    },
    { 
      name: 'instagram', 
      url: 'https://www.instagram.com/antonio_darcher/', 
      label: 'Instagram',
      iconFamily: 'FontAwesome' 
    },
    { 
      name: 'twitter', 
      url: 'https://www.twitter.com/ad_archer_', 
      label: 'Twitter',
      iconFamily: 'FontAwesome' 
    },
    { 
      name: 'linkedin', 
      url: 'https://www.linkedin.com/in/antonio-archer/', 
      label: 'LinkedIn',
      iconFamily: 'FontAwesome' 
    },
    { 
      name: 'github', 
      url: 'https://www.github.com/ad-archer', 
      label: 'GitHub',
      iconFamily: 'FontAwesome' 
    },
  ];

  const handlePress = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <ThemedView variant="container" style={styles.container}>
      <ThemedText variant="h2" style={styles.sectionTitle}>Connect</ThemedText>
      
      <View style={styles.iconsContainer}>
        {socialLinks.map((social, index) => (
          <TouchableOpacity
            key={index}
            style={styles.iconButton}
            onPress={() => handlePress(social.url)}
            accessibilityLabel={social.label}
          >
            <ThemedView 
              style={styles.iconCircle} 
              backgroundColor={isDark ? 'backgroundSecondary' : 'backgroundTertiary'}
            >
              <FontAwesome name={social.name as any} size={24} color={iconColor} />
            </ThemedView>
            {Platform.OS === 'web' && (
              <ThemedText variant="caption" style={styles.iconLabel}>
                {social.label}
              </ThemedText>
            )}
          </TouchableOpacity>
        ))}
      </View>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  sectionTitle: {
    marginBottom: Layout.spacing.md,
    textAlign: Platform.OS === 'web' ? 'center' : 'left',
  },
  iconsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: Layout.spacing.lg,
    paddingVertical: Layout.spacing.md,
  },
  iconButton: {
    alignItems: 'center',
    ...Platform.select({
      web: {
        cursor: 'pointer',
        transition: 'transform 0.2s ease',
        ':hover': {
          transform: [{ scale: 1.1 }],
        },
      },
    }),
  },
  iconCircle: {
    width: 56,
    height: 56,
    borderRadius: Layout.borderRadius.round,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Platform.OS === 'web' ? Layout.spacing.xs : 0,
    ...Layout.shadows.sm,
  },
  iconLabel: {
    marginTop: Layout.spacing.xs,
  },
});

export default SocialIcons; 