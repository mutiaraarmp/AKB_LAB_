// app/index.tsx
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import students from "../data/students.js";


export default function IndexScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daftar Mahasiswa</Text>

      <FlatList
        data={students}
        keyExtractor={(item) => item.nim}
        renderItem={({ item }) => (
          <Link
            href={{ pathname: '/detail', params: { nim: item.nim, nama: item.nama, foto: item.foto } }}
            asChild
          >
            <Pressable style={styles.item}>
              <Ionicons name="person-circle-outline" size={24} color="blue" />
              <Text style={styles.text}>{item.nama} ({item.nim})</Text>
            </Pressable>
          </Link>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  item: { flexDirection: 'row', alignItems: 'center', padding: 10, borderBottomWidth: 1, borderColor: '#ccc' },
  text: { marginLeft: 10, fontSize: 16 },
});
