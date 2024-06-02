import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Settings = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.time}>9:41</Text>
        <View style={styles.iconsContainer}>
          <Image
            source={{
              uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/bba8d6db5fbc76bf1c1484cb800f2000b11dd5d3762d51ee3077ec417d655ec8?',
            }}
            style={styles.icon}
          />
          <Image
            source={{
              uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9313ed7415af9333c70e80ee8675edcf59c0c6fc3f61d5b9303d55690f74f295?',
            }}
            style={styles.icon}
          />
          <Image
            source={{
              uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1b04570547cc13f355bba3a6175efd180afe69f0afcb49fa32cc70586a4c35bc?',
            }}
            style={styles.icon}
          />
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image source={{ uri: '...' }} style={styles.image} />
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>M</Text>
        </View>
      </View>
      <Text style={styles.title}>Gently Privacy Policy</Text>
      <Text style={styles.subtitle}>Effective date: July 11, 2023</Text>
      <View style={styles.contentContainer}>
        <Text style={styles.sectionTitle}>1. Introduction</Text>
        <Text style={styles.contentText}>
          Gently ("we", "us", or "our") respects your privacy and is committed
          to protecting it through our compliance with this policy. This policy
          describes the types of information we may collect from you or that you
          may provide when you visit our web application (our "Service") and our
          practices for collecting, using, maintaining, protecting, and
          disclosing that information.
          {'\n\n'}
          This policy applies to information we collect on this Service, and in
          email, text, and other electronic messages between you and this
          Service.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: 'white',
    maxWidth: 480,
    alignSelf: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  time: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#404040',
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 25,
    aspectRatio: 2.08,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 9,
    paddingHorizontal: 5,
  },
  image: {
    width: 100,
    aspectRatio: 3.57,
  },
  avatar: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    backgroundColor: '#CCCCCC',
    borderRadius: 25,
  },
  avatarText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#404040',
  },
  title: {
    alignSelf: 'center',
    marginTop: 7,
    fontSize: 28,
    fontWeight: 'bold',
    color: '#404040',
  },
  subtitle: {
    alignSelf: 'center',
    marginTop: 4,
    fontSize: 16,
    fontStyle: 'italic',
    color: '#404040',
  },
  contentContainer: {
    paddingHorizontal: 5,
    marginTop: 14,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  contentText: {
    marginTop: 8,
    fontSize: 16,
    color: '#404040',
  },
});

export default Settings;
