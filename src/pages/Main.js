import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';

import icon from '../assets/book.png';

export default function Main() {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerText}>Minhas metas!</Text>
      </View>
      <ScrollView>
        <View style={styles.goalContainer}>
          <Image style={styles.goalIcon} source={icon} />
          <View style={styles.goalDetailContainer}>
            <Text style={styles.goalTitle}>Ler mais livros!</Text>
            <Text style={styles.goalDescription}>Ler 2400 páginas em livros</Text>
          </View>
        </View>
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

  goalContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
  },

  goalIcon: {
    height: 80,
    width: 80,
  },

  goalDetailContainer: {
    paddingLeft: 20,
  },

  goalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  goalDescription: {
    fontSize: 14,
    color: '#7B7B7B',
    fontStyle: 'italic',
  }
})