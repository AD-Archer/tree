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

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const backgroundColor = Colors[colorScheme ?? 'light'].background;
  const isDesktop = Layout.isDesktop;
  const isTablet = Layout.isTablet;

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <ThemedView variant="container" style={styles.contentWrapper}>
          <ThemedView style={styles.header}>
            <ThemedText variant="display" style={styles.siteTitle}>
              Antonio Archer
            </ThemedText>
            <ThemedText variant="h3" color="textSecondary" style={styles.siteSubtitle}>
              Full Stack Developer Portfolio
            </ThemedText>
          </ThemedView>
          
          <ProfileSection />
          
          <ThemedView style={styles.sectionDivider} />
          
          <SocialIcons />
          
          <ThemedView style={styles.sectionDivider} />
          
          <LinkButtons />
          
          <ThemedView style={styles.sectionDivider} />
          
          <CertificationsSection />
          
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
  },
  scrollContainer: {
    paddingVertical: Layout.spacing.lg,
  },
  contentWrapper: {
    width: '100%',
    gap: Layout.spacing.xl,
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
  sectionDivider: {
    height: 1,
    backgroundColor: Colors.light.divider,
    width: '100%',
    marginVertical: Layout.spacing.md,
  },
  footer: {
    marginTop: Layout.spacing.xl,
    paddingVertical: Layout.spacing.lg,
    alignItems: 'center',
  },
}); 