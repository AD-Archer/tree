import React from 'react';
import { StyleSheet, ScrollView, SafeAreaView, Platform, View } from 'react-native';
import { Colors } from '@/constants/Colors';
import { Layout } from '@/constants/Layout';
import { useColorScheme } from '@/hooks/useColorScheme';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import ProfileSection from '@/components/ProfileSection';
import SocialIcons from '@/components/SocialIcons';
import LinkButtons from '@/components/LinkButtons';
import CertificationsSection from '@/components/CertificationsSection';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const backgroundColor = Colors[colorScheme ?? 'light'].background;
  const gradientStart = colorScheme === 'dark' ? 
    Colors.dark.backgroundSecondary : 
    Colors.light.backgroundSecondary;
  const gradientEnd = backgroundColor;
  const isDesktop = Layout.isDesktop;
  const isTablet = Layout.isTablet;

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Background gradient elements for visual connection */}
        {Platform.OS === 'web' && (
          <>
            <View style={[styles.backgroundElement, styles.topLeftBlob]} />
            <View style={[styles.backgroundElement, styles.bottomRightBlob]} />
          </>
        )}
        
        <ThemedView variant="container" style={styles.contentWrapper}>
          <ThemedView style={styles.header}>
            <ThemedText variant="display" style={styles.siteTitle}>
              Antonio Archer
            </ThemedText>
            <ThemedText variant="h3" color="textSecondary" style={styles.siteSubtitle}>
              Full Stack Developer Portfolio
            </ThemedText>
          </ThemedView>
          
          {/* Profile section with no margin to connect with social icons */}
          <ProfileSection />
          
          {/* Social icons with reduced top margin to feel connected to profile */}
          <View style={styles.connectedSection}>
            <SocialIcons />
          </View>
          
          {/* Links section with gradient background for visual connection */}
          <View style={[
            styles.gradientWrapper,
            isDesktop && styles.gradientWrapperDesktop,
            isTablet && styles.gradientWrapperTablet
          ]}>
            <LinearGradient
              colors={[gradientStart, gradientEnd]}
              style={styles.sectionGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <LinkButtons />
            </LinearGradient>
          </View>
          
          {/* Certifications with visual connection to links */}
          <View style={[
            styles.connectedSection,
            isDesktop && styles.connectedSectionDesktop
          ]}>
            <CertificationsSection />
          </View>
          
          <ThemedView style={styles.footer}>
            <ThemedText variant="caption" color="textTertiary">
              © {new Date().getFullYear()} Antonio Archer. All rights reserved.
            </ThemedText>
          </ThemedView>
        </ThemedView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  scrollContainer: {
    paddingVertical: Layout.spacing.lg,
    position: 'relative',
  },
  contentWrapper: {
    width: '100%',
    gap: Layout.spacing.lg, // Reduced gap for more connected feel
    position: 'relative',
    zIndex: 1,
  },
  header: {
    alignItems: Platform.OS === 'web' ? 'center' : 'flex-start',
    marginBottom: Layout.spacing.md,
    display: Platform.OS === 'web' ? 'flex' : 'none',
  },
  siteTitle: {
    textAlign: 'center',
  },
  siteSubtitle: {
    textAlign: 'center',
    marginTop: Layout.spacing.xs,
  },
  connectedSection: {
    marginTop: -Layout.spacing.md, // Negative margin to pull sections closer
    paddingTop: Layout.spacing.md,
    width: '100%',
  },
  connectedSectionDesktop: {
    marginTop: -Layout.spacing.lg, // More negative margin on desktop for tighter connection
  },
  gradientWrapper: {
    marginVertical: Layout.spacing.md,
    borderRadius: Layout.borderRadius.lg,
    overflow: 'hidden',
    width: '100%',
  },
  gradientWrapperDesktop: {
    maxWidth: '90%',
    alignSelf: 'center',
  },
  gradientWrapperTablet: {
    maxWidth: '95%',
    alignSelf: 'center',
  },
  sectionGradient: {
    padding: Layout.spacing.md,
    borderRadius: Layout.borderRadius.lg,
  },
  footer: {
    marginTop: Layout.spacing.xl,
    paddingVertical: Layout.spacing.lg,
    alignItems: 'center',
  },
  backgroundElement: {
    position: 'absolute',
    borderRadius: 300,
    opacity: 0.1,
    zIndex: 0,
  },
  topLeftBlob: {
    width: 500,
    height: 500,
    top: -200,
    left: -200,
    backgroundColor: Colors.light.tint,
  },
  bottomRightBlob: {
    width: 600,
    height: 600,
    bottom: -300,
    right: -300,
    backgroundColor: Colors.light.tint,
  },
}); 