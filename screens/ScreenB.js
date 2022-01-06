import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
const ScreenB = ({navigation}) => {
  const onPressHandler = () => {
    navigation.navigate('Screen_A');
  };
  return (
    <View style={styles.body}>
      <Text style={styles.text}>This is screen B</Text>
      <Pressable
        onPress={onPressHandler}
        style={({pressed}) => ({
          backgroundColor: pressed ? 'lightblue' : 'grey',
        })}>
        <Text style={styles.btnText}>Go to screen A</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 22,
  },
  btnText: {
    fontSize: 20,
    padding: 5,
    marginTop: 10,
  },
});
export default ScreenB;
