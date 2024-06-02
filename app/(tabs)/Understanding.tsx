import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function Understanding() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.timeContainer}>
          <Text style={styles.time}>9:41</Text>
        </View>
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
              uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/2dc76a38851b0170c1886be382fcbf55ffa58aacb38bdaf4f14b7bd82db0c4d0?',
            }}
            style={styles.image}
          />
        </View>
      </View>
      {/* Continue with the rest of your component */}
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
  timeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
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
  // Define other styles as needed for the rest of your component
});

export default Understanding;
