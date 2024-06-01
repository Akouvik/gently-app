import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function Settings() {
  return (
    <View style={styles.container}>
      <View style={styles.iconRow}>
        <View style={styles.iconContainer}>
          <Text style={styles.icon}>􀆉</Text>
        </View>
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
              uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7f76ad4f8d7fa0a04e722a40720d7fe29c004d7e277f321c06904cb7ba9ffabc?',
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
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  iconContainer: {
    flexGrow: 1,
  },
  icon: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
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

export default Settings;
