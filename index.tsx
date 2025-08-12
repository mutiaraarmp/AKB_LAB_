import { Image, ScrollView, StyleSheet, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Universitas Muhammadiyah Makassar</Text>
      <Image
        source={require('../../assets/images/unismuh.jpg')}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.paragraph}>
        Unismuh Makassar berlokasi di Kota Makassar, Sulawesi Selatan, dan menjadi salah satu
        perguruan tinggi swasta terkemuka di Indonesia Timur. Kampus ini menawarkan berbagai
        program studi yang didukung oleh tenaga pengajar profesional serta fasilitas yang memadai.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 12,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 240,
    borderRadius: 12,
    marginBottom: 15,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'justify',
  },
});
