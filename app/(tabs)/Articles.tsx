import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

function Articles() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.time}>9:41</Text>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/82280934ec2d29ebbb78b56c6a0fd4ec2502de9ba360763e64df0a8d9bc482c3?',
            }}
            style={styles.image}
          />
          <Image
            source={{
              uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/8c1937d0c7775bf80f2e3b32e7abbdfa5aa13f12a4dfb37a321c797e55598dca?',
            }}
            style={styles.image}
          />
          <Image
            source={{
              uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/abd87139193e2c681f470fc76d77658c5c65d9ef1663d2b299df2961f3ccb20a?',
            }}
            style={styles.image}
          />
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.contentHeader}>
          <Image
            // source={{ uri: '...' }}
            source={{
              uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/abd87139193e2c681f470fc76d77658c5c65d9ef1663d2b299df2961f3ccb20a?',
            }}
            style={styles.headerImage}
          />
          <View style={styles.avatar}>
            <Text>M</Text>
          </View>
        </View>
        <View style={styles.greeting}>
          <Text>
            Welcome back, <Text style={styles.userName}>Marta</Text>
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionSubTitle}>
            Part 1 of me healing from grief
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Embracing grief: My journey of healing and growth
          </Text>
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.sectionNumber}>
          <Text style={styles.sectionNumberText}>1</Text>
        </View>
        <View style={styles.sectionContent}>
          <Text style={styles.sectionTitle}>
            Understanding and Nurturing your nervous system
          </Text>
          <View style={styles.sectionImage}>
            <Image source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/3c0e0c0652b116bd9234ff55d4e6a57adbf25ed3c54e2094ff44dcc34d65bd6e?apiKey=620ab0c43af74ff19e2ae783c9a0f807&",
            }} style={styles.overlayImage}/>
          </View>
          <View style={styles.sectionFooter}>
            <Text style={styles.sectionFooterText}>Read</Text>
            <View style={styles.divider} />
            <Text style={styles.sectionFooterText}>4 min</Text>
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.sectionNumber}>
          <Text style={styles.sectionNumberText}>2</Text>
        </View>
        <View style={styles.sectionContent}>
          <Text style={styles.sectionTitle}>Creating your save space</Text>
          <View style={styles.sectionImage}>
            <Image source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/4c199fb3108a6b80e2bdac9e21e9d9ec83711b67e7f9ae267c65b49caa42f21a?apiKey=620ab0c43af74ff19e2ae783c9a0f807&",
      }} style={styles.overlayImage}/>
          </View>
          <View style={styles.sectionFooter}>
            <Text style={styles.sectionFooterText}>Exercise</Text>
            <View style={styles.divider} />
            <Text style={styles.sectionFooterText}>4 min</Text>
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.sectionNumber}>
          <Text style={styles.sectionNumberText}>3</Text>
        </View>
        <View style={styles.sectionContent}>
          <Text style={styles.sectionTitle}>What is grief after loss like?</Text>
          <View style={styles.sectionImage}>
            <Image source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/40090398879827d3f89b48dc01a2c63ff9a9360a595cc386c4c0d5baccb844fa?apiKey=620ab0c43af74ff19e2ae783c9a0f807&",
            }} style={styles.overlayImage}/>
          </View>
          <View style={styles.sectionFooter}>
            <Text style={styles.sectionFooterText}>Read</Text>
            <View style={styles.divider} />
            <Text style={styles.sectionFooterText}>4 min</Text>
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.sectionNumber}>
          <Text style={styles.sectionNumberText}>4</Text>
        </View>
        <View style={styles.sectionContent}>
          <Text style={styles.sectionTitle}>Heal faster with our help</Text>
          <View style={styles.sectionImage}>
            <Image source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/2272c1273e7732083fe17090b236cd8e96aab3bfb0576f90d35a0cbf922ac148?apiKey=620ab0c43af74ff19e2ae783c9a0f807&",
            }}style={styles.overlayImage}/>
          </View>
          <View style={styles.sectionFooter}>
            <Text style={styles.sectionFooterText}>Read</Text>
            <View style={styles.divider} />
            <Text style={styles.sectionFooterText}>4 min</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 5,
    paddingTop: 4,
    paddingBottom: 20,
    marginHorizontal: 'auto',
    width: '100%',
    backgroundColor: 'white',
    maxWidth: 480,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 3.5,
    width: '100%',
  },
  time: {
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
    color: '#222',
  },
  imageContainer: {
    flexDirection: 'row',
  },
  image: {
    width: 17,
    aspectRatio: 1.69,
    marginRight: 1.5,
  },
  content: {
    paddingHorizontal: 5,
    marginTop: 9,
  },
  contentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 9,
  },
  headerImage: {
    width: 20,
    aspectRatio: 3.57,
  },
  avatar: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ccc',
  },
  greeting: {
    marginTop: 7,
    fontSize: 34,
    fontWeight: '400',
    lineHeight: 28,
    color: '#7E5AF5',
    fontFamily: 'sourceProLight',
  },
  userName: {
    color: '#7E5AF5',
    fontWeight: '600',
    fontFamily: 'sourceProLight',
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '300',
    lineHeight: 28,
    color: '19122E',
    fontFamily: 'sourceProLight',

  },
  sectionSubTitle: {
    lineHeight: 28,
    color: 'gray',
    fontFamily: 'sourceProLight',
    fontWeight: '200',
    fontStyle: 'italic',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  sectionNumber: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 28,
    height: 28,
    backgroundColor: '#19122E',
    borderRadius: 14,
  },
  sectionNumberText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'sourceProLight',
  },
  sectionContent: {
    flex: 1,
    marginLeft: 10,
  },
  overlayImage: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    height: '80%',
    width: '80%',
    top: '50%',
    left: '50%',
    transform: [{ translateX: '-50%' }, { translateY: '-50%' }],
    resizeMode: 'cover',
    borderRadius: 40,
  },
  sectionImage: {
    marginTop: 12,
    backgroundColor: '#f1e6ee',
    width: '100%',
    aspectRatio: 1.41, // adjust aspect ratio as needed
    borderRadius: 50,
  },
  sectionImagePlaceholder: {
    marginTop: 12,
    backgroundColor: '#cbd5e0',
    width: 166,
    aspectRatio: 1.41, // adjust aspect ratio as needed
  },
  sectionFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  sectionFooterText: {
    fontSize: 16,
    color: '#4a5568',
    fontFamily: 'sourcePro'
  },
  divider: {
    width: 1,
    height: 14,
    backgroundColor: '#cbd5e0',
    marginHorizontal: 7,
  },
});

export default Articles;
