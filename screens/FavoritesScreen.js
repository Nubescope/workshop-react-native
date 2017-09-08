import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'

export default class FavoritesScreen extends React.Component {
  static navigationOptions = {
    title: 'Favorites',
  }

  render() {
    return <ScrollView style={styles.container} />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
})
