import React from 'react'
import { Image, Platform, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Artista from '../components/Artista'
import { obtenerArtistas } from '../api/artistas'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  }

  state = {
    artistas: [],
  }

  componentDidMount() {
    obtenerArtistas().then(artistas => this.setState({ artistas }))
  }

  renderItem = ({ item }) => <Artista datos={item} />

  render() {
    const { artistas } = this.state
    return <FlatList data={artistas} renderItem={this.renderItem} />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#fff',
  },
})
