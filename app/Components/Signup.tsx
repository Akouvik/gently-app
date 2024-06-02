import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { siginInUserWithEmailAndPassword } from '@/utils';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    // Handle signup logic here
    console.log('Signing up2...', process.env.GOOGLE_AUTH_APPID);
    const user = await siginInUserWithEmailAndPassword(email, password);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="#44337A"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#44337A"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1e6ee',
  },
  input: {
    backgroundColor: '#f1e6ee',
    padding: 10,
    borderRadius: 20,
    marginBottom: 10,
    width: 250,
    borderWidth: 1,
    borderColor: '#44337A',
  },
  button: {
    backgroundColor: '#44337A',
    padding: 10,
    borderRadius: 20,
    width: 250,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Signup;
