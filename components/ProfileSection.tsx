import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';
import { IMAGES } from '@/constants/Images';

const ProfileSection = () => {
  // Find the profile image from our images data
  const profileImage = IMAGES.find(img => img.name === 'antonioarcher.jpeg');

  return (
    <ThemedView style={styles.container}>
      <Image 
        source={profileImage ? { uri: profileImage.url } : require('@/assets/images/avatar.png')} 
        style={styles.avatar}
        defaultSource={require('@/assets/images/avatar-placeholder.png')}
      />
      <ThemedView style={styles.textContainer}>
        <ThemedText type="title">Antonio Archer</ThemedText>
        <ThemedText type="defaultSemiBold">Full Stack Software Engineer</ThemedText>
        <ThemedText>Credited in Reactjs, Javascript, and certified in Python. Working hard to make tech fun and practical to improve human lives.</ThemedText>
      </ThemedView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
    gap: 4,
  },
});

export default ProfileSection; 