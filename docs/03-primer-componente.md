### Armando un componente para mostrar cada artista
En React Native los estilos tienen dos grandes particularidades:
- Se definen por cada componente y en forma de objeto de JS (**CSS in JS**)
- Suele usarse **Flexbox** para definir la estructura (o _layout_)

Esto es un cambio de paradigma si venimos de la web, donde estamos acostumbrados a usar **CSS** y rara vez usamos **Flexbox**. Estos cambios tienen fuertes fundamentos, sobre todo el de estilos _inline_, que pueden ver [acá](http://blog.vjeux.com/2014/javascript/react-css-in-js-nationjs.html).

En este caso vamos a armar un componente que llamaremos `Artista` para mostrar la información de cada artista. Para eso:
1. Creamos un nuevo archivo `Artista.js` dentro de la carpeta `components`
1. Definimos la estructura básica del componente (podés usar [esta estructura](#estructura-para-componente-de-artista) sin estilos para comenzar)
    > TIP: usar un `backgroundColor` distinto para cada sección puede ser muy útil para esta tarea!
1. Agregamos la imagen del artista usando el componente [`<Image>`](https://facebook.github.io/react-native/docs/image.html) de React Native. 
    > TIP: las imágenes que usamos via _network_ (es decir, no locales sino via url) necesitan un tamaño definido específicamente. Por defecto tienen un ancho y alto de 0 píxeles, probá con un `width` y `height` de 150 por ejemplo.
1. Usamos alguno de los [íconos de Expo](https://docs.expo.io/versions/latest/guides/icons.html) para marcar los artistas favoritos.
1. Definimos la estructura definitiva usando las propiedades de estilo `flexDirection`, `justifyContent`, `alignItems` junto con las ya conocidas `margin`, `textAlign`, etc.
1. Desde nuestra `HomeScreen` incluimos el componente que acabamos de crear y lo usamos. ([ayuda](#incluyendo-artista-en-la-home))
1. Por último, vamos a pasar el artista al componente `<Artista>` por una `prop`: movemos el objeto de artista de `Artista.js` a `HomeScreen.js`, pasamos esa información por una `prop` y la obtenemos desde el componente de `Artista.js`. ([ayuda](#agregar-prop-para-artista)
    
#### Ayudas
##### Estructura para componente de Artista
```js
import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const artist = {
  name: 'Luis Alberto Spinneta',
  image: 'https://lh6.googleusercontent.com/eOcwBtI4_kBP2prhL0A5puNNUCNAlawW6guVHltl6L4=s865-no',
}

export default class Artista extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={{ uri: artist.image }} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.nombre}>{artist.name}</Text>
          <Text style={styles.corazon}>Icono corazon</Text>
        </View>
      </View>
    )
  }
}

const styles = new StyleSheet.create({
  container: {},
  image: {},
  info: {},
  nombre: {},
  corazon: {},
})

```

##### Incluyendo Artista en la Home
```js
import Artista from '../components/Artista'
...
render() {
  ...
    <Artista />
  ...
}
```

##### Agregar prop para artista
```js
/* HomeScreen.js */
import Artista from '../components/Artista'

const artista = {
  name: 'Luis Alberto Spinneta',
  image: 'https://lh6.googleusercontent.com/eOcwBtI4_kBP2prhL0A5puNNUCNAlawW6guVHltl6L4=s865-no',
}

...
render() {
  ...
    <Artista datos={artista} />
  ...
}

/* Artista.js */
render() {
  const { datos: { name, url } } = this.props
  ...
}
```
