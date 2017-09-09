### Agregando la funcionalidad de favorito
Ahora queremos poder marcar ciertos artistas como favoritos.

Para eso vamos a tener que _hacer clickeable_ el ícono de corazón y modificar el artista agregando una propiedad que indique que es favorito.
1. Usamos `<TouchableOpacity>` que es parte de React Native _envolviendo_ el componente de ícono y definiendo un _handler_ para la prop `onPress` ([ayuda](#clickeando-el-icono))
1. Luego movemos el _handler_ que definimos a `HomeScreen.js` y agregar una **prop** llamada `onLike` en el componente de `<Artista>` ([ayuda](#moviendo-el-handler-a-la-home))
1. Para actualizar el artista debemos crear un nuevo objeto (clonarlo) porque si no los cambios no se reflejarán en la vista. Esto es algo común en el mundo de React. ([ayuda](#modificando-el-artista))
1. 

### Ayudas
#### Clickeando el ícono
```js

handlePressCorazon = () => console.warn('Like!')

render() {
  ...
  <TouchableOpacity onPress={this.handlePressCorazon}>
    <Ionicons name={nombreIconoCorazon} size={40} color="#f44336" />
  </TouchableOpacity>
  ..
}
```

#### Moviendo el handler a la Home
```js
/* En Artista.js cambiamos el onPress para llamar a una prop */
<TouchableOpacity onPress={this.props.onLike}> 

/* En HomeScreen.js agregamos `handleLikeArtista` y la prop `onLike` en <Artista> */
handleLikeArtista = artista => {
  console.warn('Like', artista.name)
}

renderItem = ({ item }) => <Artista datos={item} onLike={() => this.handleLikeArtista(item)} />
```

#### Modificando el artista
```js
  handleLikeArtista = artista => {
    this.setState({
      artistas: this.state.artistas.map(a => {
        if (a.key === artista.key) {
          return {
            ...artista,
            favorite: !artista.favorite,
          }
        }

        return a
      }),
    })
  }
```