import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

function MyComponent() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/8e65b7dc44ee8e630a57cd8ba9baf62e7238eac71a4e9c8cc3e24b41093adbbc?',
          }}
          style={styles.logo}
        />
        <View style={styles.backButton}>
          <Image
            source={{
              uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4dba3439ad5f5f805d3b5f395c90bac9a16fb9cb80132156e313090d9a86e230?',
            }}
            style={styles.backButtonIcon}
          />
          <Text>Back to your program</Text>
        </View>
        <View style={styles.profileIcon}>
          <Text>M</Text>
        </View>
      </View>
      <View style={styles.articleContainer}>
        <View style={styles.articleHeader}>
          <Image
            source={{
              uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ba500ef6512344a483ce70dddbb2dddee1ee74b91a31f9f4edb90e74dad7bf62?',
            }}
            style={styles.articleHeaderImage}
          />
          <Text style={styles.articleTitle}>
            Jens’ story of dealing with pregnancy loss denial
          </Text>
        </View>
        <Text style={styles.articleContent}>
          {`My name is Eliza, 27, living in the US. Today, I'm opening up about a
          deeply personal and painful chapter in my life, in hopes that my words
          might resonate with others who've experienced something similar. I
          know my emotions are raw, and I'm still finding my way through them. 

          Several months ago, I suffered the devastating loss of my ectopic
          pregnancy at just 9 weeks. What followed was a series of painful
          medical interventions: a D&C to determine the nature of the pregnancy,
          treatment with methotrexate, and finally, a traumatic surgery on June
          10 when my fallopian tube ruptured.

          That loss, though, was only the beginning of a journey filled with
          further heartache.
          A mere month after this, my younger sister, who is two years my
          junior, joyfully announced her pregnancy. I was still enveloped in
          grief, and her news felt like a harsh contrast to the emptiness that
          had become my constant companion.

          Then came the conversation at her birthday dinner, one that haunts me
          still. My mother casually brought up a name I had always envisioned
          for my future child — a name that my family knew was special to me. My
          sister even acknowledged it was something I had claimed for myself.
          But then, my mother's words struck me like a slap: "Well, she's
          having her baby first, so..."

          Tears welled in my eyes, and I had to excuse myself to cry in the
          bathroom, feeling the loss anew, as if the wound had just been
          inflicted. It was as if my dream was being taken from me, and nobody
          seemed to grasp the depth of my despair.

          Time has moved on, and now my sister's gender reveal is looming large.
          The event should be a joyous occasion, but all I feel is apprehension.

          Her baby's due date is unsettlingly close to what mine would have
          been. Now even opening a calendar on my phone could set me back for an
          hour. 

          It feels like I’m living in a world surrounded by triggers and
          reminders of my loss. 

          How can I partake in the celebration when my own dreams have crumbled
          to dust? My boyfriend will stand by me at the gender reveal, but I'm
          torn about attending. Is it selfish to contemplate missing my sister's
          special moment? Can I muster the strength to be present?

          I'm adrift, caught in a storm of conflicting emotions.

          I love my sister, and I want to be happy for her, but I'm still
          aching, still seeking closure, and the world seems to be moving
          forward without me.`}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#333',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
    marginBottom: 20,
  },
  logo: {
    width: 85,
    height: 85 / 3.57, // aspect ratio 3.57
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButtonIcon: {
    width: 15,
    height: 15,
    marginRight: 5,
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  articleContainer: {
    marginTop: 14,
    width: '100%',
    backgroundColor: '#774',
    borderRadius: 271 / 2,
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  articleHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  articleHeaderImage: {
    width: 237,
    height: 237,
    borderRadius: 237 / 2,
    marginRight: 16,
  },
  articleTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  articleContent: {
    fontSize: 18,
    lineHeight: 26,
    color: '#fff',
  },
});

export default MyComponent;
