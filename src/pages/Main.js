import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableWithoutFeedback } from 'react-native';

import Goal from '../components/Goal';

import book from '../assets/book.png';
import gym from '../assets/gym.png';


export default function Main() {
  
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerText}>Minhas metas!</Text>
      </View>
      <ScrollView>
        <Goal icon={book} title={'Ler mais livros!'} description='Ler 2400 páginas em livros' goal={2400} accomplished={30}/>
        <Goal icon={gym} title={'Ser fitness!'} description='Treinar 200 dias' goal={200} accomplished={17}/>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: '#5AC8FA',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },

  headerText: {
    color: '#FFFFFF',
    fontSize: 26,
  },

});