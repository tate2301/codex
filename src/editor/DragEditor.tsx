import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { MARGIN } from "./Config";
import Tile from "./Tile";
import SortableList from "./SortableList";
import { View } from "react-native";
import { shuffle } from "../../lib/utils";
import { TouchableOpacity } from "react-native-gesture-handler";
import Text from "../components/Text";
import { Button } from "../components";

const tiles = {
  blocks: [
    {
      id: "header",
      code: "#include<stdio.h>",
      language: "c",
    },
  
    {
      id: "main_declaration",
      code: "int main() {",
      language: "c",
    },
    {
      id: "facebook",
      code: "\t\tprintf('Hello World');",
      language: "c",
    },
    {
      id: "reanimated",
      code: "\t\treturn 0;",
      language: "c",
    },
    {
      id: "reanimated",
      code: "};",
      language: "c",
    },
  ]
};

interface Tile {
  id: string;
  code: string;
  language: string;
}

const DragEditor = () => {
  const initialState = shuffle(tiles.blocks)
  const [stateTiles, setState] = useState<[Tile]>(initialState)

  return (
      <View style={{height: '100%'}}>
        <View style={{paddingVertical: 8, paddingHorizontal: 8, marginVertical: 8}}>
            <Button label="RESET" primary onPress={() => setState(initialState)}/>
          </View>
        <SortableList
          editing={true}
          onDragEnd={(positions) =>{
            console.log(JSON.stringify(positions, null, 2));
          }}>
        {[...stateTiles].map((tile, index) => (
          <Tile
            onLongPress={() => true}
            key={tile.id + "-" + index}
            id={tile.id + "-" + index}
            code={tile.code}
            language={tile.language}
          />
        ))}
      </SortableList>
      </View>
      
  );
};

export default DragEditor;
