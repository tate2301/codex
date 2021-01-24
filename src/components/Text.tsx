import React, { ReactNode } from "react";
import { TextProps as OriginalTextProps } from "react-native";
import styled from 'styled-components/native'
import StyleGuide from "./StyleGuide";

export interface TextProps extends OriginalTextProps {
  dark?: boolean;
  type?: keyof typeof StyleGuide["typography"];
  children: ReactNode;
}

const Text = ({ dark, type, style, children }: TextProps) => {
  const color = dark ? "white" : "#121212";
  return (
    <RNText style={[StyleGuide.typography[type || "body"], { color }, style]}>
      {children}
    </RNText>
  );
};

const RNText = styled.Text`
  font-size: 14px;
`


export default Text;
