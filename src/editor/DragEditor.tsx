import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { EvilIcons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 

import { MARGIN } from "./Config";
import Tile from "./Tile";
import SortableList from "./SortableList";
import { Alert, Modal, View } from "react-native";
import { shuffle } from "../../lib/utils";
import { TouchableOpacity } from "react-native-gesture-handler";
import Text from "../components/Text";
import { Button } from "../components";


const finalKeys = {
  "header": 0,
  "main_declaration": 1,
  "print_block": 2,
  "return_block": 3,
  "closing_bracket": 4
}

interface Tile {
  id: string;
  code: string;
  language: string;
}

interface Tiles {
  blocks: Tile[];
}

interface EditorProps {
  tiles: Tiles
  finalKeys: any
}

const DragEditor = ({tiles, finalKeys}: EditorProps) => {
  const initialState = shuffle(tiles.blocks)

  const [stateTiles, setState] = useState<[Tile]>(initialState)
  const [modalVisible, toggleModalVisibility] = useState(false)
  const [codeStatus, updateCodeStatus] = useState("You have to arrange the codeblocks")
  let tries = 0
  const onDragEnd = (positions) => {
    let status = true
    tries += 1
    for (const [key, value] of Object.entries(positions)) {
      console.log(value !== finalKeys[key])
      if(value !== finalKeys[key]) {
        status = false
      }
    }
    status === true ? Alert.alert("👏Congratulations. You have fixed the code in " + tries + " steps.") : null

    console.log({status})
  }

  const submit = () => {
    console.log({codeStatus})
    Alert.alert(codeStatus)
  }
  
  const reset = () => {
    console.log("Resetting")
    tries = 0
    //@ts-ignore
    return setState([...initialState])
  }

  const shuffler = () => {
    console.log("Resetting")
    tries = 0
    //@ts-ignore
    return setState([...shuffle(tiles.blocks)])
  }

  return (
      <View style={{height: '100%'}}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <Text>{codeStatus}</Text>
        </Modal>
        <View style={{paddingVertical: 8, paddingHorizontal: 8, marginVertical: 8, flexDirection: "row", justifyContent: "space-between"}}>
          <TouchableOpacity onPress={reset} style={{flexDirection:"row", alignItems: "center"}}>
            <EvilIcons name="redo" size={24} color="white" />
            <Text style={{color: "white", paddingHorizontal: 4, fontSize: 12, fontWeight: "bold"}}>RESET</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={shuffler} style={{flexDirection:"row", alignItems: "center"}}>
            <Feather name="shuffle" size={24} color="white" />
            <Text style={{color: "white", paddingHorizontal: 4, fontSize: 12, fontWeight: "bold"}}>SHUFFLE</Text>
          </TouchableOpacity>
          </View>
        <SortableList
          editing={true}
          onDragEnd={(positions) =>{
            onDragEnd(positions)
          }}>
        {[...stateTiles].map((tile, index) => (
          <Tile
            onLongPress={() => true}
            key={tile.id + "-" + index}
            id={tile.id}
            code={tile.code}
            language={tile.language}
          />
        ))}
      </SortableList>
      </View>
      
  );
};

export default DragEditor;
