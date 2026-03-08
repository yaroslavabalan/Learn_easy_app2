import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const UserScreen = ({ route, navigation }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showLogout, setShowLogout] = useState(false);

  const userData = route?.params?.userData || {
    name: 'Guest',
    daysStreak: 8,
    lessonsLearned: 16,
    points: 120,
    courses: [
      { name: 'World Geography', progress: 50 },
      { name: 'Human Body & Health', progress: 34 },
      { name: 'Science in Everyday Life', progress: 5 },
    ],
  };

  return (
    <View style={styles.mainContainer}>
      {/* Top Bar with menu, title, and avatar */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => setShowMenu(!showMenu)}>
          <Ionicons name="menu" size={28} color="#545e74" />
        </TouchableOpacity>

        <Text style={styles.title}>Profile</Text>

        <TouchableOpacity onPress={() => setShowLogout(!showLogout)}>
          <Image source={require('../assets/profile1.png')} style={styles.avatarIcon} />
        </TouchableOpacity>
      </View>

      {showMenu && (
        <View style={styles.menuDropdown}>
          <View style={styles.menuItemDisabled}>
            <Text style={styles.disabledText}>About this app</Text>
          </View>
          <View style={styles.menuItemDisabled}>
            <Text style={styles.disabledText}>Settings</Text>
          </View>
        </View>
      )}

      {showLogout && (
        <View style={styles.logoutMenu}>
          <TouchableOpacity onPress={() => navigation.replace('Auth')}>
            <Text style={styles.logoutText}>Log out</Text>
          </TouchableOpacity>
        </View>
      )}

      <ScrollView style={styles.container}>
        <View style={styles.profileHeader}>
          <Image source={require('../assets/profile1.png')} style={styles.avatar} />
          <Text style={styles.name}>{userData.name}</Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Ionicons name="flame" size={28} color="#0D47A1" />
            <Text style={styles.statText}>{userData.daysStreak} day streaks</Text>
          </View>
          <View style={styles.statCard}>
            <Ionicons name="school" size={28} color="#0D47A1" />
            <Text style={styles.statText}>{userData.lessonsLearned} lessons learned</Text>
          </View>
          <View style={styles.statCard}>
            <Ionicons name="trophy" size={28} color="#0D47A1" />
            <Text style={styles.statText}>{userData.points} points</Text>
          </View>
        </View>

        <View style={styles.motivationBox}>
          <Text style={styles.motivationText}>You're doing great! Keep up the amazing work!</Text>
        </View>

        <Text style={styles.sectionTitle}>Your Courses</Text>
        {userData.courses.map((course, index) => (
          <View key={index} style={styles.courseProgress}>
            <Text style={styles.courseName}>{course.name}</Text>
            <View style={styles.progressBarBackground}>
              <View style={[styles.progressBarFill, { width: `${course.progress}%` }]} />
            </View>
            <Text style={styles.progressText}>{course.progress}% completed</Text>
          </View>
        ))}
      </ScrollView>

      {/* Bottom Tab Bar */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home" size={30} color="#545e74" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.Button}>
          <Ionicons name="person" size={30} color="#545e74" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fbf5ed',
  },
  container: {
    flex: 1,
    padding: 20,
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
  avatarIcon: {
    height: 30,
    width: 30,
    borderRadius: 18,
    resizeMode: 'cover',
  },
  menuDropdown: {
    position: 'absolute',
    top: 70,
    left: 10,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    zIndex: 10,
  },
  menuItemDisabled: {
    paddingVertical: 8,
  },
  disabledText: {
    color: '#aaa',
    fontSize: 16,
    fontStyle: 'italic',
  },
  logoutMenu: {
    position: 'absolute',
    top: 85,
    right: 10,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
    zIndex: 100,
  },
  logoutText: {
    color: '#d11a2a',
    fontWeight: 'bold',
    fontSize: 16,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#102b5a',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  statCard: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: 'white',
    borderRadius: 16,
    elevation: 3,
  },
  statText: {
    marginTop: 8,
    color: '#102b5a',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#102b5a',
  },
  courseProgress: {
    marginBottom: 20,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 12,
  },
  courseName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#304a94',
    marginBottom: 10,
  },
  progressBarBackground: {
    height: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: 10,
    backgroundColor: '#304a94',
  },
  progressText: {
    marginTop: 5,
    fontSize: 12,
    color: '#545e74',
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
  motivationBox: {
    backgroundColor: '#fff3cd',
    padding: 15,
    marginVertical: 15,
    borderRadius: 12,
    borderLeftWidth: 5,
    borderLeftColor: '#304a94',
  },
  motivationText: {
    fontSize: 16,
    color: '#665c00',
    fontWeight: '600',
  },
});

export default UserScreen;
