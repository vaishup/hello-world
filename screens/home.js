import React  from "react";
import { StyleSheet ,View, Text,Button} from "react-native";
import { globalStyles } from '../styles/global';


export default function Home( { navigator}){

    const presssHandler = () => {
        navigator.navigate('ReviewDetails')
    }
    return (
        <View style= {globalStyles.container}>
            <Text style={globalStyles.titleText}>Home Screen</Text>
            <Button title ='go to review' onPress= {presssHandler}></Button>
        </View>
    )
}
