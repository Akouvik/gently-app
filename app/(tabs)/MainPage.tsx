import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function MainPage() {
  return (
    <View style={styles.container}>
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
          <Image source={{ uri: '...' }} style={styles.headerImage} />
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
          <Text style={styles.sectionTitle}>
            Part 1 of me healing from grief
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Embracing grief: My journey of healing and growth
          </Text>
        </View>
        {/* Repeat these views for each section */}
      </View>
    </View>
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
    fontWeight: '600',
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
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 28,
    color: '#7E5AF5',
  },
  userName: {
    color: '#7E5AF5',
    fontWeight: '600',
  },
  section: {
    marginTop: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 28,
    color: '#7E5AF5',
  },
});

export default MainPage;
