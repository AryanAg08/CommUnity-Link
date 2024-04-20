import { View,Text,TextInput,StyleSheet,Button,Image } from "react-native"
import { TouchableOpacity } from "react-native-web"
import React,{ useState } from "react";
export default function Profile(){
    const styles=StyleSheet.create({
        textInputStyles:{
            borderColor:"#000",
            borderWidth:1,
            padding:9,
            borderRadius:5,
            
        },
        buttonStyle:{
            backgroundColor:"black",
            borderRadius:"0.1rem",
            padding:"1rem",
            margin:"0.5rem",
            color:"white",
            alignContent:"center",
            alignItems:"center",
            
        }
        
        
    })
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        interest:'',
        skill:'',
        preferences:''
      });
      const handleInputChange = (key, value) => {
        setUserData({ ...userData, [key]: value });
      };
    
      const handleSubmit = () => {
        // console.log('User Data:', userData);
        console.log(userData.preferences);
    //    setUserData({ name: userData.name, email: userData.email });
      };
    return(
        <View>
        <Image
            source={{uri: 'C:\Users\Ashmeet\OneDrive\Desktop\Projects\reactNative\demo\Profiles.profile.png'}}
        />+
        <Text>Your Profile:</Text>
        <Text>Name</Text>
        <TextInput value={userData.name}  onChangeText={(text) => handleInputChange('name', text)} style={styles.textInputStyles} />
        <Text>Email-Id</Text>
        <TextInput value={userData.email} onChangeText={(text) => handleInputChange('email', text)} style={styles.textInputStyles}/>
        <Text>Interest</Text>
        <TextInput value={userData.interest} onChangeText={(text) => handleInputChange('interest', text)}  style={styles.textInputStyles} />
        <Text>Skills</Text>
        <TextInput value={userData.skill} onChangeText={(text) => handleInputChange('skill', text)} style={styles.textInputStyles}/>
        <Text>Preferences</Text>
        <TextInput value={userData.preferences} onChangeText={(text) => handleInputChange('preferences', text)} style={styles.textInputStyles}/>
        <Button style={styles.buttonStyle} onPress={handleSubmit} title="Save Changes" />
        </View>
    )
}
