import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Modal, Image, ScrollView, Linking } from 'react-native';
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
    link: "https://www.codecademy.com/profiles/Ad-Archer/certificates/af00e5032d0a68cc84879983f5d8333b"
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
    link: "https://www.credly.com/badges/c97d5448-24e6-4f37-80c1-b83ab768bbdd/linked_in_profile"
  }
];

const CertificationsSection = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const colorScheme = useColorScheme();
  const backgroundColor = Colors[colorScheme ?? 'light'].background;
  const textColor = Colors[colorScheme ?? 'light'].text;

  const handleOpenLink = (link: string) => {
    Linking.openURL(link);
  };

  const getImageSource = (imageName: string) => {
    const image = IMAGES.find(img => img.name === imageName);
    return image ? { uri: image.url } : require('@/assets/images/cert-placeholder.png');
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="subtitle">Certifications</ThemedText>
      
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
        {certificates.map((cert) => (
          <TouchableOpacity
            key={cert.id}
            style={styles.certCard}
            onPress={() => setSelectedCert(cert)}
          >
            <Image source={getImageSource(cert.imageName)} style={styles.certThumbnail} />
            <ThemedView style={styles.certInfo}>
              <ThemedText type="defaultSemiBold" numberOfLines={1}>{cert.title}</ThemedText>
              <ThemedText style={styles.issuerText}>{cert.issuer}</ThemedText>
              <ThemedText style={styles.issuerText}>{cert.date}</ThemedText>
              {cert.extraInfo && (
                <ThemedText style={[styles.issuerText, styles.extraInfo]}>{cert.extraInfo}</ThemedText>
              )}
            </ThemedView>
          </TouchableOpacity>
        ))}
      </ScrollView>
      
      <Modal
        visible={selectedCert !== null}
        transparent
        animationType="slide"
        onRequestClose={() => setSelectedCert(null)}
      >
        <ThemedView style={[styles.modalContainer, { backgroundColor: backgroundColor + 'F0' }]}>
          <ThemedView style={styles.modalContent}>
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
                <ThemedText type="subtitle">{selectedCert.title}</ThemedText>
                <ThemedText>{selectedCert.issuer} • {selectedCert.date}</ThemedText>
                {selectedCert.extraInfo && (
                  <ThemedText style={styles.extraInfo}>{selectedCert.extraInfo}</ThemedText>
                )}
                <TouchableOpacity 
                  style={styles.viewButton}
                  onPress={() => handleOpenLink(selectedCert.link)}
                >
                  <ThemedText style={styles.viewButtonText}>View Certificate</ThemedText>
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
  scrollView: {
    flexGrow: 0,
  },
  certCard: {
    width: 200,
    marginRight: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
  },
  certThumbnail: {
    width: '100%',
    height: 120,
    backgroundColor: '#e0e0e0',
  },
  certInfo: {
    padding: 12,
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
    maxWidth: 350,
    padding: 20,
    borderRadius: 12,
    backgroundColor: 'white',
    alignItems: 'center',
    gap: 16,
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
    padding: 5,
  },
  certImage: {
    width: '100%',
    height: 200,
    marginBottom: 16,
  },
  viewButton: {
    backgroundColor: '#0a7ea4',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
  },
  viewButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CertificationsSection; 