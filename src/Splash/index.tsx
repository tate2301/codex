import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import tailwind from 'tailwind-rn';

export default function Splash() {
  return(
    <Container>
      <TopContainer>
        <Heading>Learn programming in an easy way</Heading>
        <Text style={tailwind('text-gray-600')}>This is something</Text>
        <ButtonsContainer>
          <TouchableOpacity style={tailwind('w-full bg-gray-800 py-3 px-4 rounded')}>
            <Text style={tailwind('text-white')}>Sign in with Google</Text>
          </TouchableOpacity>
        </ButtonsContainer>
      </TopContainer>
      <BottomContainer>
        <Text>
          Already have an account?
        </Text>
        <TouchableOpacity>
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
  padding: 32px 0;
  width: 100%;
`

const Heading = styled.Text`
  font-size: 32px;
  color: #121212;
  font-weight: 700;
  text-align: center;

`

const Text = styled.Text`
  font-size: 14px;
  text-align: center;
`;