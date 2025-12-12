import { Text, View, StyleSheet } from 'react-native';
import React, { Component } from 'react';

export default class TipOfTheDay extends Component {
  // Class property

  // This is the constructor
  constructor(props) {
    super(props);
    this.myDate = new Date();
    this.tips = [
      'Always wash your hands after eating',
      'Be nice to other people',
      'Eat vegetables and fruits',
    ];
  }

  render() {
    // This is a style variable
    const styles = StyleSheet.create({
      text: {
        color: '#fff',
        fontSize: 16,
      },
    });

    let selected = Math.floor(Math.random() * 2);
    const today =
      this.myDate.getDate().toString() +
      '.' +
      (this.myDate.getMonth() + 1).toString() +
      '.' +
      this.myDate.getFullYear().toString();
    return (
      <View>
        <Text style={styles.text}>Today is {today} </Text>
        <Text style={styles.text}>Tip of the day: {this.tips[selected]}</Text>
      </View>
    );
  }
}
