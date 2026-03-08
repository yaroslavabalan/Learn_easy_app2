import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Entypo from '@expo/vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import { courses } from '../data/courses';

const HomeScreen = ({ route, navigation }) => {
    const userData = route?.params?.userData || {
        name: 'Guest',
        daysStreak: 0,
        lessonsLearned: 0,
        points: 0,
      };

      const [showLogout, setShowLogout] = useState(false);
      const [showMenu, setShowMenu] = useState(false);
      
      

    
  
  return (

    <View style={styles.container}>
      {/* Top Bar with menu, title, and avatar */}
      <View style={styles.topBar}>
        {/* Left: Menu icon */}
        <TouchableOpacity onPress={() => setShowMenu(!showMenu)}>
          <Ionicons name="menu" size={28} color="#545e74" />
        </TouchableOpacity>

        {/* Center: App Title */}
        <Text style={styles.title}>Learn Easy</Text>

        {/* Right: Avatar button */}
        <TouchableOpacity onPress={() => setShowLogout(!showLogout)}>
          <Image source={require('../assets/profile1.png')} style={styles.avatar} />
        </TouchableOpacity>
      </View>

      {/* Dropdown menu from menu icon (non-clickable items) */}
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

      {/* Logout menu from avatar */}
      {showLogout && (
        <View style={styles.logoutMenu}>
          <TouchableOpacity onPress={() => navigation.replace('Auth')}>
            <Text style={styles.logoutText}>Log out</Text>
          </TouchableOpacity>
        </View>
      )}
    

  

     {/* Main Page */} 
 <ScrollView contentContainerStyle>
    <View style={styles.content}>
        <View style={styles.wraper}>
        <View style={styles.content1}>
        <Text style={styles.titleWelcome}>Welcome,</Text>
        <Text style={styles.titleWelcome}> {userData.name}!</Text>
        <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
        />
        </View>
        </View>

        {/* User score */} 
         <View style ={styles.score}>
         <View style={styles.scoreCards}>
             <Entypo name="flash" size={28} color="#0D47A1" />
             <Text style={styles.scoreLabel}> {userData.daysStreak} day streaks</Text>
             </View>
             <View  style={styles.scoreCards}>
             <Entypo name="edit" size={28} color="#0D47A1" />
             <Text style={styles.scoreLabel}> {userData.lessonsLearned} lessons learned</Text>
            </View>
            <View  style={styles.scoreCards}>
            <Entypo name="rocket"  size={28} color="#0D47A1" />
            <Text style={styles.scoreLabel}>{userData.points} points collected</Text>
            </View>


         </View>

        {/*  Explore Button */} 
         <TouchableOpacity style={styles.exploreButton}
         onPress={()=> navigation.navigate('Courses')}
         >
          <Text style = {styles.exploreText}> Explore Topics </Text>
        </TouchableOpacity>
         
        {/*  Recommended courses */} 
        <Text style = {styles.RecCourses}> Recommended courses </Text>

        <View style ={styles.course}>
        <TouchableOpacity
            style={styles.courseCard}
            onPress={() => navigation.navigate('CourseDetail', { id: 1 })}
            >
             <View style={styles.courseCard}>
             <Image
                source={require('../assets/geography.png')}
                style={styles.pictCard}
                />
             <Text style={styles.courseLabel}> World Geography</Text>
             <View style = {styles.complete}>
             <Text style={styles.completeLabel}> 0% complete</Text>
             </View>
             </View>
             </TouchableOpacity>
             <TouchableOpacity
            style={styles.courseCard}
            onPress={() => navigation.navigate('CourseDetail', { id: 4 })}
            >
             <View style={styles.courseCard}>
             <Image
                source={require('../assets/health.png')}
                style={styles.pictCard}
                />
             <Text style={styles.courseLabel}>Human Body & Health</Text>
             <View style = {styles.complete}>
             <Text style={styles.completeLabel}> 0% complete</Text>
             </View>
            </View>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.courseCard}
            onPress={() => navigation.navigate('CourseDetail', { id: 5 })}
            >
            <View style={styles.courseCard}>
            <Image
                source={require('../assets/science.png')}
                style={styles.pictCard}
                />
            <Text style={styles.courseLabel}>Science in Everyday Life</Text>
            <View style = {styles.complete}>
             <Text style={styles.completeLabel}> 0% complete</Text>
             </View>
            </View>
            </TouchableOpacity>

        </View>

      </View>
        </ScrollView>



     {/* Bottom Tab Bar */}
     <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.Button}>
          <Ionicons name ="home" size={30} color="#545e74" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('User')}>
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

        avatar:{
            height: 30,
            width: 30,
            borderRadius:18,
            resizeMode: 'cover',
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

        content:{
            flex: 1,
        },

        title: {
            fontSize: 24,
            fontWeight: 'bold',
            color: '#545e74',
        },
        wraper:{
            height: 200,
            backgroundColor: '#9cd3e7', 
            padding: 12,
            borderRadius: 20,
            margin: 20,
            backgroundColor: 'rgba(96, 166, 227, 0.2)',
            
        

        },
        content1:{
            backgroundColor: 'white', 
            borderRadius: 16,
            padding: 20,
            height: 100,
            justifyContent: 'center',
            position: 'relative',
            overflow: 'visible',
            
        
        
        },

        titleWelcome:{
        color: '#102b5a',
        fontSize: 26,
        fontWeight: 'bold',
        maxWidth: '100%',
        flexShrink: 1,             
        flexWrap: 'wrap',  
       

        },

        logo:{
        position: 'absolute',
        right: -15,
        top: -5,
        width: 200,
        height: 200,
        resizeMode: 'contain',
        zIndex: 10,
    
        },
        exploreButton:{
            backgroundColor: '#304a94',
            borderRadius: 20,
            paddingVertical: 15,
            paddingHorizontal: 130,
            alignSelf: 'center',
            marginVertical: 25,
            shadowColor: '#304a94',
            shadowOffset: { width: 0, height: 6 },
            shadowOpacity: 0.50,
            shadowRadius: 10,
        },

        exploreText:{
            color: 'white',
            fontSize: 16,
            fontWeight: '600',
        },
        score:{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 15,

        },
        scoreCards:{
            flexDirection: 'row',
            justifyContent: 'space-around',
            backgroundColor: 'white',
            borderRadius: 16,
            width: 120,
            height: 80,
            padding: 10,
            margin: 5,
            alignItems: 'center',
            borderWidth: 0.2,
        },

        scoreLabel:{
            textAlign: 'left',
            color: '#102b5a',
            paddingLeft: 7,
            fontWeight: '400',
            minWidth: 80,
            maxWidth: 120,
            flexShrink: 1,
        
        },

        RecCourses:{
            color: '#102b5a',
            fontSize: 24,
            fontWeight: 'bold',
            textAlign: 'left',
            marginTop: 15,
            marginLeft: 15,

        },

        course:{
            flexDirection: 'row',
            justifyContent: 'space-around',
            margin: 15,
        },
        courseCard:{
            height: 200,
            justifyContent: 'space-around',
            backgroundColor: 'white',
            borderRadius: 16,
            width: 120,
            padding: 10,
            marginVertical: 0,
            alignItems: 'center',
        },
        courseLabel:{
            marginTop: 12, 
            textAlign: 'center',
            fontWeight: 'bold',
            color: '#102b5a',
        },
        complete:{
            borderRadius: 10,
            borderBlockColor: '#102b5a',
            borderWidth: 1.5,
            width: 100,
            height: 25,
            marginTop: 20,
        },
        completeLabel:{
            textAlign: 'center',
            fontSize: 10,
            marginTop: 5,

        },
        pictCard:{
            height: 90,
            width: 90,
            resizeMode: 'contain',
            
            
       
    

        },
});

export default HomeScreen;