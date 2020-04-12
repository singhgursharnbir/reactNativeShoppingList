import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Alert} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
import {v4 as uuid} from 'uuid';
const App = () => {
  const [items, setItems] = useState([
    {id: uuid(), title: 'Milk'},
    {id: uuid(), title: 'Eggs'},
    {id: uuid(), title: 'Bread buy'},
    {id: uuid(), title: 'Juice'},
  ]);

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => {
        return item.id != id;
      });
    });
  };

  const addNewItem = text => {
    if (!text) {
      Alert.alert('Error', 'Please enter in item 😕', [
        {
          text: 'ok',
        },
      ]);
    } else {
      setItems(prevItems => {
        return [{id: uuid(), title: text}, ...prevItems];
      });
    }
  };
  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <AddItem addNewItem={addNewItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
