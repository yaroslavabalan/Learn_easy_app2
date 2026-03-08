import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { courses } from '../data/courses';

export default function QuizScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { courseId, moduleIndex, moduleDescription, moduleQuestion } = route.params;

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);

  const course = courses.find(c => c.id === courseId);
  const module = course?.modules[moduleIndex];

  const [counter, setCounter] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);

  const [answerResults, setAnswerResults] = useState([]);
  const [isReviewing, setIsReviewing] = useState(false);
  const [reviewQuestionIndex, setReviewQuestionIndex] = useState(null);



  /*const handleAnswer = (answer) => {
    const correct = answer === moduleQuestion[counter].answer;
    setSelectedAnswer(answer);
    setIsCorrect(correct);

    if (correct) { setScore(score => score + 1); }

    setTimeout(() => {
      if (counter + 1 < moduleQuestion.length) {
        setCounter(counter => counter + 1);
        setSelectedAnswer(null);
        setIsCorrect(null);
      } else { setShowScore(true); }
    }, 1500);
  };*/

  const handleAnswer = (answer) => {
    const correct = answer === moduleQuestion[counter].answer;
    setSelectedAnswer(answer);
    setIsCorrect(correct);


    if (correct && !isReviewing) {
      setScore(score => score + 1);
    }
    if (!isReviewing) {
      setAnswerResults(prev => [...prev, correct]);
    }
  };


  const handleMCAnswer = (answer) => {
  const correctAnswer = moduleQuestion[counter].answer.sort();
  let correct = false;
  if (
    correctAnswer.length === answer.length &&
    correctAnswer.every((value, index) => value === answer[index])
  ) {
    correct = true;
  }

  setIsCorrect(correct);
  setSelectedAnswer(1);

  if (!isReviewing) {
    if (correct) {
      setScore(prev => prev + 1);
    }
    setAnswerResults(prev => [...prev, correct]);
  }
};


  /*const handleMCAnswer = (answer) => {
    const correctAnswer = moduleQuestion[counter].answer.sort();
    let correct = false;
    if (correctAnswer.length === answer.length &&
      correctAnswer.every((value, index) => value === answer[index])) { correct = true; }

    setIsCorrect(correct);
    if (correct) { setScore(score => score + 1); }
    setSelectedAnswer(1);

    setTimeout(() => {
      if (counter + 1 < moduleQuestion.length) {
        setCounter(counter => counter + 1);
        setSelectedAnswer(null);
        setSelectedOptions([]);
        setIsCorrect(null);
      } else { setShowScore(true); }
    }, 1500);
  };*/

  const getQuestion = () => {
    const question = moduleQuestion[counter];

    switch (question.type) {
      case 'true_false':
        return (
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
        );

      case 'single_choice':
        return (
          <View style={styles.buttonRow}>
            {question.options.map((option) => (
              <TouchableOpacity
                key={option}
                style={[
                  styles.answerButton,
                  selectedAnswer === option && (isCorrect ? styles.correct : styles.incorrect),
                ]}
                onPress={() => handleAnswer(option)}
                disabled={selectedAnswer !== null}
              >
                <Text style={styles.answerText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        );

      case 'multiple_choice':
        return (
          <>
          <View style={styles.buttonRow}>
            {question.options.map((option) => (
              <TouchableOpacity
                key={option}
                style={[
                  styles.answerButton,
                  selectedOptions.includes(option) && styles.selected,
                ]}
                onPress={() =>
                  setSelectedOptions((currentSelection) =>
                    currentSelection.includes(option)
                      ? currentSelection.filter((item) => item !== option)
                      : [...currentSelection, option]
                  )
                }
              >
                <Text style={styles.answerText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <TouchableOpacity
              onPress={() => handleMCAnswer(selectedOptions.sort())}
              style={[styles.submitButton]}
              disabled={selectedOptions.length === 0}
          >
              <Text style={styles.answerText}>Submit</Text>
          </TouchableOpacity>
          </>
        );

      case 'free_text':
        return (
          <View>
            <TextInput
              style={styles.textContainer}
              value={inputValue || ''}
              onChangeText={(text) => setInputValue(text)}
              placeholder='type your answer here…'
            />
            <TouchableOpacity
              onPress={() => handleAnswer(inputValue.trim())}
              style={[styles.answerButton, {marginTop: 20, color: 'green'}]}
            >
              <Text style={styles.answerText}>Submit</Text>
            </TouchableOpacity>
          </View>
        );

      default:
        return <Text>Something went wrong…</Text>;
    }
  };

  
  if (!course || !module) {
    return (
      <View style={styles.centered}>
        <Text>Module not found.</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Part */}
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
                <Text style={styles.title}>Module {moduleIndex + 1} - Quiz</Text>
              </View>

              {/* Back Button */}
              <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                <Text style={styles.backText}>←</Text>
              </TouchableOpacity>
      </View>

      <ScrollView style={{ flex: 1 }}>
      {/* Question / Score */}
        {showScore ? (
          <View style={styles.textContainer}>
            <Text style={styles.description}>
              You scored {score} out of {moduleQuestion.length} points.
            </Text>

            <View style={{ marginTop: 20 }}>
            {answerResults.map((wasCorrect, index) => (
      <TouchableOpacity
        key={index}
        onPress={() => {
          setCounter(index);
          setShowScore(false);
          setSelectedAnswer(null);
          setSelectedOptions([]);
          setIsCorrect(null);
          setIsReviewing(true);
        }}
        style={[
          styles.reviewBox,
          wasCorrect ? styles.reviewCorrect : styles.reviewWrong,
        ]}
        >
      <Text style={styles.reviewBoxText}>
        Question {index + 1}: {wasCorrect ? 'Correct ✅' : 'Wrong ❌'}
      </Text>
    </TouchableOpacity>
  ))}

          </View>
        </View>

        ) : (
          <>
          {/* Description Text */}
          <View style={styles.textContainer}>
            <Text style={styles.description}>Time to test your knowledge!{'\n'}This quiz contains {moduleQuestion.length} question(s). </Text>
          </View>

          {/* Question */}
          <View style={styles.questionContainer}>
            <Text style={styles.questionLabel}>Question {counter + 1}</Text>
            <Text style={styles.question}>{moduleQuestion[counter].text}</Text>

            {getQuestion()}
            {selectedAnswer !== null && (
              <View style={styles.feedback}>
                <Text style={styles.emoji}>{isCorrect ? '🤩' : '😥'}</Text>
                <Text>
                  {isCorrect ? (
                    <Text style={styles.feedbackTextCorrect}>Your answer was correct!</Text>
                  ) : (
                    <>
                      <Text style={styles.feedbackTextWrong}>Your answer was wrong!</Text>
                      <Text style={styles.correctAnswerText}>
                        {'\n'}The correct answer is:{" "}
                        <Text style={{ fontWeight: 'bold' }}>
                          {Array.isArray(moduleQuestion[counter].answer)
                            ? moduleQuestion[counter].answer.join(', ')
                            : moduleQuestion[counter].answer.toString()}
                        </Text>
                      </Text>
                    </>
                  )}
                </Text>





        {/* Next Question Button */}
        {isReviewing ? (
          <TouchableOpacity
            onPress={() => {
              setShowScore(true);
              setIsReviewing(false);
              setSelectedAnswer(null);
              setIsCorrect(null);
            }}
            style={styles.nextButton} // or styles.backButton if styled separately
          >
            <Text style={styles.answerText}>Back to Results</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              if (counter + 1 < moduleQuestion.length) {
                setCounter(counter + 1);
                setSelectedAnswer(null);
                setIsCorrect(null);
              } else {
                setShowScore(true);
              }
            }}
            style={styles.nextButton}
          >
            <Text style={styles.answerText}>Next Question</Text>
          </TouchableOpacity>
        )}
                
              </View>
            )}


          </View>
          </>
        )}
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
    flexDirection: 'row-column',
    justifyContent: 'space-around',
    gap: 10,
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
  submitButton: {
    backgroundColor: '#304a94',
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 12,
    marginTop: 20,
    borderRadius: 15,
    borderWidth: 1,
  },
  nextButton: {
    backgroundColor: '#1a2a6c',
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 12,
  },
  reviewBox: {
    backgroundColor: '#e6ecf5',
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#aab8c2',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3, // Android shadow
  },
  reviewBoxText: {
    fontSize: 16,
    color: '#102b5a',
    fontWeight: 'bold',
  },
});
