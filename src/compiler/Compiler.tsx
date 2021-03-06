import React from 'react'
import { View, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native'
import { spec } from '../Lesson/data/card-theme'
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import { arduinoLight } from 'react-syntax-highlighter/styles/hljs';
import Text from '../components/Text';
import Markdown from 'react-native-markdown-display';
import { useFonts, SpaceMono_400Regular } from '@expo-google-fonts/space-mono';
import Axios from 'axios';
import tailwind from 'tailwind-rn';

// Show something on top of other
export default function Compiler() {
    const [value, onChangeText] = React.useState("");
    const [runResult, setRunningResult] = React.useState("You have not run anything yet");
    const [runError, setRunError] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    const run = async () => {
        setLoading(true)
        setRunningResult("")
        setRunError("")
        Axios.post("http://ec2-3-8-153-110.eu-west-2.compute.amazonaws.com:8000/compile", { code: value })
            .then(response => {
                if (!response.data.error) {
                    setRunningResult(response.data?.message)
                } else {
                    setRunError(response.data?.message)
                }
                setLoading(false)
            })
            .catch(error => {
                setRunError(error.message)
                setLoading(false)
            })
    }
    
    let [fontsLoaded] = useFonts({
        SpaceMono_400Regular,
    });

    
    
    if(!fontsLoaded) {
        return(
            <View style={styles.container}>

            </View>
        )
    }
    
    return (
        <View style={styles.container}>
            <View style={[{flex: 3, height: '100%', paddingVertical: 4 }, tailwind("rounded-lg")]}>
                <View
                    style={[{position: "absolute", top: 0, left: 0, height: '100%', backgroundColor: "#fff", width: "100%"}, tailwind("rounded-lg")]}>
                    <SyntaxHighlighter 
                        language={"c"} 
                        customStyle={{fontSize: 12, fontFamily: "SpaceMono_400Regular"}}
                        style={arduinoLight}
                        highlighter={"hljs"}>
                        {value}
                    </SyntaxHighlighter>
                </View>
                <TextInput
                        style={{
                            position: "absolute", 
                            paddingHorizontal: 8,
                            paddingVertical: 8,
                            top: 0, 
                            left: 0,
                            width: '100%',
                            color: '#ffffff00',
                            fontSize: 12,
                            fontFamily: "SpaceMono_400Regular"
                        }}
                        editable
                        autoFocus={true}
                        autoCapitalize="none"
                        value={value}
                        onChangeText={onChangeText}
                        multiline={true}
                />
            </View>
            <View style={[{padding: 16, flex: 1, backgroundColor: "#fff"}, tailwind("rounded-lg")]}>
                <View style={tailwind("flex justify-between flex-row")}>
                    <Text style={tailwind("text-lg font-bold pb-2")}>
                        Output
                    </Text>
                    <TouchableOpacity onPress={() => run()} style={tailwind("rounded-full px-4 py-2 bg-green-600")}>
                        <Text style={tailwind("text-center text-white text-sm font-bold")}>Run</Text>
                    </TouchableOpacity>
                </View>
                <View style={tailwind("py-2")}>

                    {loading && 
                        <View style={tailwind("flex flex-col justify-center")}>
                            <ActivityIndicator color="#0000ff" />
                        </View>
                    }
                    
                    {(!loading) && 
                        <ScrollView>
                            <Text style={tailwind(`text-sm ${runError && "text-red-500"}`)}>
                                {runResult || runError}
                            </Text>  
                        </ScrollView> 
                    }
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spec.SPACING
  }
})