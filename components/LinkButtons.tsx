import React from 'react';
import { StyleSheet, TouchableOpacity, Linking, Image, View, Platform } from 'react-native';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';
import { FontAwesome } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { Layout } from '@/constants/Layout';
import { useColorScheme } from '@/hooks/useColorScheme';
import { IMAGES } from '@/constants/Images';

type LinkButtonProps = {
  icon: string;
  label: string;
  url: string;
  imageName?: string;
  name?: string;
  isWide?: boolean;
};

const LinkButton = ({ icon, label, url, imageName, name, isWide = false }: LinkButtonProps) => {
  const colorScheme = useColorScheme();
  const iconColor = Colors[colorScheme ?? 'light'].icon;
  const borderColor = Colors[colorScheme ?? 'light'].border;
  const cardBackground = Colors[colorScheme ?? 'light'].cardBackground;
  const image = imageName ? IMAGES.find(img => img.name === imageName) : null;
  
  const handlePress = () => {
    Linking.openURL(url);
  };
  
  if (imageName && image) {
    return (
      <TouchableOpacity 
        style={[
          styles.button, 
          styles.buttonWithImage, 
          { backgroundColor: cardBackground, borderColor: borderColor }
        ]} 
        onPress={handlePress}
        accessibilityLabel={label}
      >
        <View style={styles.imageContainer}>
          <Image source={{ uri: image.url }} style={styles.featuredImage} resizeMode="cover" />
        </View>
        <ThemedView style={styles.buttonContent}>
          <ThemedText variant="bodyBold" style={styles.buttonText}>{label}</ThemedText>
          <FontAwesome name="chevron-right" size={16} color={iconColor} style={styles.arrowIcon} />
        </ThemedView>
      </TouchableOpacity>
    );
  }
  
  return (
    <TouchableOpacity 
      style={[
        styles.button, 
        { backgroundColor: cardBackground, borderColor: borderColor }
      ]} 
      onPress={handlePress}
      accessibilityLabel={label}
    >
      <ThemedView style={styles.buttonContent}>
        <FontAwesome name={icon === 'file-alt' ? 'file-text-o' : icon as any} size={20} color={iconColor} />
        <ThemedText variant="body" style={styles.buttonText}>{label}</ThemedText>
        <FontAwesome name="chevron-right" size={16} color={iconColor} style={styles.arrowIcon} />
      </ThemedView>
    </TouchableOpacity>
  );
};

const LinkButtons = () => {
  const isWeb = Platform.OS === 'web';
  const isTablet = Layout.isTablet;
  const isDesktop = Layout.isDesktop;
  
  const links = [
    { 
      icon: 'users', 
      label: 'Philly Social - my most recent project', 
      url: 'https://phillysocial.adarcher.app',
      name: 'phillysocial',
      imageName: 'phillysocial.png',
      isWide: true
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
    <ThemedView variant="container" style={styles.container}>
      <ThemedText variant="h2" style={styles.sectionTitle}>Links</ThemedText>
      
      {isWeb ? (
        <View style={styles.webLinksContainer}>
          {/* Featured links with images */}
          {links.filter(link => link.imageName).map((link, index) => (
            <LinkButton 
              key={`featured-${index}`}
              icon={link.icon} 
              label={link.label} 
              url={link.url} 
              imageName={link.imageName}
              name={link.name}
              isWide={link.isWide}
            />
          ))}
          
          {/* Regular links in grid */}
          <View style={styles.webLinksGrid}>
            {links.filter(link => !link.imageName).map((link, index) => (
              <View 
                key={index} 
                style={[
                  styles.webLinkItem,
                  isDesktop ? styles.webLinkItemDesktop : 
                  isTablet ? styles.webLinkItemTablet : 
                  styles.webLinkItemMobile
                ]}
              >
                <LinkButton 
                  icon={link.icon} 
                  label={link.label} 
                  url={link.url} 
                  name={link.name}
                />
              </View>
            ))}
          </View>
        </View>
      ) : (
        <View style={styles.mobileLinksContainer}>
          {/* Featured links first on mobile */}
          {links.filter(link => link.imageName).map((link, index) => (
            <LinkButton 
              key={`featured-${index}`}
              icon={link.icon} 
              label={link.label} 
              url={link.url} 
              imageName={link.imageName}
              name={link.name}
            />
          ))}
          
          {/* Regular links */}
          {links.filter(link => !link.imageName).map((link, index) => (
            <LinkButton 
              key={index} 
              icon={link.icon} 
              label={link.label} 
              url={link.url} 
              name={link.name}
            />
          ))}
        </View>
      )}
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  sectionTitle: {
    marginBottom: Layout.spacing.md,
  },
  webLinksContainer: {
    width: '100%',
  },
  webLinksGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -Layout.spacing.sm, // Negative margin to offset the padding of items
    marginTop: Layout.spacing.lg,
  },
  webLinkItem: {
    paddingHorizontal: Layout.spacing.sm,
    marginBottom: Layout.spacing.md,
  },
  webLinkItemDesktop: {
    width: '33.333%', // 3 columns on desktop
  },
  webLinkItemTablet: {
    width: '50%', // 2 columns on tablet
  },
  webLinkItemMobile: {
    width: '100%', // 1 column on mobile web
  },
  mobileLinksContainer: {
    width: '100%',
  },
  button: {
    borderRadius: Layout.borderRadius.md,
    overflow: 'hidden',
    borderWidth: 1,
    ...Layout.shadows.sm,
    marginBottom: Layout.spacing.md,
  },
  buttonWithImage: {
    flexDirection: 'column',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Platform.OS === 'web' ? Layout.spacing.md : Layout.spacing.sm,
    backgroundColor: 'transparent',
  },
  buttonText: {
    marginLeft: Layout.spacing.sm,
    flex: 1,
  },
  imageContainer: {
    width: '100%',
    borderTopLeftRadius: Layout.borderRadius.md,
    borderTopRightRadius: Layout.borderRadius.md,
    overflow: 'hidden',
  },
  featuredImage: {
    width: '100%',
    height: 180,
  },
  arrowIcon: {
    marginLeft: Layout.spacing.sm,
  }
});

export default LinkButtons; 