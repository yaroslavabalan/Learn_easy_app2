import React, { useState }from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Entypo from '@expo/vector-icons/Entypo';
import { courses } from '../data/courses';

export default function CourseListScreen() {
    const navigation = useNavigation();

    const allTopics = courses;

    const [search, setSearch] = useState('');
    
    const filter = allTopics.filter(topic => topic.title.toLowerCase().includes(search.toLowerCase()));
  
        const [showLogout, setShowLogout] = useState(false);
        const [showMenu, setShowMenu] = useState(false);
        
        

  return (

<View style={styles.container}>
 {/* Top Bar */} 
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
     
 
   

   {/* Search courses */} 
    <Text style={styles.titleExplore}> Find your favorite topics</Text>
    <ScrollView contentContainerStyle={styles.container}>
    <TextInput
      placeholder = "Search"
      value = {search}
      onChangeText={setSearch}
      style={styles.searchInput}
      placeholderTextColor="#aaa"
    />
    <ScrollView>
    {filter.map((topic)=>( 
        <TouchableOpacity
         key={topic.id} style={styles.Card}
        onPress={()=> navigation.navigate('CourseDetail', { id: topic.id })}>
            <View style = {styles.backgroundPictCard}>
            <Image
            source={topic.image}
            style={styles.pictCard}
                />
                </View>
             <Text style={styles.cardText}>{topic.title}</Text>
        </TouchableOpacity>
    ))}
    </ScrollView>
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

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#545e74',
    },
    titleExplore:{
        fontSize: 22,
        fontWeight: 'bold',
        color: '#102b5a',
        marginTop: 12,
        marginBottom: 8,
        textAlign: 'center'
    },
    avatar: {
      width: 36,
      height: 36,
      borderRadius: 18,
      resizeMode: 'cover',
    },
    searchInput: {
      margin: 16,
      backgroundColor: 'white',
      padding: 12,
      borderRadius: 12,
      fontSize: 16,
      color: 'black',
      borderWidth: 1,
      borderColor: '#304a94',
      marginBottom: 20,
    },
    Card: {
        height: 80,
      backgroundColor: '#304a94',
      borderRadius: 16,
      padding: 16,
      margin: 16,
      flexDirection: 'row',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 4,

    },
    pictCard: {
      width: 60,
      height: 60,
      resizeMode: 'contain',
      marginRight: 16,
    },
    backgroundPictCard:{
        backgroundColor: 'white',
        width: 60,
        height: 60,
        borderRadius: 50,
    },
    cardText: {
      fontSize: 16,
      fontWeight: '500',
      color: 'white',
      flexShrink: 1,
      paddingLeft: 15,
    
    },
});
    
