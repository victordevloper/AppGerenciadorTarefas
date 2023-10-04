import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList} from 'react-native';
import { FontAwesome} from '@expo/vector-icons'
import Tarefas from './my-app/tarefas';

export default function App() {

  const [tarefa, setTarefa] = useState('');
  const [list, setList] = useState ([])

  function handleAdd(){
      if(tarefa === ''){
        return;
      }
      
      const dados = {
        key: Date.now(),
        item: tarefa
      }

      setList(oldArray => [dados, ...oldArray])
      setTarefa('')
  }

  function handleDelete(){
    if(list.length === 0){
      return;
    }

    setList(oldArray => oldArray.slice(1))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tarefas</Text>
      <View style={styles.containerInput}>
          <TextInput placeholder='Digite a sua tarefa' style={styles.input} value={tarefa} onChangeText={(text) => setTarefa(text)}/>
            <TouchableOpacity style={styles.buttonAdd} onPress={handleAdd}>
            <FontAwesome name="plus" size={20} color={"#fff"}/>
          </TouchableOpacity>
      </View>

      <FlatList data={list}
      keyExtractor={(item) => item.key}
      renderItem={({item}) => <Tarefas data={item} deleteItem={() => handleDelete(item.item)}/>}
      style={styles.list}
      />
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    paddingTop: 28
  },
  title:{
    fontSize: 25,
    fontWeight: 'bold',
    color: "#fff",
    marginTop: "10%",
    marginLeft: "10%",
    marginBottom: 22,
  },
  containerInput:{
    flexDirection: "row",
    width: "100%",
    height: 44,
    alignItems: 'center',
    justifyContent: "center",
    marginBottom: 20,
  },
  input:{
    backgroundColor: "#fff",
    width: "70%",
    height: 44,
    borderRadius: 5,
    paddingHorizontal: 8
  },
  buttonAdd:{
    width: "15%",
    height: 44,
    backgroundColor: 'red',
    borderRadius: 5,
    marginLeft: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  list:{
    flex: 1,
    backgroundColor: "#fff",
    paddingStart: '4%',
    paddingEnd: '4%'
  }
});
