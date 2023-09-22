import { SafeAreaView, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import CustomButton from './CustomButton';
import CustomInput from './CustomInput';
import UserTabs from './UserTabs.jsx';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useForm } from "react-hook-form";

async function loadFonts() {
  await Font.loadAsync({
    'Oswald-Medium': require('../../../assets/fonts/Oswald-Medium.ttf'),  // adjust the path accordingly
  });
};

const NewPasswordScreen = () => {
  // const [code, setCode] = useState('');
  // const [newPassword, setNewPassword] = useState('');
  const { control, handleSubmit, formState: {errors} } = useForm();
  const navigation = useNavigation();


  const onSubmitPressed = () => {
    navigation.navigate('UserTabs');
  };

  const onBackSignInPressed = () => {
    navigation.navigate('Welcome');
  };


  return (
    <SafeAreaView style={styles.container}>

      <SafeAreaView style={styles.mainContent}>

        <Text style = {styles.text}>Reset your password</Text>


        <CustomInput name="code" placeholder="Code"  control={control} rules={{required: 'Confirmation Code is required'}}/>
        <CustomInput name="newPassword" placeholder="Enter your new password" control={control} rules={{required: 'Password is required', minLength: {value: 8, message: 'Password must be at least 8 characters long'}}} secureTextEntry/>



        <CustomButton
          style={styles.button}
          textStyle={{ ...styles.commonFont, color: '#A9927D' }}
          title="Submit"
          onPress={handleSubmit(onSubmitPressed)}
          color="#171412"
        />


        <TouchableOpacity>
          <Text onPress={onBackSignInPressed} style={styles.clickableText}>Back to Sign In</Text>
        </TouchableOpacity>
      </SafeAreaView>



    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    justifyContent: 'center'
  },

  image: {
    marginLeft: 30,
    width: "60%",
    height: 100,
  },

  container:{
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#D0D3D2',
    paddingBottom: 20,
  },

  button: {
    marginTop: 15,
    width: 350,
    alignSelf: 'center',
  },

  clickableText: {
    marginTop: 30,
    color: '#171412',
    alignSelf: 'center',
    textDecorationLine: 'underline',
    fontFamily: 'Oswald-Medium',
  },

  text: {
    marginLeft: 20,
    marginRight: 33,
    marginBottom: 30,
    fontSize: 23,
    color: '#171412',
    alignSelf: 'center',
    fontFamily: 'Oswald-Bold',
  },

  term: {
    marginLeft: 33,
    marginRight: 33,
    marginBottom: 30,
    marginTop: 10,
    fontSize: 14,
    color: '#171412',
    alignSelf: 'center',
    fontFamily: 'Oswald-Light',
  },

  link: {
    color: '#49111C',

  }
})
export default NewPasswordScreen;