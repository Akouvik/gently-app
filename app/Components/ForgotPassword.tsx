import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function ForgotPassword() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.timeContainer}>
          <Text style={styles.time}>9:41</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0434b9450bd576bc84cc772a892700ae0b24adde9d3a0cb3003b399e8d16c05e?',
            }}
            style={styles.image}
          />
          <Image
            source={{
              uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9313ed7415af9333c70e80ee8675edcf59c0c6fc3f61d5b9303d55690f74f295?',
            }}
            style={styles.image}
          />
          <Image
            source={{
              uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/89565f4e6d0140ddfc750884bea9d8b4d8cb81f58d0425c302a018ea4152e21c?',
            }}
            style={styles.image}
          />
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.imagePlaceholder} />
        <View style={styles.title}>
          <Text style={styles.titleText}>Forgot your password?</Text>
        </View>
        <View style={styles.message}>
          <Text style={styles.messageText}>
            Nothing to worry about.{'\n'}
            Let’s create you a new one. What’s your email?
          </Text>
        </View>
        <View style={styles.emailContainer}>
          <View style={styles.icon}>
            <Image
              source={{
                uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/89565f4e6d0140ddfc750884bea9d8b4d8cb81f58d0425c302a018ea4152e21c?',
              }}
              style={styles.emailIcon}
            />
          </View>
          <View style={styles.email}>
            <Text style={styles.emailText}>marie-ann@gmail.com</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>get a recovery link</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingBottom: 20,
    marginHorizontal: 'auto',
    width: '100%',
    backgroundColor: 'white',
    maxWidth: 480,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: 'white',
  },
  timeContainer: {},
  time: {
    fontSize: 14,
    fontWeight: '600',
    color: '#222',
  },
  imageContainer: {
    flexDirection: 'row',
  },
  image: {
    width: 17,
    aspectRatio: 1.7,
    marginRight: 1.5,
  },
  content: {
    paddingHorizontal: 5,
    marginTop: 7,
  },
  imagePlaceholder: {
    aspectRatio: 3.57,
    width: '100%',
  },
  title: {
    marginTop: 8,
  },
  titleText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#222',
  },
  message: {
    marginTop: 5,
  },
  messageText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#222',
  },
  emailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 6,
    paddingVertical: 4,
    marginTop: 11,
    backgroundColor: 'white',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#222',
  },
  icon: {
    flexShrink: 0,
  },
  emailIcon: {
    width: 5,
    aspectRatio: 1,
  },
  email: {
    flex: 1,
    marginLeft: 6,
  },
  emailText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#222',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 4,
    marginTop: 3.5,
    borderRadius: 18,
    backgroundColor: '#222',
  },
  button: {},
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
});

export default ForgotPassword;
