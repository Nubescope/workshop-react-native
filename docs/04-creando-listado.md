### Creando un listado de artistas
Ya tenemos nuestro componente de `<Artista>` listo y ahora queremos mostrar más de uno.

#### Usando `<ScrollView>`
Si vamos a tener muchos artistas entonces necesitamos poder _scrollear_ sobre la pantalla de nuestro dispositivo y parece ideal usar el componente `<ScrollView>` que viene incluido en React Native.

Para poder probarlo podemos crear una lista de 500 artistas (500 Spinnetas por ahora) y mostrarlos todos dentro de un `<ScrollView>` haciendo 
```js
const artista = { name: ... }
const artistas = new Array(500).fill(artista)
...

render() {
  return <ScrollView style={styles.container}>
    {artistas.map(artista => <Artista datos={artista} />)}
  </ScrollView>
}
```

El problema con `<ScrollView>` es que hace un _render_ de todos los items (que pueden ser muchos!!) desde el principio: esto es lento y podría traer problemas de performance/memoria. Si miran la _barra de scroll_ a la derecha de la pantalla van a poder corroborar que todos los elementos ya están _renderizados_.

#### Usando `<FlatList>`
Por suerte existe otro componente que es parte de React Native que nos permite mostrar un listado de componentes pero mostrando solamente algunos de ellos (los que están en pantalla, más algunos de arriba y abajo). La diferencia con el `<ScrollView>` es que necesitamos definir un método que definir el _render_ de nuestro elemento usando una **prop** llamada `renderItem` que va a ser llamado con cada elemento de la lista que le pasamos por otra **prop** llamada `data`.
```js
  renderItem = ({ item }) => <Artista datos={item} />

  render() {
    return <FlatList data={artistas} renderItem={this.renderItem} />
  }
```

También es obligatorio especificar una `key` distinta para cada item, por lo que vamos a cambiar nuestro objeto de `artistas` de la siguiente manera
```js
const artistas = new Array(500).fill(artista).map((artista, i) => ({ ...artista, key: i }))
```

Ahora podemos notar que la vista se _renderiza_ más rápido y si miramos la _barra de scroll_ a la derecha de la pantalla van a poder corroborar que los elementos se van _cargando_ a medida que _scrolleamos_: a medida que nos acercamos al final nuevos elementos se _renderizan_.

#### Consumiendo una API para traer artistas
Para terminar esta parte vamos a reemplazar el listado de artistas por uno verdadero, consumiendo un JSON usando `fetch`.

Vamos a aprovechar la carpeta `api` y crear un archivo `artistas.js` en el que exportaremos un método que haga fetch a la url: COMPLETAR_CON_URL. ([ayuda](#fetcheando-artistas))

El primer problema que nos vamos a encontrar es que el formato que nos devuelve la API de **Spotify** no es el que nosotros habíamos definido por cada artista. Por eso, además de hacer el fetch, vamos a formatear cada artista como nos conviene. ([ayuda](#formateando-artistas))

Finalmente incluimos `api/artists.js` desde `HomeScreen.js` y lo llamamos en el `componentDidMount`. ([ayuda](#usando-la-api))

### Ayuda
#### Fetcheando artistas
```js
export const obtenerArtistas = () => {
  return fetch(COMPLETAR_URL).then(res => res.json())
}
```

#### Formateando artistas
```js
export const obtenerArtistas = () => {
  return fetch(COMPLETAR_URL).then(res => res.json()).then(response =>
    response.artists.items.map(artist => ({
      name: artist.name,
      key: artist.id,
      image: artist.images[1] && artist.images[1].url,
    }))
  )
}
```

### Usando la API
```js
/* HomeScreen.js */
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
```
