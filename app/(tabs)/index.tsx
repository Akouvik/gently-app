import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

function HomeScreen() {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('signup');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress}>
        <View style={styles.buttonSignup}>
          <Text style={styles.buttonTextSignup}>Signup</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.header}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/edb36c3cb97ac5ba15693c72a6a10d32180805c09b45d4aba8d19cccd1accf9e?',
            }}
            style={styles.image}
          />
          <Image
            source={{
              uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ffe07b97a09b8a65964a2c781b5e485dde5c976e54fc3d610b6b3a934a30d35e?',
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/8c1937d0c7775bf80f2e3b32e7abbdfa5aa13f12a4dfb37a321c797e55598dca?',
            }}
            style={styles.image}
          />
          <Image
            source={{
              uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/8975e13541982e66bafd0c5df73c6ef718d4f694f32ad5999234e7d4bc4a52b7?',
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a9f99f8511114fe2aaee705a5e0a4cccdeed47a24bf238b6b785e3588aedc281?',
            }}
            style={styles.image}
          />
          <Image
            source={{
              uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/8bc38bc7bc33bb84b014ced038f17045095ef3d21b4cba28acfe7aa73cdba6a6?',
            }}
            style={styles.image}
          />
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.heading}>Welcome back to your gentle program</Text>
        <View style={styles.inputContainer}>
          <Image
            // source={require('./path/to/your/image.png')}
            source={{
              uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/8bc38bc7bc33bb84b014ced038f17045095ef3d21b4cba28acfe7aa73cdba6a6?',
            }}
            style={styles.icon}
          />
          <Text style={styles.inputText}>Please enter your password</Text>
        </View>
        <View style={styles.inputContainer}>
          <Image
            // source={require('./path/to/your/image.png')}
            source={{
              uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/8bc38bc7bc33bb84b014ced038f17045095ef3d21b4cba28acfe7aa73cdba6a6?',
            }}
            style={styles.icon}
          />
          <Text style={styles.inputText}>marie-ann@gmail.com</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Enter my program</Text>
        </View>
        <Text style={styles.forgotPassword}>I forgot my password</Text>
        <View style={styles.privacyContainer}>
          <Text style={styles.privacyText}>
            Your privacy is sacred to us. Your email is only used for program
            access. By continuing, you agree to our
            <Text style={styles.termsText}> Terms of Service</Text> and
            <Text style={styles.termsText}> Privacy Policy</Text>. You can
            request to delete your data at any moment.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    maxWidth: 375,
    // backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
    // backgroundColor: 'white',
  },
  timeContainer: {
    justifyContent: 'center',
  },
  time: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.9)',
  },
  imageContainer: {
    flexDirection: 'row',
  },
  image: {
    aspectRatio: 1.7,
    width: 17,
  },
  content: {
    padding: 5,
    marginTop: 7,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 28,
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.9)',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 6,
    marginTop: 8,
    borderWidth: 1,
    borderColor: '#C4B5FD',
    borderRadius: 50,
  },
  icon: {
    width: 20,
    height: 20,
  },
  inputText: {
    flex: 1,
    fontStyle: 'italic',
    marginLeft: 4,
    color: 'rgba(0, 0, 0, 0.7)',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    marginTop: 8,
    borderRadius: 50,
    backgroundColor: '#44337A',
  },
  buttonText: {
    color: 'white',
  },
  forgotPassword: {
    marginTop: 56,
    fontSize: 14,
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.7)',
  },
  privacyContainer: {
    marginTop: 4,
    fontSize: 14,
    textAlign: 'center',
    color: '#7E5AF5',
  },
  termsText: {
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, 0.9)',
  },
  // privacyContainer: {
  //   marginTop: 4,
  //   fontSize: 14,
  //   textAlign: 'center',
  //   color: '#7E5AF5',
  // },
  privacyText: {
    // define your style here
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, 0.9)',
  },
  buttonSignup: {
    justifyContent: 'center',
    backgroundColor: '#44337A',
    padding: 10,
    borderRadius: 50,
    width: 200,
  },
  buttonTextSignup: {
    textAlign: 'center',
    color: '#fff',
  },
});

export default HomeScreen;
