import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { courses } from '../data/courses';

export default function TextScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { courseId, moduleIndex, moduleDescription, moduleOneQuestion } = route.params;

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);

  const course = courses.find(c => c.id === courseId);
  const module = course?.modules[moduleIndex];

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    setIsCorrect(answer === moduleOneQuestion.answer);
  };

  if (!course || !module) {
    return (
      <View style={styles.centered}>
        <Text>Module not found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Ionicons name="menu" size={28} color="#545e74" />
        </TouchableOpacity>
        <Text style={styles.topBarTitle}>Learn Easy</Text>
        <TouchableOpacity>
          <Image source={require('../assets/profile1.png')} style={styles.avatar} />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Title */}
        <View style={styles.titleContainer}>
          <Text style={styles.screenTitle}>Module {moduleIndex + 1} - Text</Text>
        </View>

        {/* Back Button */}
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>

        {/* Description */}
        <View style={styles.textContainer}>
          <Text style={styles.description}>{moduleDescription}</Text>
        </View>

        {/* Question */}
        <View style={styles.questionContainer}>
          <Text style={styles.questionLabel}>Question</Text>
          <Text style={styles.question}>{moduleOneQuestion.text}</Text>

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
              <Text style={isCorrect ? styles.feedbackTextCorrect : styles.feedbackTextWrong}>
                {isCorrect ? 'Your answer was correct!' : 'Your answer was wrong!'}
              </Text>
            </View>
          )}
        </View>

        {/* Spacer to make room for bottom tab bar */}
        <View style={{ height: 80 }} />
      </ScrollView>

      {/* Bottom Tab Bar */}
      <View style={styles.bottomBar}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home" size={30} color="#545e74" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="person" size={30} color="#545e74" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fbf5ed' },
  scrollContainer: { paddingBottom: 40 },
  topBar: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#fbf5ed',
    borderBottomWidth: 1,
    borderBottomColor: '#c8d2d1',
  },
  topBarTitle: { fontSize: 20, fontWeight: 'bold', color: '#545e74' },
  avatar: {
    height: 30,
    width: 30,
    borderRadius: 18,
    resizeMode: 'cover',
  },
  titleContainer: { alignItems: 'center', paddingVertical: 10 },
  screenTitle: { fontSize: 24, fontWeight: 'bold', color: '#545e74', marginTop: 10 },
  backButton: {
    position: 'absolute',
    left: 10,
    top: 7,
    padding: 8,
    zIndex: 10,
  },
  backText: { fontSize: 36, color: 'black' },
  textContainer: {
    marginHorizontal: 16,
    marginVertical: 20,
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  description: { fontSize: 16, lineHeight: 24, color: 'black' },
  questionContainer: {
    marginHorizontal: 16,
    marginTop: 20,
    padding: 16,
    backgroundColor: '#545e74',
    borderRadius: 10,
  },
  questionLabel: { fontWeight: 'bold', marginBottom: 8, fontSize: 16, color: '#cbe3ff' },
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
  answerText: { fontSize: 16, color: 'white', fontWeight: 'bold' },
  correct: { backgroundColor: '#228b22' },
  incorrect: { backgroundColor: '#b22222' },
  feedback: {
    marginTop: 16,
    alignItems: 'center',
  },
  emoji: {
    fontSize: 48,
    textAlign: 'center',
  },
  feedbackTextCorrect: {
    fontSize: 18,
    color: '#00cc66',
    textAlign: 'center',
    marginTop: 4,
  },
  feedbackTextWrong: {
    fontSize: 18,
    color: '#cc0000',
    textAlign: 'center',
    marginTop: 4,
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 30,
    backgroundColor: '#fbf5ed',
    borderTopWidth: 1,
    borderTopColor: '#c8d2d1',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
