import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import axios from "axios";

const AuthScreen = ({ navigation}) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);
  const [registerType, setRegisterType] = useState(''); // null for no selection, 'individual', or 'community'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [reguser, setReguser] = useState({
    Name: "",
    Email: "",
    password: "",
    phone: "",
  });
 
  const [regcomm, setRegcomm] = useState({
    Name: "",
    Email: "",
    password: "",
    phone: "",
    desc: "",
    location: "",
    category: "",
    tags: "",
  })

  const handleLoginClick = async () => {
    setShowLogin(true);
    setShowRegistration(false);
    console.log("login!!")
    try {
        // Make the API request to your endpoint
        const response = await axios.post('http://192.168.43.34:4000/login', {
          email: email,
          password: password,
        });
          console.log(response)
        // Check the response and handle accordingly
        if (response.status === 200) {
            console.log("working");
          // Login successful, handle the result
          console.log('Login successful');
          navigation.navigate('Home');
          // Navigate to the next screen if needed
        } else {
          // Handle other status codes or errors
          console.error('Login failed');
        }
      } catch (error) {
        // Handle any errors
        console.error('An error occurred:', error);
      }
  };

  const handleRegisterClick = () => {
    setShowLogin(false);
    setShowRegistration(true);
  };

  const handleIndividualRegister = () => {
    setRegisterType('individual');
  };

  const handleCommunityRegister = () => {
    setRegisterType('community');
  };

  const handleIndvChange = (field, value) => {
    setReguser(prevState => ({
      ...prevState,
      [field]: value
    }));
  };

  const handleCommChange = (field, value) => {
    setRegcomm(prevState => ({
      ...prevState,
      [field]: value
    }));
  };

  const SetCommData = async () => {
    console.log("Individual Registration!!");
    console.log(regcomm);
    try {
      const response = await axios.post('http://192.168.43.34:4000/register-community', {
       regcomm
       ,
      });
        console.log(response)
      // Check the response and handle accordingly
      if (response.status === 200) {
          console.log("working");
        // Login successful, handle the result
        console.log('Login successful');
        navigation.navigate('Home');
        // Navigate to the next screen if needed
      } else {
        // Handle other status codes or errors
        console.error('Login failed');
      }
    } catch (error) {
      // Handle any errors
      console.error('An error occurred:', error);
    }
  }
  const SendIndvData = async () => {
      console.log("Individual Registration!!");
      console.log(reguser);
      try {
        const response = await axios.post('http://192.168.43.34:4000/register-user', {
         reguser,
        });
          console.log(response)
        // Check the response and handle accordingly
        if (response.status === 200) {
            console.log("working");
          // Login successful, handle the result
          console.log('Login successful');
          navigation.navigate('Home');
          // Navigate to the next screen if needed
        } else {
          // Handle other status codes or errors
          console.error('Login failed');
        }
      } catch (error) {
        // Handle any errors
        console.error('An error occurred:', error);
      }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.appName}>CommUnity-Link</Text>

      {!showLogin && !showRegistration && (
        <View>
          <TouchableOpacity onPress={handleLoginClick}>
            <Text style={styles.button}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleRegisterClick}>
            <Text style={styles.button}>Register</Text>
          </TouchableOpacity>
        </View>
      )}

      {showLogin && (
        <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <TouchableOpacity onPress={handleLoginClick} style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
      )}

      {showRegistration && (
        <View style={styles.formContainer}>
          <TouchableOpacity onPress={handleIndividualRegister}>
            <Text style={styles.button}>Individual</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleCommunityRegister}>
            <Text style={styles.button}>Community</Text>
          </TouchableOpacity>

{registerType === 'individual' && (
  <View>
    <Text>Name:</Text>
    <TextInput
      style={styles.input}
      placeholder="Enter your name"
      value={reguser.Name}
      onChangeText={text => handleIndvChange('Name', text)}
    />
    <Text>Email:</Text>
    <TextInput
      style={styles.input}
      placeholder="Enter your email"
      value={reguser.Email}
      onChangeText={text => handleIndvChange('Email', text)}
    />
    <Text>Password:</Text>
    <TextInput
      style={styles.input}
      placeholder="Enter your password"
      secureTextEntry={true}
      value={reguser.password}
      onChangeText={text => handleIndvChange('password', text)}
    />
    <Text>Phone Number:</Text>
    <TextInput
      style={styles.input}
      placeholder="Enter your phone number"
      value={reguser.phone}
      onChangeText={text => handleIndvChange('phone', text)}
    />
    <TouchableOpacity onPress={SendIndvData}>
      <Text style={styles.button}>Register</Text>
    </TouchableOpacity>
  </View>
)}


          {registerType === 'community' && (
            <View>
              <Text>Name:</Text>
              <TextInput 
              style={styles.input} 
              placeholder="Enter community name"
              value={regcomm.Name}
              onChangeText={text => handleCommChange('Name', text)}
              />
              <Text>Email:</Text>
              <TextInput 
              style={styles.input} 
              placeholder="Enter your email" 
              value={regcomm.Email}
              onChangeText={text => handleCommChange('Email', text)}
              />
              <Text>Password:</Text>
              <TextInput 
              style={styles.input} 
              placeholder="Enter your password" 
              secureTextEntry={true}
              value={regcomm.password}
              onChangeText={text => handleCommChange('password', text)}
              />
              <Text>Phone Number:</Text>
              <TextInput 
              style={styles.input} 
              placeholder="Enter your phone number"
              value={regcomm.phone}
              onChangeText={text => handleCommChange('phone', text)}
              />
              <Text>Description:</Text>
              <TextInput 
              style={styles.input} 
              placeholder="Enter community description"
              value={regcomm.desc}
              onChangeText={text => handleCommChange('desc', text)}
              />
              <Text>Location:</Text>
              <TextInput 
              style={styles.input} 
              placeholder="Enter community location"
              value={regcomm.location}
              onChangeText={text => handleCommChange('location', text)}
              />
              {/* <Text>Logo:</Text>
              <TextInput style={styles.input} placeholder="Enter URL of community logo" /> */}
              <Text>Category:</Text>
              <TextInput 
              style={styles.input} 
              placeholder="Enter community category" 
              value={regcomm.category}
              onChangeText={text => handleCommChange('category', text)}
              />
              <Text>Tags:</Text>
              <TextInput 
              style={styles.input} 
              placeholder="Enter community tags"
              value={regcomm.tags}
              onChangeText={text => handleCommChange('tags', text)}
              />
              <TouchableOpacity onPress={SetCommData}>
                <Text style={styles.button}>Register</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'blue',
  },
  formContainer: {
    width: '80%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default AuthScreen;
