import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={gaya.halaman}>
      
      {/* Segitiga  */}
      <View style={gaya.segitigaDekoratif} />

      {/* Persegi panjang isi nama */}
      <View style={gaya.kotakNama}>
        <Text style={gaya.teksNama}>Mutiara </Text>
      </View>

      {/* Kapsul radius 100 */}
      <View style={gaya.kapsulID}>
        <Text style={gaya.teksID}>105841114722</Text>
      </View>

    </View>
  );
}

const gaya = StyleSheet.create({
  halaman: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 25,
    backgroundColor: '#f0f0f0'
  },

  segitigaDekoratif: {
    width: 0,
    height: 0,
    borderLeftWidth: 35,
    borderRightWidth: 35,
    borderBottomWidth: 60,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#3498db',
  },

  kotakNama: {
    backgroundColor: '#2c3e50',
    paddingHorizontal: 35,
    paddingVertical: 15,
    borderRadius: 12,
  },

  teksNama: {
    color: '#ecf0f1',
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
  },

  kapsulID: {
    backgroundColor: '#16a085',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 100, 
  },

  teksID: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
