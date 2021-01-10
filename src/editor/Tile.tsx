import React from "react";
import { StyleSheet, View } from "react-native";
import Markdown from 'react-native-markdown-display';

import Text from "../components/Text";
import CodeHighlighter from "./CodeHighlighter";

import { MARGIN, WIDTH } from "./Config";

const styles = StyleSheet.create({
  container: {
    width: WIDTH - MARGIN,
    flexGrow: 1,
    paddingVertical: 2,
    justifyContent: 'center',
  },
});
interface TileProps {
  id: string;
  code: string;
  language: string;
  onLongPress: () => void;
}

const Tile = ({ code, language }: TileProps) => {
  return (
    <View style={styles.container} pointerEvents="none">
      <View
        style={{
          borderRadius: 4,
          marginVertical: 1,
          flexGrow: 1,
          justifyContent: "center",
        }}>
        <CodeHighlighter language={language} code={code}/>
      </View>
    </View>
  );
};
const x = '<Markdown style={{color: "white"}}>{`\`\`\`${code} \`\`\``}</Markdown>'
export default Tile;
