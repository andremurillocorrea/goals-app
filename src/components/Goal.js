import React, { useState } from 'react';

import { View, Image, Text, StyleSheet } from 'react-native';

import DoubleTapTouchable from './DoubleTapTouchable';

function getGoalToDate(goal) {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  const firstDayOfYear = new Date(`01/01/${currentYear}`);
  const passedDays = msToDays(currentDate - firstDayOfYear);
  const daysInYear = 365;

  const goalToDate = Math.round(goal / daysInYear * passedDays);

  return goalToDate;
}

function msToDays(timeInMs) {
  return timeInMs / (1000 * 60 * 60 * 24);
}

export default function Goal(props) {
  const [accomplished, setAccomplished] = useState(props.accomplished);

  function handleDoubleClick() {
    setAccomplished(accomplished + 1);
  }

  function handleLongPress() {
    console.log('long press');
  }

  return (
    <DoubleTapTouchable onDoubleTap={handleDoubleClick} onLongPress={handleLongPress} delay={300}>
      <View style={styles.goalContainer}>
        <Image style={styles.goalIcon} source={props.icon} />
        <View style={styles.goalDetailContainer}>
          <Text style={styles.goalTitle}>{props.title}</Text>
          <Text style={styles.goalDescription}>{props.description}</Text>
          <Text >Meta-to-date: {getGoalToDate(props.goal)}/{props.goal}</Text>
          <Text >Realizado: {accomplished}/{props.goal}</Text>
        </View>
      </View>
    </DoubleTapTouchable>
  )
}

const styles = StyleSheet.create({
  goalContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
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