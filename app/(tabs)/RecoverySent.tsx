import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function RecoverySent() {
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
          <Text style={styles.titleText}>You’ve got mail!</Text>
        </View>
        <View style={styles.message}>
          <Text style={styles.messageText}>
            If there’s a user with a provided email,
            {'\n'}a password recovery guide will land in {'\n'}
            that inbox soon
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/68dfc53dc83a4ae291f1f8699f0efa9d8f256616e13142410c66998eb300c4ee?',
          }}
          style={styles.imageMail}
        />
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
    marginTop: 7,
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
    textAlign: 'center',
  },
  imageMail: {
    marginTop: 16,
    aspectRatio: 0.99,
    width: 83,
    alignSelf: 'center',
  },
});

export default RecoverySent;
