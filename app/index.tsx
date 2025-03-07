import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import ProfileSection from '@/components/ProfileSection';
import SocialIcons from '@/components/SocialIcons';
import LinkButtons from '@/components/LinkButtons';
import CertificationsSection from '@/components/CertificationsSection';

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const backgroundColor = Colors[colorScheme ?? 'light'].background;

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <ProfileSection />
        <SocialIcons />
        <LinkButtons />
        <CertificationsSection />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    padding: 16,
    gap: 24,
  },
}); 