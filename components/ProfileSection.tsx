import React from 'react';
import { StyleSheet, Image, Platform, View } from 'react-native';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';
import { IMAGES } from '@/constants/Images';
import { Colors } from '@/constants/Colors';
import { Layout } from '@/constants/Layout';
import { useColorScheme } from '@/hooks/useColorScheme';

const ProfileSection = () => {
  // Find the profile image from our images data
  const profileImage = IMAGES.find(img => img.name === 'antonioarcher.jpeg');
  const colorScheme = useColorScheme();
  const isDesktop = Layout.isDesktop;
  const isTablet = Layout.isTablet;

  return (
    <ThemedView 
      variant="card" 
      style={[
        styles.container,
        isDesktop || isTablet ? styles.containerDesktop : styles.containerMobile
      ]}
      shadow="md"
    >
      <View style={[
        styles.imageWrapper,
        isDesktop || isTablet ? styles.imageWrapperDesktop : styles.imageWrapperMobile
      ]}>
        <Image 
          source={profileImage ? { uri: profileImage.url } : require('@/assets/images/avatar.png')} 
          style={[
            styles.avatar,
            isDesktop ? styles.avatarDesktop : isTablet ? styles.avatarTablet : styles.avatarMobile
          ]}
          defaultSource={require('@/assets/images/avatar-placeholder.png')}
        />
      </View>
      <View 
        style={[
          styles.textContainer,
          isDesktop || isTablet ? styles.textContainerDesktop : styles.textContainerMobile
        ]}
      >
        <ThemedText variant="h1">Antonio Archer</ThemedText>
        <ThemedText variant="h3" color="textSecondary" style={styles.jobTitle}>
          Full Stack Software Engineer
        </ThemedText>
        <ThemedText variant="body" style={styles.bio}>
          Credited in Reactjs, Javascript, and certified in Python. Working hard to make tech fun and practical to improve human lives.
        </ThemedText>
      </View>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: Layout.borderRadius.lg,
    padding: 0, // Override card default padding
    overflow: 'hidden',
  },
  containerDesktop: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerMobile: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  imageWrapper: {
    borderRadius: Layout.borderRadius.round,
    ...Layout.shadows.md,
  },
  imageWrapperDesktop: {
    margin: Layout.spacing.xl,
  },
  imageWrapperMobile: {
    marginTop: Layout.spacing.xl,
    marginBottom: Layout.spacing.lg,
  },
  avatar: {
    borderRadius: Layout.borderRadius.round,
    borderWidth: 3,
    borderColor: '#fff',
  },
  avatarDesktop: {
    width: 160,
    height: 160,
  },
  avatarTablet: {
    width: 140,
    height: 140,
  },
  avatarMobile: {
    width: 120,
    height: 120,
  },
  textContainer: {
    flex: 1,
  },
  textContainerDesktop: {
    alignItems: 'flex-start',
    paddingRight: Layout.spacing.xl,
    paddingBottom: Layout.spacing.xl,
  },
  textContainerMobile: {
    alignItems: 'center',
    textAlign: 'center',
    paddingHorizontal: Layout.spacing.lg,
    paddingBottom: Layout.spacing.xl,
  },
  jobTitle: {
    marginTop: Layout.spacing.xs,
    marginBottom: Layout.spacing.md,
  },
  bio: {
    maxWidth: 600,
    textAlign: Platform.OS === 'web' && !Layout.isTablet && !Layout.isDesktop ? 'center' : 'left',
  },
});

export default ProfileSection; 