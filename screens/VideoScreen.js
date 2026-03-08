import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import { useVideoPlayer, VideoView } from 'expo-video';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { courses } from '../data/courses';

export default function VideoScreen() {
    const navigation = useNavigation();
    const route = useRoute();
    const { courseId, moduleIndex, moduleDescription, moduleQuestion } = route.params;
  
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isCorrect, setIsCorrect] = useState(false);
  
    const course = courses.find(c => c.id === courseId);
    const module = course?.modules[moduleIndex];

    const demoVideo = require('../assets/demo_video.mp4');
  
    const handleAnswer = (answer) => {
      setSelectedAnswer(answer);
      setIsCorrect(answer === moduleQuestion[0].answer);
    };
    
    if (!course || !module) {
      return (
        <View style={styles.centered}>
          <Text>Module not found.</Text>
        </View>
      );
    }
  
  if (!course || !module) {
    return (
      <View style={styles.centered}>
        <Text>Module not found.</Text>
      </View>
    );
  }

  const video = useVideoPlayer(demoVideo);

  return (
    <SafeAreaView style={styles.container}>
      {/* Top part */}
      <View>
            {/* Header */}
            <View style={styles.topBar}>
              <TouchableOpacity>
                <Ionicons name="menu" size={28} color="
        #545e74" />
              </TouchableOpacity>
              <Text style={styles.title}>Learn Easy</Text>
              <TouchableOpacity>
                <Image
                  source={require('../assets/profile1.png')} 
                  style={styles.avatar}
                />
              </TouchableOpacity>
            </View>
      
            {/* Title */}
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Module {moduleIndex + 1} - Video</Text>
            </View>
      
            {/* Back Button */}
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
              <Text style={styles.backText}>←</Text>
            </TouchableOpacity>
      </View>

      {/* Content part */}
      <ScrollView style={{ flex: 1 }}>     
              {/* Description Text */}
              <View style={styles.textContainer}>
                <Text style={styles.description}>Watch the video and answer the question below.</Text>
              </View>

              {/* Video */}
              <VideoView player={video} style={styles.videoContainer} />
        
              {/* Question */}
              <View style={styles.questionContainer}>
                <Text style={styles.questionLabel}>Question</Text>
                <Text style={styles.question}>{moduleQuestion[0].text}</Text>
        
                <View style={styles.buttonRow}>
                  <TouchableOpacity
                    style={[
                      styles.answerButton,
                      selectedAnswer === true && (isCorrect ? styles.correct : styles.incorrect),
                    ]}
                    onPress={() => handleAnswer(true)}
                    disabled={selectedAnswer !== null}
                  >
                    <Text style={styles.answerText}>True</Text>
                  </TouchableOpacity>
        
                  <TouchableOpacity
                    style={[
                      styles.answerButton,
                      selectedAnswer === false && (isCorrect ? styles.correct : styles.incorrect),
                    ]}
                    onPress={() => handleAnswer(false)}
                    disabled={selectedAnswer !== null}
                  >
                    <Text style={styles.answerText}>False</Text>
                  </TouchableOpacity>
                </View>
        
                {selectedAnswer !== null && (
                  <View style={styles.feedback}>
                    <Text style={styles.emoji}>{isCorrect ? '🤩' : '😥'}</Text>
                    <Text>
                      {isCorrect ? <Text style={styles.feedbackTextCorrect}>Your answer was correct!</Text> : <Text style={styles.feedbackTextWrong}>Your answer was wrong!</Text>}
                    </Text>
                  </View>
                )}
              </View>
      </ScrollView> 
      
      {/* Bottom Tab Bar */}
      <View style={styles.bottomBar}>
                    <TouchableOpacity
                      style={styles.Button}
                      onPress={() => navigation.navigate('Home')}
                    >
                      <Ionicons name="home" size={30} color="#545e74" />
                    </TouchableOpacity>
            
                    <TouchableOpacity style={styles.Button}>
                      <Ionicons name= "person" size={30} color="#545e74" />
                    </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flexDirection: 'column',
    flex: 1, 
    backgroundColor: '#fbf5ed',
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#fbf5ed',
    paddingTop: 30,
    paddingBottom: 20,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
  },
  menuIcon: { fontSize: 30, color: 'black' },
  headerTitle: { fontSize: 20, color: 'black', fontWeight: 'bold', paddingTop: 10 },
  profileCircle: {
    width: 40, height: 40, borderRadius: 20, overflow: 'hidden',
  },
  profileImage: { width: '100%', height: '100%' },
  titleContainer: { alignItems: 'center', paddingVertical: 10},
  title: { fontSize: 18, fontWeight: 'bold', paddingTop: 40},
  backButton: {
    position: 'absolute',
    left: 10,
    top: 90,
    padding: 8,
    zIndex: 10,
  },
  backText: {
    fontSize: 36,
    color: 'black',
  },
  textContainer: {
    marginHorizontal: 16,
    marginVertical: 20,
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 10,
    borderWidth: 1,
  },
  description: { fontSize: 16, lineHeight: 24, color: 'black' },
  videoContainer: {
    marginHorizontal: 16,
    marginVertical: 20,
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 10,
    borderWidth: 1,
    height: 500,
  },
  questionContainer: {
    marginHorizontal: 16,
    marginTop: 20,
    padding: 16,
    backgroundColor: '#545e74',
    borderRadius: 10,
    marginBottom: 60,
  },
  questionLabel: { fontWeight: 'bold', marginBottom: 8, fontSize: 16, color: '#102b5a' },
  question: { fontSize: 16, color: 'white' },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
  answerButton: {
    backgroundColor: '#102b5a',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  answerText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  correct: {
    backgroundColor: '#228b22',
  },
  incorrect: {
    backgroundColor: '#b22222',
  },
  selected: {
    backgroundColor: '#516a96',
  },
  feedback: {
    marginTop: 16,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#fbf5ed',
    borderTopWidth: 1,
    borderTopColor: '#c8d2d1',
  },
    title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#545e74',
  },
          Button: {
            alignItems: 'center',
        },
  topBar: {
    marginBlockStart: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#fbf5ed',
    alignItems: 'center',
    borderBlockColor: '#c8d2d1',
    borderBottomWidth: 1,
  },
  avatar:{
    height: 30,
    width: 30,
    borderRadius:18,
    resizeMode: 'cover',
  },
  emoji: {
    fontSize: 48,            // bigger font for emoji
    textAlign: 'center',
  },
  feedbackText: {
    fontSize: 18,            // normal font size for message
    textAlign: 'center',
    marginTop: 4, // optional color change
  },
  feedbackTextCorrect: {
    fontSize: 18,            // normal font size for message
    textAlign: 'center',
    marginTop: 4, // optional color change
    color: '#00ff00',
  },
    feedbackTextWrong: {
    fontSize: 18,            // normal font size for message
    textAlign: 'center',
    marginTop: 4, // optional color change
    color: '#8b0000',
  },
});
