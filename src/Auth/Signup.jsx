import React, { useState } from 'react';
import { TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import tailwind from 'tailwind-rn';
import firebase from '../../lib/__firebase'

export default function SignUp({navigation}) {
    const [auth, setAuth] = useState({
        values: {email: "", password: "", fullname: ""},
        errors: {email: "", password: "", fullname: "", base: ""},
        loading: false
      })
    
    
      const validateEmail = () => {
        setAuth({...auth, errors: {...auth.errors, email: ""}})
        if(auth.values.email === "") {
          setAuth({...auth, errors: {...auth.errors, email: "Email is required"}})
          return false
        }
    
        return true
      }

      const validateFullname = () => {
        setAuth({...auth, errors: {...auth.errors, fullname: ""}})
        if(auth.values.email === "") {
          setAuth({...auth, errors: {...auth.errors, fullname: "Fullname is required"}})
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
        setAuth({...auth, errors: {...auth.errors, base: ""}})
        if(validateEmail() && validatePassword() && validateFullname()) {
          firebase.auth().createUserWithEmailAndPassword(auth.values.email, auth.values.password)
            .then((userCredential) => {
              var user = userCredential.user;
            })
            .catch((error) => {
              setAuth({...auth, errors: {...auth.errors, base: error.message}})
              
            });
        }
      }

  return(
    <Container>
      <TopContainer>
        <Heading>Get started</Heading>
        <Text style={tailwind('text-gray-600')}>Create an account now to start learning programming. It's free.</Text>
        
        <TextInputContainer>
            <TextInput 
                onChangeText={(value) => setAuth({...auth, values: {...auth.values, fullname: value}})} 
                placeholder="Fullname" 
                style={tailwind('w-full p-2 border-2 border-gray-400 rounded')}/>
            {auth.errors.fullname !== "" && <Text style={tailwind('pt-1 text-xs text-red-500')}>{auth.errors.fullname}</Text>}
            <TextInput 
                onChangeText={(value) => setAuth({...auth, values: {...auth.values, email: value}})} 
                placeholder="Email" 
                style={tailwind('w-full mt-4 p-2 border-2 border-gray-400 rounded')}/>
            {auth.errors.email !== "" && <Text style={tailwind('pt-1 text-xs text-red-500')}>{auth.errors.email}</Text>}
          
          <TextInput 
                onChangeText={(value) => setAuth({...auth, values: {...auth.values, password: value}})}
                placeholder="Password" 
                secureTextEntry={true}
                style={tailwind('w-full mt-4 p-2 border-2 border-gray-400 rounded')}/>
          {auth.errors.password !== "" && <Text style={tailwind('pt-1 text-xs text-red-500')}>{auth.errors.password}</Text>}

        </TextInputContainer>
        <ButtonsContainer>
          <TouchableOpacity onPress={authWithEmail} style={tailwind('w-full bg-gray-800 py-3 px-4 rounded')}>
            <Text style={tailwind('text-white text-center')}>Create account</Text>
          </TouchableOpacity>
          {auth.errors.base !== "" && <Text style={tailwind('py-1 text-xs text-red-500')}>{auth.errors.base}</Text>}

        </ButtonsContainer>
      </TopContainer>
      <BottomContainer>
        <Text>
          Already have an account?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={tailwind('font-bold px-2')}>Sign in</Text>
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
  padding: 16px;
`;

const BottomContainer = styled.View`
  width: 100%;
  padding: 16px 0;
  flex-direction: row;
  justify-content: center;
`

const TopContainer = styled.View`
  width: 100%;
  padding: 16px 0;
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