import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { courses } from '../data/courses';

export default function ModuleScreen({ route }) {
  const { courseId, moduleIndex } = route.params;
  const navigation = useNavigation();

  const course = courses.find(c => c.id === courseId);
  const module = course?.modules[moduleIndex];

  if (!course || !module) {
    return (
      <View style={styles.centered}>
        <Text>Module not found.</Text>
      </View>
    );
  }

  const progress = module.progress;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.topBar}>
        <TouchableOpacity>
          <Ionicons name="menu" size={28} color="#545e74" />
        </TouchableOpacity>
        <Text style={styles.title}>Learn Easy</Text>
        <TouchableOpacity>
          <Image source={require('../assets/profile1.png')} style={styles.avatar} />
        </TouchableOpacity>
      </View>

      {/* Go back */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>

      <View style={styles.upperPart}>
      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.titleBox}>
          <Text style={styles.courseTitle}>{course.title}</Text>
        </View>

        <View style={styles.descriptionBox}>
          <Text style={styles.descriptionText}>{course.description}</Text>
        </View>

        <View style={styles.ModuleBox}>
          <Text style={styles.moduleTitle}>{moduleIndex + 1}.    {module.title}</Text>
          <Text style={styles.moduleIntro}>{module.intro}</Text>

          <View style={styles.optionsRow}>
            {['Text', 'Video', 'Quiz'].map(option => (
              <TouchableOpacity
                key={option}
                style={styles.optionBox}
                onPress={() => navigation.navigate(option, {
                  courseId: course.id,
                  moduleIndex: moduleIndex,
                  moduleDescription: module.description,
                  moduleOneQuestion: module.questions[0],
                  moduleQuestion: module.questions,
                })}
              >
                <Ionicons name={
                  option === 'Text' ? 'document-text' :
                  option === 'Video' ? 'videocam' : 'help-circle'
                }
                size={30}
                color="white" />
                <Text style={styles.optionLabel}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.progressBox}>
            <Text style={styles.progressText}>Progress: {progress}%</Text>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: `${progress}%` }]} />
            </View>
          </View>
        </View>
      </ScrollView>
      </View>
      

      {/* Bottom Bar */}
      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => navigation.navigate('Home')}
        >
          <Ionicons name="home" size={30} color="#545e74" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.Button}>
          <Ionicons name="person" size={30} color="#545e74" />
        </TouchableOpacity>
      </View>
      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbf5ed',
  },
  scrollContainer: {
    paddingBottom: 100,
  },
  ModuleBox: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'grey',
    marginHorizontal: 16,
    borderRadius: 10,
    paddingBottom: 20,
  },
  topBar: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#fbf5ed',
    alignItems: 'center',
    borderBottomColor: '#c8d2d1',
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#545e74',
  },
  avatar: {
    height: 30,
    width: 30,
    borderRadius: 18,
    resizeMode: 'cover',
  },
  backButton: {
    position: 'absolute',
    left: 0,
    top: 90,
    padding: 8,
    zIndex: 10,
  },
  backText: {
    fontSize: 40,
    color: 'black',
  },
  titleBox: {
    backgroundColor: '#304a94',
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 12,
    borderRadius: 15,
  },
  courseTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
  descriptionBox: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 12,
    marginHorizontal: 16,
    marginBottom: 16,
    borderWidth: 1,
  },
  descriptionText: {
    fontSize: 14,
    color: 'black',
    lineHeight: 20,
  },
  moduleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  moduleIntro: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    marginBottom: 20,
  },
  optionBox: {
    alignItems: 'center',
    backgroundColor: '#102b5a',
    padding: 14,
    borderRadius: 10,
    width: 80,
  },
  optionLabel: {
    marginTop: 6,
    fontSize: 12,
    color: 'white',
  },
  progressBox: {
    alignItems: 'center',
    marginTop: 24,
  },
  progressText: {
    fontSize: 14,
    marginBottom: 6,
  },
  progressBar: {
    width: '80%',
    height: 10,
    backgroundColor: '#eee',
    borderRadius: 6,
    overflow: 'hidden',
    borderWidth: 1,
  },
  progressFill: {
    height: '100%',
    backgroundColor: 'green',
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 30,
    backgroundColor: '#fbf5ed',
    alignItems: 'center',
    borderTopColor: '#c8d2d1',
    borderTopWidth: 1,
  },
  Button: {
    alignItems: 'center',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  upperPart: {
    marginTop:30,
    flex: 1,
  },
});
