import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { FontAwesome} from '@expo/vector-icons'

export default function Tarefas({data, deleteItem}){
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={deleteItem}>
                <FontAwesome name="trash" size={20} color={"#22272e"}/>
            </TouchableOpacity>
            <Text>{data.item}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f1f1f1",
        marginTop: 10,
        marginBottom: 5,
        padding: 20,
        borderRadius: 4,
        shadowColor: "#000",
        flexDirection: "row"
    },
    button: {
        marginRight: 8,
    }
})