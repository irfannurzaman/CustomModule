import React from 'react'
import {View, Text, TextInput, StyleSheet, SafeAreaView, NativeModules, Button} from 'react-native'

const {ToastExample, CalendarModule} = NativeModules;


function App() {

  return (
    <SafeAreaView style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Button onPress={() => {
        ToastExample.show('SUKSES',  ToastExample.SHORT)
      }} 
      title="open"
      />
      <Button onPress={() => {
        CalendarModule.createCalendarEvent('testName', 'testLocation');
      }} 
      title="calender"
      />
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 20,
    borderWidth: 1,
    width: 300,
    borderRadius: 5,
  },
});