import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { courses } from '../data/courses';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function CourseDetailScreen({ route }) {
  //const id = 2; //route.params
  const { id } = route.params;
  const navigation = useNavigation();

  const course = courses.find(course => course.id === id);

  if (!course) {
    return (
      <View>
        <Text style={styles.err}>Course not found!</Text>
        <Text style={styles.errText}>Please choose from available courses.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
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

      {/*Go back*/}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>

      <View style={styles.upperPart}>
        {/* Course Title Bar */}
        <View style={styles.titleBox}>
          <Text style={styles.courseTitle}>{course.title}</Text>
        </View>

        {/* Course Description */}
        <View style={styles.descriptionBox}>
          <Text style={styles.descriptionText}>{course.description}</Text>
        </View>
      </View>

      {/* List of Modules */}
      <View style={styles.ModuleHeader}>
        <Text style={styles.ModuleHeaderText}>Modules</Text>
      </View>
      <ScrollView style={styles.modulesList}>
        {course.modules.map((module, index) => (
          <TouchableOpacity
            key={index}
            style={styles.moduleBox}
            onPress={() => navigation.navigate('Module', { courseId: course.id, moduleIndex: index })}
          >
            <Text style={styles.moduleTitle}>{index + 1}.    {module.title}</Text>
            <Text style={styles.moduleProgress}>{module.progress}%</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Bottom Tab Bar */}
          <View style={styles.bottomBar}>
          <TouchableOpacity style={styles.Button}
          onPress={()=> navigation.navigate('Home')}>
            <Ionicons name ="home" size={30} color="#545e74" />
          </TouchableOpacity>
      
          <TouchableOpacity style={styles.Button}>
            <Ionicons name= "person" size={30} color="#545e74" />
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
  err: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 100,
    paddingHorizontal: 10,
    paddingBottom: 15,
    color: 'red',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#545e74',
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
  errText:{
    fontSize: 15,
    paddingHorizontal: 10,
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
  menuIcon: {
    fontSize: 30,
    color: 'black',
  },
  headerTitle: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    paddingTop: 10,
  },
  profileCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  titleBar: {
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f1f1',
  },
  courseTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
  modulesList: {
    paddingHorizontal: 16,
  },
  moduleBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#102b5a',
    padding: 16,
    borderRadius: 6,
    marginBottom: 15,

  },
  moduleTitle: {
    fontSize: 16,
    color: 'white',
  },
  moduleProgress: {
    fontSize: 16,
    color: 'white',
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
    marginBottom: 30,
  },
  courseTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  descriptionBox: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 10,
    marginHorizontal: 16,
    marginBottom: 16,
    marginBottom: 60,
    borderWidth: 1,
  },
  descriptionText: {
    fontSize: 14,
    color: 'black',
    lineHeight: 20,
  },
  ModuleHeader: {
    padding: 12,
    borderRadius: 12,
    marginHorizontal: 16,
  },
  ModuleHeaderText: {
    fontSize: 14,
    color: 'black',
    lineHeight: 20,
    fontWeight: 'bold',
  },
    bottomBar:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 30,
        backgroundColor: '#fbf5ed',
        alignItems: 'center',
        borderBlockColor: '#c8d2d1',
        borderTopWidth: 1,

    },
    Button: {
        alignItems: 'center',
    },
    upperPart: {
      marginTop:30,
    },

});
