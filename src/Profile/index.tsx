import React from 'react';
import styled from 'styled-components/native';

export default function Profile() {
    return(
        <Container>
            <Text>Profile</Text>
        </Container>
    )
}
    
const Container = styled.View`
      flex: 1;
      background-color: white;
      align-items: center;
      justify-content: center;
`;

const Text = styled.Text`
      font-weight: 500;
      font-size: 14px;
`;