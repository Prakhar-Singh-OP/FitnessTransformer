import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useUser } from '../context/UserContext';

export default function ConsentModal() {
  const { personalizedAds, setPersonalizedAds } = useUser();

  const open = personalizedAds === null;

  const choose = async (personalized: boolean) => {
    await setPersonalizedAds(personalized);
  };

  if (!open) return null;

  return (
    <Modal transparent visible={open} animationType="fade">
      <View style={styles.backdrop}>
        <View style={styles.card}>
          <Text style={styles.title}>Ad Preferences</Text>
          <Text style={styles.body}>
            To show you relevant ads we may use data to personalize ads. Choose whether you want
            personalized ads or non-personalized ads.
          </Text>
          <View style={styles.row}>
            <TouchableOpacity style={styles.button} onPress={() => void choose(false)}>
              <Text style={styles.buttonText}>Non-personalized</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.primary]}
              onPress={() => void choose(true)}
            >
              <Text style={[styles.buttonText, styles.primaryText]}>Personalized</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    width: '90%',
  },
  title: { fontWeight: '800', fontSize: 18, marginBottom: 8 },
  body: { color: '#444', marginBottom: 16 },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  button: {
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    flex: 1,
    marginRight: 8,
  },
  primary: { backgroundColor: '#2563eb', borderWidth: 0, marginRight: 0, marginLeft: 8 },
  buttonText: { textAlign: 'center' },
  primaryText: { color: '#fff', fontWeight: '700' },
});
