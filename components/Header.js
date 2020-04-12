import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};

Header.defaultProps = {
  title: 'Shopping list ',
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    padding: 15,
    backgroundColor: 'darkslateblue',
  },
  text: {
    color: '#fff',
    fontSize: 23,
    textAlign: 'center',
  },
});
export default Header;
