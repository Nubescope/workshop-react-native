import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default class Artista extends Component {
  render() {
    const { datos: { name, image, favorite }, onLike } = this.props
    const nombreIconoCorazon = `${Platform.OS === 'ios' ? 'ios-heart' : 'md-heart'}${favorite ? '' : '-outline'}`

    return (
      <View style={styles.container}>
        <Image source={{ uri: image }} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.nombre}>{name}</Text>
          <View style={styles.corazon}>
            <TouchableOpacity onPress={onLike}>
              <Ionicons name={nombreIconoCorazon} size={40} color="#f44336" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const styles = new StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#f5f5f5',
    margin: 5,
    elevation: 3,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowColor: '#333333',
    shadowOpacity: 0.5,
  },

  image: {
    height: 150,
    width: 150,
  },

  info: {
    flex: 1,
  },

  nombre: {
    flex: 1,
    margin: 10,
    marginTop: 15,
    fontSize: 20,
    textAlign: 'center',
  },

  corazon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
