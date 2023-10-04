import React from "react";
import {View, Text} from "react-native";


export default function Tarefas({data}){
    return(
        <View>
            <Text>{data.tem}</Text>
        </View>
    )
}