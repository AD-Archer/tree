import React from 'react';
import { StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { ThemedView } from './ThemedView';
import { FontAwesome } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

type SocialIconProps = {
  name: string;
  url: string;
  iconFamily?: 'FontAwesome' | 'FontAwesome5';
};

const SocialIcons = () => {
  const colorScheme = useColorScheme();
  const iconColor = Colors[colorScheme ?? 'light'].text;

  const socialLinks: SocialIconProps[] = [
    { name: 'envelope', url: 'mailto:adarcher21@gmail.com', iconFamily: 'FontAwesome' },
    { name: 'phone', url: 'tel:+12672256778', iconFamily: 'FontAwesome' },
    { name: 'instagram', url: 'https://www.instagram.com/antonio_darcher/', iconFamily: 'FontAwesome' },
    { name: 'twitter', url: 'https://www.twitter.com/ad_archer_', iconFamily: 'FontAwesome' },
  ];

  const handlePress = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <ThemedView style={styles.container}>
      {socialLinks.map((social, index) => (
        <TouchableOpacity
          key={index}
          style={styles.iconButton}
          onPress={() => handlePress(social.url)}
          accessibilityLabel={social.name}
        >
          <FontAwesome name={social.name as any} size={24} color={iconColor} />
        </TouchableOpacity>
      ))}
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 24,
    paddingVertical: 16,
  },
  iconButton: {
    padding: 8,
  },
});

export default SocialIcons; 