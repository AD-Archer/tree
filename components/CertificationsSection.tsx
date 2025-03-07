import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Modal, Image, ScrollView, Linking, Platform, View } from 'react-native';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { FontAwesome } from '@expo/vector-icons';
import { IMAGES } from '@/constants/Images';

type Certificate = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  imageName: string;
  link: string;
  extraInfo?: string;
};

const certificates: Certificate[] = [
  {
    id: '1',
    title: "React Certification",
    issuer: "Codecademy",
    date: "Issued Feb 2025",
    imageName: "codeacademy.jpeg",
    link: "https://www.codecademy.com/profiles/Ad-Archer/certificates/af00e5032d0a68cc84879983f5d8333b",
    extraInfo: "(Expires Nov 2026)"
  },
  {
    id: '2',
    title: "Academy Accreditation - Generative AI Fundamentals",
    issuer: "Databricks",
    date: "Issued Nov 2024",
    imageName: "databricks.jpeg",
    link: "https://credentials.databricks.com/03505993-f39c-4a0e-9b60-d63684c156b6",
    extraInfo: "(Expires Nov 2026)"
  },
  {
    id: '3',
    title: "PCEP™ – Certified Entry-Level Python Programmer",
    issuer: "Python Institute",
    date: "Issued Jun 2024",
    imageName: "python.jpeg",
    link: "https://www.credly.com/badges/c97d5448-24e6-4f37-80c1-b83ab768bbdd/linked_in_profile",
    extraInfo: "(Expires Never)"
  }
];

const CertificationsSection = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const colorScheme = useColorScheme();
  const backgroundColor = Colors[colorScheme ?? 'light'].background;
  const textColor = Colors[colorScheme ?? 'light'].text;
  const cardBackground = Colors[colorScheme ?? 'light'].cardBackground;
  const modalBackground = Colors[colorScheme ?? 'light'].background;
  const buttonBackground = Colors[colorScheme ?? 'light'].buttonPrimary;
  const buttonText = Colors[colorScheme ?? 'light'].buttonPrimaryText;
  const borderColor = colorScheme === 'dark' ? '#4A5568' : '#E2E8F0';
  const isWeb = Platform.OS === 'web';

  const handleOpenLink = (link: string) => {
    Linking.openURL(link);
  };

  const getImageSource = (imageName: string) => {
    const image = IMAGES.find(img => img.name === imageName);
    return image ? { uri: image.url } : require('@/assets/images/cert-placeholder.png');
  };

  const renderCertificateCard = (cert: Certificate) => (
    <TouchableOpacity
      key={cert.id}
      style={[styles.certCard, { backgroundColor: cardBackground, borderColor: borderColor }]}
      onPress={() => setSelectedCert(cert)}
    >
      <Image source={getImageSource(cert.imageName)} style={styles.certThumbnail} />
      <ThemedView style={styles.certInfo}>
        <ThemedText variant="bodyBold" numberOfLines={1}>{cert.title}</ThemedText>
        <ThemedText style={styles.issuerText}>{cert.issuer}</ThemedText>
        <ThemedText style={styles.issuerText}>{cert.date}</ThemedText>
        {cert.extraInfo && (
          <ThemedText style={[styles.issuerText, styles.extraInfo]}>{cert.extraInfo}</ThemedText>
        )}
      </ThemedView>
    </TouchableOpacity>
  );

  return (
    <ThemedView style={styles.container}>
      <ThemedText variant="h3">Certifications</ThemedText>
      
      {isWeb ? (
        <View style={styles.webCertificatesContainer}>
          {certificates.map(cert => renderCertificateCard(cert))}
        </View>
      ) : (
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          style={styles.scrollView}
          contentContainerStyle={styles.scrollViewContent}
        >
          {certificates.map(cert => renderCertificateCard(cert))}
        </ScrollView>
      )}
      
      <Modal
        visible={selectedCert !== null}
        transparent
        animationType="slide"
        onRequestClose={() => setSelectedCert(null)}
      >
        <ThemedView style={[styles.modalContainer, { backgroundColor: backgroundColor + 'F0' }]}>
          <ThemedView style={[styles.modalContent, { backgroundColor: modalBackground, borderColor: borderColor }]}>
            <TouchableOpacity 
              style={styles.closeButton} 
              onPress={() => setSelectedCert(null)}
            >
              <FontAwesome name="close" size={24} color={textColor} />
            </TouchableOpacity>
            
            {selectedCert && (
              <>
                <Image 
                  source={getImageSource(selectedCert.imageName)} 
                  style={styles.certImage} 
                  resizeMode="contain" 
                />
                <ThemedText variant="h3">{selectedCert.title}</ThemedText>
                <ThemedText>{selectedCert.issuer} • {selectedCert.date}</ThemedText>
                {selectedCert.extraInfo && (
                  <ThemedText style={styles.extraInfo}>{selectedCert.extraInfo}</ThemedText>
                )}
                <TouchableOpacity 
                  style={[styles.viewButton, { backgroundColor: buttonBackground }]}
                  onPress={() => handleOpenLink(selectedCert.link)}
                >
                  <ThemedText style={[styles.viewButtonText, { color: buttonText }]}>View Certificate</ThemedText>
                </TouchableOpacity>
              </>
            )}
          </ThemedView>
        </ThemedView>
      </Modal>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
  webCertificatesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  scrollView: {
    flexGrow: 0,
  },
  scrollViewContent: {
    paddingBottom: 8,
  },
  certCard: {
    width: Platform.OS === 'web' ? '31%' : 220,
    marginRight: Platform.OS === 'web' ? 0 : 16,
    marginBottom: Platform.OS === 'web' ? 16 : 0,
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 3,
  },
  certThumbnail: {
    width: '100%',
    height: 130,
    backgroundColor: '#e0e0e0',
  },
  certInfo: {
    padding: 16,
    gap: 4,
  },
  issuerText: {
    fontSize: 12,
    opacity: 0.7,
  },
  extraInfo: {
    fontStyle: 'italic',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContent: {
    width: '100%',
    maxWidth: 400,
    padding: 24,
    borderRadius: 16,
    alignItems: 'center',
    gap: 16,
    position: 'relative',
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 8,
  },
  closeButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    zIndex: 1,
    padding: 8,
  },
  certImage: {
    width: '100%',
    height: 220,
    marginBottom: 16,
    borderRadius: 8,
  },
  viewButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 16,
  },
  viewButtonText: {
    fontWeight: 'bold',
  },
});

export default CertificationsSection; 