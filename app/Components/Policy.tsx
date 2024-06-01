import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function Policy() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.timeContainer}>
          <Text style={styles.time}>9:41</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/bba8d6db5fbc76bf1c1484cb800f2000b11dd5d3762d51ee3077ec417d655ec8?',
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
              uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1b04570547cc13f355bba3a6175efd180afe69f0afcb49fa32cc70586a4c35bc?',
            }}
            style={styles.image}
          />
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.imagePlaceholder} />
        <View style={styles.title}>
          <Text style={styles.titleText}>Gently Privacy Policy</Text>
        </View>
        <View style={styles.subtitle}>
          <Text style={styles.subtitleText}>Effective date: July 11, 2023</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>1. Introduction</Text>
          <Text style={styles.sectionText}>
            Gently ("we", "us", or "our") respects your privacy and is committed
            to protecting it through our compliance with this policy. This
            policy describes the types of information we may collect from you or
            that you may provide when you visit our web application (our
            "Service") and our practices for collecting, using, maintaining,
            protecting, and disclosing that information. This policy applies to
            information we collect on this Service, and in email, text, and
            other electronic messages between you and this Service.
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
    paddingTop: 4,
    paddingBottom: 20,
    marginHorizontal: 'auto',
    width: '100%',
    backgroundColor: 'white',
    maxWidth: 480,
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: 5,
    width: '100%',
  },
  timeContainer: {},
  time: {
    fontSize: 14,
    fontWeight: '600',
    color: '#222',
  },
  imageContainer: {
    flexDirection: 'row',
    marginLeft: 3.5,
  },
  image: {
    width: 17,
    aspectRatio: 1.69,
    marginRight: 1.5,
  },
  content: {
    paddingHorizontal: 5,
    marginTop: 14,
    width: '100%',
  },
  imagePlaceholder: {
    aspectRatio: 3.57,
    width: '100%',
  },
  title: {
    alignSelf: 'center',
    marginTop: 7,
  },
  titleText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#222',
    textAlign: 'center',
  },
  subtitle: {
    alignSelf: 'center',
    marginTop: 4,
  },
  subtitleText: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#222',
    textAlign: 'center',
  },
  section: {
    marginTop: 14,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
    textAlign: 'center',
  },
  sectionText: {
    fontSize: 14,
    color: '#222',
    textAlign: 'center',
  },
});

export default Policy;
