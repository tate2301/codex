import React, { useState } from 'react';
import { ActivityIndicator, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import tailwind from 'tailwind-rn';
import firebase from '../../lib/__firebase'
import OverlayContainer from './Overlay';

export default function Login({navigation}) {
  const [auth, setAuth] = useState({
    values: {email: "", password: ""},
    errors: {email: "", password: "", base: ""},
    loading: false
  })
  const provider = new firebase.auth.GoogleAuthProvider();


  const validateEmail = () => {
    setAuth({...auth, errors: {...auth.errors, email: ""}})
    if(auth.values.email === "") {
      setAuth({...auth, errors: {...auth.errors, email: "Email is required"}})
      return false
    }

    return true
  }

  const validatePassword = () => {
    setAuth({...auth, errors: {...auth.errors, password: ""}})
    if(auth.values.email === "") {
      setAuth({...auth, errors: {...auth.errors, password: "Password is required"}})
      return false
    } else if(auth.values.password.length < 8) {
      setAuth({...auth, errors: {...auth.errors, password: "Password requires at least 8 characters"}})
      return false
    }
    return true
  }
  
  const authWithEmail = () => {
    setAuth({...auth, loading: true, errors: {base: "", email: "", password: ""}})
    if(validateEmail() && validatePassword()) {
      firebase.auth().signInWithEmailAndPassword(auth.values.email, auth.values.password)
        .then((userCredential) => {
          setAuth({...auth, loading: false})
          //navigation.navigate('Home')

        })
        .catch((error) => {
          setAuth({...auth, loading: false, errors: {...auth.errors, base: error.message}})
          
        });
    }
  }

  return(
    <Container>
      {
        auth.loading && (
          <View style={[
            {
              elevation: 8, 
              zIndex: 8, 
              position: 'absolute', 
              top: 0, 
              left: 0,
              display: 'flex', 
              justifyContent: 'center',
              alignItems: 'center'
          },tailwind('h-full w-full items-center bg-gray-500 px-8')]}>
            <View style={tailwind('bg-white w-full p-6 rounded-lg items-center')}>
              <ActivityIndicator color="#121212" size="large" />
              <Text style={tailwind('text-gray-800 text-xl font-medium mt-4')}>
                Loading
              </Text>
            </View>
          </View>
        )
      }
      <TopContainer>
        <Heading>Welcome back</Heading>
        <Text style={tailwind('text-gray-600')}>Sign in to your account now to start learning.</Text>
        
        <TextInputContainer>
          <TextInput 
            onChangeText={(value) => setAuth({...auth, values: {...auth.values, email: value}})} 
            placeholder="Email" 
            style={tailwind('w-full p-2 border-2 border-gray-400 rounded')}/>
          {auth.errors.email !== "" && <Text style={tailwind('pt-1 text-xs text-red-500')}>{auth.errors.email}</Text>}
          
          <TextInput 
            onChangeText={(value) => setAuth({...auth, values: {...auth.values, password: value}})}
            placeholder="Password" 
            secureTextEntry={true}
            style={tailwind('w-full mt-4 p-2 border-2 border-gray-400 rounded')}/>
          {auth.errors.password !== "" && <Text style={tailwind('pt-1 text-xs text-red-500')}>{auth.errors.password}</Text>}

          <TouchableOpacity style={tailwind('mt-2')}>
            <Text style={tailwind('text-gray-700')}>Forgot your password?</Text>
          </TouchableOpacity>
          {auth.errors.base !== "" && <Text style={tailwind('py-1 text-xs text-red-500')}>{auth.errors.base}</Text>}
        </TextInputContainer>
        
        <ButtonsContainer>
          <TouchableOpacity disabled={auth.loading} onPress={authWithEmail} style={tailwind(`w-full ${auth.loading ? 'bg-gray-400' : 'bg-gray-800' } py-3 px-4 rounded`)}>
            <Text style={tailwind('text-white text-center font-bold')}>Sign in</Text>
          </TouchableOpacity>
        </ButtonsContainer>
      </TopContainer>
      <BottomContainer>
        <Text>
          Do not have an account?
        </Text>
        <TouchableOpacity onPress={() => navigation.push('SignUp')}>
          <Text style={tailwind('font-bold px-2')}>Sign up</Text>
        </TouchableOpacity>
      </BottomContainer>
    </Container>
  )
}

const Container = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: space-between;
`;

const BottomContainer = styled.View`
  width: 100%;
  padding: 16px 0;
  flex-direction: row;
  justify-content: center;
  padding: 16px;
`

const TopContainer = styled.View`
  width: 100%;
  padding: 16px 0;
  padding: 16px;
`

const ButtonsContainer = styled.View`
  padding: 16px 0;
  width: 100%;
`

const TextInputContainer = styled.View`
  padding: 20px 0;
  width: 100%;
`

const Heading = styled.Text`
  font-size: 20px;
  color: #121212;
  font-weight: 700;
`

const Text = styled.Text`
  font-size: 14px;
`;