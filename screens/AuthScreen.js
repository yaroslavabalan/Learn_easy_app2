import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const AuthScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const isValid = username.trim() !== '' && password.trim() !== '';
  
    const handleLogin = () => {
      if (!isValid) return;
  
      const userData = {
        name: username,
        daysStreak: Math.floor(Math.random() * 10) + 1,
        lessonsLearned: Math.floor(Math.random() * 20) + 1,
        points: Math.floor(Math.random() * 500) + 50,
      };
  
      navigation.navigate('Home', { userData });
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
  
   {/* Username */} 
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
      {/* Button login */} 
        <TouchableOpacity
          style={[styles.button, { backgroundColor: isValid ? '#304a94' : '#aaa' }]}
          onPress={handleLogin}
          disabled={!isValid}
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
  
      {/* button to sign up */} 
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.link}>Don’t have an account? Sign up</Text>
        </TouchableOpacity>
      </View>
    );
  };

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#fbf5ed',
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 20 },
  title: { 
    fontSize: 24, 
    marginBottom: 20,
    color: '#304a94',
    fontWeight: 'bold',
},

  input: {
    width: '100%', 
    height: 50, 
    borderWidth: 1, 
    borderColor: '#ccc',
    borderRadius: 8, 
    paddingHorizontal: 10, 
    marginVertical: 10
  },
  button: {
    backgroundColor: '#304a94', 
    padding: 15, 
    borderRadius: 8, 
    width: '100%', 
    alignItems: 'center'
  },
  buttonText: { 
    color: 'white', 
    fontWeight: 'bold' },
  link: { 
    marginTop: 15, 
    color: '#304a94' }
});

export default AuthScreen;