import { Image, ScrollView, Text } from "react-native";

export default function ProfilScreen() {
  return (
    <ScrollView contentContainerStyle={{ padding: 20, alignItems: "center" }}>
      <Image
        source={require("../../assets/images/profil.jpg")}
        style={{ width: 150, height: 150, borderRadius: 75, marginBottom: 20 }}
      />
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>
        Nama Lengkap: Mutiara Dewi
      </Text>
      <Text style={{ fontSize: 16 }}>NIM: 105841112222</Text>
      <Text style={{ fontSize: 16 }}>Kelas: TI-4A</Text>
      <Text style={{ fontSize: 16 }}>Jurusan: Teknik Informatika</Text>
      <Text style={{ fontSize: 16 }}>Fakultas: Sains dan Teknologi</Text>
    </ScrollView>
  );
}
