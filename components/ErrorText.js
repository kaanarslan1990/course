import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function ErrorText({message}) {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>ERROR!</Text>
    <Text style={styles.message}>{message}</Text>
 
  </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor:'white',
        
      },
      title:{
        textAlign:'center',
        fontSize:24,
        fontWeight:'bold',
        color:'red'

      },
      message:{
        textAlign:'center',
        marginTop:10,

      }

})