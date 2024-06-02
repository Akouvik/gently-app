import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function Therapist() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.timeContainer}>
          <Text style={styles.time}>9:41</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/8e65b7dc44ee8e630a57cd8ba9baf62e7238eac71a4e9c8cc3e24b41093adbbc?',
            }}
            style={styles.image}
          />
          <Image
            source={{
              uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4dba3439ad5f5f805d3b5f395c90bac9a16fb9cb80132156e313090d9a86e230?',
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
          <Text style={styles.titleText}>
            Embracing grief: My journey of healing and growth
          </Text>
        </View>
      </View>
      <View style={styles.bottomSection}>
        <View style={styles.card}>
          <View style={styles.iconContainer}>
            <View style={styles.icon} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.cardTitle}>
              Approved by a Licensed Psychologist
            </Text>
            <Text style={styles.cardText}>
              This article is created with the contribution of Dr. Jordan Karr,
              PhD. Dr Jordan has 9 years of experience in trauma-informed
              therapy and a doctoral degree from UC Berkeley
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.iconContainer}>
            <View style={styles.icon} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.cardTitle}>
              Approved by a Licensed Psychologist
            </Text>
            <Text style={styles.cardText}>
              This article is created with the contribution of Dr. Jordan Karr,
              PhD. Dr Jordan has 9 years of experience in trauma-informed
              therapy and a doctoral degree from UC Berkeley
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.containerFeel}>
        <Image
          source={{
            uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0434b9450bd576bc84cc772a892700ae0b24adde9d3a0cb3003b399e8d16c05e?',
          }}
          style={styles.imageFeel}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 4,
    paddingBottom: 20,
    marginHorizontal: 'auto',
    width: '100%',
    backgroundColor: '#DADADA', // Assuming bg-stone-50 maps to a similar color
    maxWidth: 480,
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: 4,
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
    paddingHorizontal: 4,
    marginTop: 7,
    width: '100%',
  },
  imagePlaceholder: {
    aspectRatio: 3.57,
    width: '100%',
  },
  title: {
    marginTop: 8,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#222',
    textAlign: 'center',
  },
  bottomSection: {
    alignItems: 'center',
    marginTop: 7,
    width: '100%',
  },
  card: {
    flexDirection: 'row',
    paddingHorizontal: 6,
    paddingVertical: 5,
    marginTop: 2.5,
    width: '100%',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    maxWidth: 317,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 8,
  },
  icon: {
    width: 66,
    height: 66,
    backgroundColor: '#A020F0', // Assuming bg-purple-400 maps to a similar color
    borderRadius: 33,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  cardText: {
    fontSize: 14,
    color: '#222222',
  },
  containerFeel: {
    width: '100%',
    aspectRatio: 2.56,
    maxWidth: 423,
  },
  imageFeel: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export default Therapist;
