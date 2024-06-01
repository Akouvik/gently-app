import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function NewPassword() {
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
          <Text style={styles.titleText}>Create a new password</Text>
        </View>
        <View style={styles.email}>
          <Text>Email: martha-ann@gmail.com</Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.input}>
            <Image
              source={{
                uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/68dfc53dc83a4ae291f1f8699f0efa9d8f256616e13142410c66998eb300c4ee?',
              }}
              style={styles.inputIcon}
            />
            <Text style={styles.inputText}>please create a new password</Text>
          </View>
          <View style={styles.input}>
            <Image
              source={{
                uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/68dfc53dc83a4ae291f1f8699f0efa9d8f256616e13142410c66998eb300c4ee?',
              }}
              style={styles.inputIcon}
            />
            <Text style={styles.inputText}>repeat new password</Text>
          </View>
        </View>
        <View style={styles.button}>
          <Text style={styles.buttonText}>set new password</Text>
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
    fontSize: 24,
    fontWeight: '600',
    color: '#222',
  },
  email: {
    marginTop: 5,
  },
  inputContainer: {
    marginTop: 10,
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 6,
    paddingVertical: 4,
    marginTop: 3.5,
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'purple',
  },
  inputIcon: {
    width: 5,
    aspectRatio: 1,
    marginRight: 1,
  },
  inputText: {
    flex: 1,
    fontSize: 14,
    fontStyle: 'italic',
    color: 'purple',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 4,
    marginTop: 3.5,
    borderRadius: 20,
    backgroundColor: 'rgba(66, 82, 110, 0.5)',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
  },
});

export default NewPassword;
