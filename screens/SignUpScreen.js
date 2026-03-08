import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const SignUpScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [purpose, setPurpose] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const purposes = ['Education', 'Career', 'Work', 'Family', 'Curiosity', 'Travel'];


  const isValid = firstName && lastName && dob && purpose && username && password;

  const handleSignUp = () => {
    if (!isValid) return;

    const userData = {
      name: `${firstName}`,
      daysStreak: 0,
      lessonsLearned: 0,
      points: 0
    };

    navigation.navigate('Home', { userData });
  };

  return (
     <ScrollView contentContainerStyle>
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

       {/* Name */} 
      <TextInput
        style={styles.input}
        placeholder="First Name"
        onChangeText={setFirstName}
        value={firstName}
      />
       {/* Last Name */} 
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        onChangeText={setLastName}
        value={lastName}
      />
       {/* Date of Birth */} 
      <TextInput
        style={styles.input}
        placeholder="Date of Birth (YYYY-MM-DD)"
        onChangeText={setDob}
        value={dob}
      />
      
      {/* Purpose */} 
    <View style={styles.dropdownWrapper}>
        <TouchableOpacity
            style={styles.dropdownButton}
            onPress={() => setShowDropdown(!showDropdown)}
        >
            <Text style={styles.dropdownButtonText}>
            {purpose ? purpose : 'Select Purpose'}
            </Text>
            <Ionicons
            name={showDropdown ? 'chevron-up' : 'chevron-down'}
            size={20}
            color="#333"
            />
        </TouchableOpacity>

        {showDropdown && (
            <View style={styles.dropdownList}>
            {purposes.map((item) => (
                <TouchableOpacity
                key={item}
                style={styles.dropdownItem}
                onPress={() => {
                    setPurpose(item);
                    setShowDropdown(false);
                }}
                >
                <Text style={styles.dropdownItemText}>{item}</Text>
                </TouchableOpacity>
            ))}
            </View>
        )}
        </View>
      
        {/* User Name */} 
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={setUsername}
        value={username}
      />
         {/* Password */} 
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />

      <TouchableOpacity
        style={[styles.button, { backgroundColor: isValid ? '#304a94' : '#aaa' }]}
        onPress={handleSignUp}
        disabled={!isValid}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    justifyContent: 'center',
    backgroundColor: '#fbf5ed',
 },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    marginBottom: 20,
    color: '#304a94',
 },
  input: {
    borderWidth: 1, 
    borderColor: '#ccc', 
    borderRadius: 8,
    paddingHorizontal: 10, 
    marginBottom: 10,
     height: 50,
     backgroundColor: '#fff',
  },
  
  button: {
    padding: 15, 
    borderRadius: 8, 
    alignItems: 'center'
  },
  buttonText: { 
    color: '#fff', 
    fontWeight: 'bold'
 },
    dropdownWrapper: {
        marginVertical: 15,
        width: '100%',
 },
    dropdownButton: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 15,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
},
     dropdownButtonText: {
        fontSize: 16,
        color: '#333',
},
    dropdownList: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        marginTop: 5,
        backgroundColor: '#fff',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
},
     dropdownItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
},
    dropdownItemText: {
        fontSize: 16,
        color: '#333',
},
      
});

export default SignUpScreen;
