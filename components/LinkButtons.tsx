import React from 'react';
import { StyleSheet, TouchableOpacity, Linking, Image, View } from 'react-native';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';
import { FontAwesome } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { IMAGES } from '@/constants/Images';

type LinkButtonProps = {
  icon: string;
  label: string;
  url: string;
  imageName?: string;
  name?: string;
};

const LinkButton = ({ icon, label, url, imageName, name }: LinkButtonProps) => {
  const colorScheme = useColorScheme();
  const iconColor = Colors[colorScheme ?? 'light'].text;
  const image = imageName ? IMAGES.find(img => img.name === imageName) : null;
  
  const handlePress = () => {
    Linking.openURL(url);
  };
  
  if (imageName && image) {
    return (
      <TouchableOpacity 
        style={[styles.button, styles.buttonWithImage]} 
        onPress={handlePress}
        accessibilityLabel={label}
      >
        <View style={styles.imageContainer}>
          <Image source={{ uri: image.url }} style={styles.featuredImage} resizeMode="cover" />
        </View>
        <ThemedView style={styles.buttonContent}>
          <ThemedText style={styles.buttonText}>{label}</ThemedText>
          <FontAwesome name="chevron-right" size={16} color={iconColor} style={styles.arrowIcon} />
        </ThemedView>
      </TouchableOpacity>
    );
  }
  
  return (
    <TouchableOpacity 
      style={styles.button} 
      onPress={handlePress}
      accessibilityLabel={label}
    >
      <ThemedView style={styles.buttonContent}>
        <FontAwesome name={icon as any} size={20} color={iconColor} />
        <ThemedText style={styles.buttonText}>{label}</ThemedText>
        <FontAwesome name="chevron-right" size={16} color={iconColor} style={styles.arrowIcon} />
      </ThemedView>
    </TouchableOpacity>
  );
};

const LinkButtons = () => {
  const links = [
    { 
      icon: 'users', 
      label: 'Philly Social - my most recent project', 
      url: 'https://phillysocial.adarcher.app',
      name: 'phillysocial',
      imageName: 'phillysocial.png'
    },
    { 
      icon: 'globe', 
      label: 'Portfolio Site', 
      url: 'https://www.antonioarcher.com',
      name: 'portfolio'
    },
    { 
      icon: 'github', 
      label: 'GitHub Profile', 
      url: 'https://www.github.com/ad-archer',
      name: 'github'
    },
    { 
      icon: 'linkedin', 
      label: 'LinkedIn Profile', 
      url: 'https://www.linkedin.com/in/antonio-archer/',
      name: 'linkedin'
    },
    { 
      icon: 'file-alt', 
      label: 'View Resume', 
      url: 'https://www.antonioarcher.com/resume.pdf',
      name: 'resume'
    },
    { 
      icon: 'code', 
      label: 'View My Projects', 
      url: 'https://www.antonioarcher.com/projects',
      name: 'projects'
    }
  ];

  return (
    <ThemedView style={styles.container}>
      {links.map((link, index) => (
        <LinkButton 
          key={index} 
          icon={link.icon} 
          label={link.label} 
          url={link.url} 
          imageName={link.imageName}
          name={link.name}
        />
      ))}
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 12,
  },
  button: {
    borderRadius: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    overflow: 'hidden',
  },
  buttonWithImage: {
    flexDirection: 'column',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    position: 'relative',
  },
  buttonText: {
    marginLeft: 12,
    fontWeight: '500',
    flex: 1,
  },
  imageContainer: {
    width: '100%',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    overflow: 'hidden',
  },
  featuredImage: {
    width: '100%',
    height: 150,
  },
  arrowIcon: {
    marginLeft: 8,
  }
});

export default LinkButtons; 